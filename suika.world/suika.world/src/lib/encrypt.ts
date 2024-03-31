export const PREFIX = 'enc_';
const PADDING = 32;

function import_key(key: string) {
	const encoder = new TextEncoder();
	const key_bytes = encoder.encode(key);
	let padded: Uint8Array;
	if (key_bytes.length >= PADDING) {
		padded = key_bytes.slice(0, PADDING);
	} else {
		padded = new Uint8Array(PADDING);
		padded.set(key_bytes, 0);
	}
	return crypto.subtle.importKey('raw', padded, { name: 'AES-GCM' }, false, [
		'encrypt',
		'decrypt',
	]);
}

export async function encrypt_code(code: string, key: string): Promise<string> {
	const encoder = new TextEncoder();
	const data = encoder.encode(code);

	// Import the key
	const importedKey = await import_key(key);

	// Generate a random IV (Initialization Vector)
	const iv = crypto.getRandomValues(new Uint8Array(12));

	// Encrypt the data using AES-GCM
	const encryptedData = await crypto.subtle.encrypt(
		{
			name: 'AES-GCM',
			iv,
		},
		importedKey,
		data,
	);

	// Combine the IV and encrypted data into a single array
	const combined = new Uint8Array(iv.length + encryptedData.byteLength);
	combined.set(iv);
	combined.set(new Uint8Array(encryptedData), iv.length);

	// Convert the combined array to a base64-encoded string
	const encryptedCode = btoa(String.fromCharCode(...combined));

	return (
		PREFIX +
		encryptedCode.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
	);
}

// Function to decrypt the encrypted code using the Web Crypto API
export async function decrypt_code(
	encrypted: string,
	key: string,
): Promise<string> {
	if (!encrypted.startsWith(PREFIX)) {
		return encrypted;
	}
	const decoder = new TextDecoder();

	// Decode the base64-encoded string back to a binary array
	const combined = new Uint8Array(
		atob(encrypted.slice(PREFIX.length).replace(/-/g, '+').replace(/_/g, '/'))
			.split('')
			.map((char) => char.charCodeAt(0)),
	);

	// Extract the IV and encrypted data
	const iv = combined.slice(0, 12);
	const encryptedData = combined.slice(12);

	// Import the key
	const importedKey = await import_key(key);

	// Decrypt the data using AES-GCM
	const decryptedData = await crypto.subtle.decrypt(
		{
			name: 'AES-GCM',
			iv,
		},
		importedKey,
		encryptedData,
	);

	// Convert the decrypted binary data back to a string
	const decryptedCode = decoder.decode(decryptedData);

	return decryptedCode;
}
