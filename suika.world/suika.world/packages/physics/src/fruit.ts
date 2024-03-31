import type {
	Collider,
	EventQueue,
	RigidBody,
	Vector2,
	World,
} from '@dimforge/rapier2d';
import { FruitType } from 'schema';
import fruits_raw from './fruit_def.json';

export type FruitDef = {
	type: FruitType;
	name: string;
	size: {
		x: number;
		y: number;
	};
	img: string;
	/** points gained when two of these combine */
	score: number;
	center: { x: number; y: number };
	rotten: boolean;
	hitbox_radius: number;
};

export const fruits = fruits_raw as FruitDef[];

export function get_fruit(type: FruitType) {
	return fruits[type - 1]!;
}

export function get_garbage_fruit(difference: number): FruitType {
	for (let i = FruitType.Watermelon; i > FruitType.Cherry; i--) {
		const cap = Math.pow(2, i);
		if (difference > cap) return i + FruitType.RottenCherry - 1;
	}
	return FruitType.RottenCherry;
}

export type FruitBaseContext<TFruit = unknown> = {
	RAPIER: typeof import('@dimforge/rapier2d');
	world: World;
	ground_handle: number;
	event_queue: EventQueue;
	fruits: Map<number, TFruit>;
	falling_fruit?: TFruit;

	kill_grace_timer: number;
	is_dead: boolean;
	score: number;
	last_drop_time: number;
	drop_timer: number;
	garbage_bar: number;
};

export class FruitBase<TContext extends FruitBaseContext = FruitBaseContext> {
	static SCALE = 0.000197;

	constructor(
		public type: FruitType,
		public def: FruitDef,
		public rigidBody: RigidBody,
		public collider: Collider,
		public handle: number,
		protected context: TContext,
	) {}

	public get rotten() {
		return (
			this.type >= FruitType.RottenCherry &&
			this.type <= FruitType.RottenWatermelon
		);
	}

	get radius() {
		return this.def.hitbox_radius * this.def.size.x * FruitBase.SCALE;
	}

	static create_body(
		def: FruitDef,
		position: Vector2,
		context: FruitBaseContext,
	) {
		/* RigidBody */
		const desc = context.RAPIER.RigidBodyDesc.dynamic()
			.setCcdEnabled(true)
			.setTranslation(position.x, position.y)
			.setRotation(-0.785398163)
			.setLinearDamping(0.5);
		const rigidBody = context.world.createRigidBody(desc);

		const colliderDesc = context.RAPIER.ColliderDesc.ball(
			def.hitbox_radius * def.size.x * FruitBase.SCALE,
		)
			.setFriction(0.15)
			.setDensity(1.5)
			.setCollisionGroups(0x10001)
			.setRestitution(0.15);
		const collider = context.world.createCollider(colliderDesc, rigidBody);
		collider.setTranslation({
			x: def.center.x * def.size.x,
			y: def.center.y * def.size.y,
		});
		collider.setActiveEvents(context.RAPIER.ActiveEvents.COLLISION_EVENTS);

		return {
			rigidBody,
			collider,
		};
	}

	combine() {
		if (this.type === FruitType.Watermelon)
			return {
				combine: true,
				output: FruitType.Blueberry,
				score: this.def.score,
			};
		if (this.type === FruitType.Blueberry) {
			return {
				combine: false,
				score: 0,
			};
		}
		// rotten kills entirely
		if (this.type > FruitType.Watermelon)
			return {
				combine: true,
				output: null,
				score: 0,
			};
		return {
			combine: true,
			output: (this.type + 1) as FruitType,
			score: this.def.score,
		};
	}

	destroy() {
		this.context.world.removeRigidBody(this.rigidBody);
		this.context.fruits.delete(this.handle);
	}
}
