import { BebopView, BebopRuntimeError, BebopRecord, BebopJson, BebopTypeGuard, Guid, GuidMap } from "bebop";

export interface IReplay extends BebopRecord {
  boards: Map<string, IReplayBoard>;
}

export class Replay implements IReplay {
  public boards: Map<string, IReplayBoard>;

  constructor(record: IReplay) {
    this.boards = record.boards;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return Replay.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IReplay): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    Replay.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link Replay}.
   */
  public static validateCompatibility(record: IReplay): void {
    BebopTypeGuard.ensureMap(record.boards, BebopTypeGuard.ensureString, ReplayBoard.validateCompatibility);
  }

  /**
   * Unsafely creates an instance of {@link Replay} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IReplay {
      return new Replay(record);
  }

  /**
   * Creates a new {@link Replay} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IReplay {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`Replay.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    Replay.validateCompatibility(parsed);
    return Replay.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return Replay.encode(this);
  }

  public static encode(record: IReplay): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    Replay.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IReplay, view: BebopView): number {
    const before = view.length;
    view.writeUint32(record.boards.size);
    for (const [k0, v0] of record.boards) {
      view.writeString(k0);
      ReplayBoard.encodeInto(v0, view)
    }
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IReplay {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return Replay.readFrom(view);
  }

  public static readFrom(view: BebopView): IReplay {
    let field0: Map<string, IReplayBoard>;
    {
      let length0 = view.readUint32();
      field0 = new Map<string, IReplayBoard>();
      for (let i0 = 0; i0 < length0; i0++) {
        let k0: string;
        let v0: IReplayBoard;
        k0 = view.readString();
        v0 = ReplayBoard.readFrom(view);
        field0.set(k0, v0);
      }
    }
    let message: IReplay = {
      boards: field0,
    };
    return new Replay(message);
  }
}

export interface IReplayBoard extends BebopRecord {
  drops: Array<IReplayDrop>;
}

export class ReplayBoard implements IReplayBoard {
  public drops: Array<IReplayDrop>;

  constructor(record: IReplayBoard) {
    this.drops = record.drops;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return ReplayBoard.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IReplayBoard): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    ReplayBoard.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link ReplayBoard}.
   */
  public static validateCompatibility(record: IReplayBoard): void {
    BebopTypeGuard.ensureArray(record.drops, ReplayDrop.validateCompatibility);
  }

  /**
   * Unsafely creates an instance of {@link ReplayBoard} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IReplayBoard {
      return new ReplayBoard(record);
  }

  /**
   * Creates a new {@link ReplayBoard} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IReplayBoard {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`ReplayBoard.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    ReplayBoard.validateCompatibility(parsed);
    return ReplayBoard.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return ReplayBoard.encode(this);
  }

  public static encode(record: IReplayBoard): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    ReplayBoard.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IReplayBoard, view: BebopView): number {
    const before = view.length;
    {
      const length0 = record.drops.length;
      view.writeUint32(length0);
      for (let i0 = 0; i0 < length0; i0++) {
        ReplayDrop.encodeInto(record.drops[i0], view)
      }
    }
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IReplayBoard {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return ReplayBoard.readFrom(view);
  }

  public static readFrom(view: BebopView): IReplayBoard {
    let field0: Array<IReplayDrop>;
    {
      let length0 = view.readUint32();
      field0 = new Array<IReplayDrop>(length0);
      for (let i0 = 0; i0 < length0; i0++) {
        let x0: IReplayDrop;
        x0 = ReplayDrop.readFrom(view);
        field0[i0] = x0;
      }
    }
    let message: IReplayBoard = {
      drops: field0,
    };
    return new ReplayBoard(message);
  }
}

export interface IReplayDrop extends BebopRecord {
  tick: number;
  type: FruitType;
  x: number;
}

export class ReplayDrop implements IReplayDrop {
  public tick: number;
  public type: FruitType;
  public x: number;

  constructor(record: IReplayDrop) {
    this.tick = record.tick;
    this.type = record.type;
    this.x = record.x;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return ReplayDrop.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IReplayDrop): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    ReplayDrop.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link ReplayDrop}.
   */
  public static validateCompatibility(record: IReplayDrop): void {
    BebopTypeGuard.ensureUint32(record.tick)
    BebopTypeGuard.ensureEnum(record.type, FruitType);
    BebopTypeGuard.ensureFloat(record.x)
  }

  /**
   * Unsafely creates an instance of {@link ReplayDrop} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IReplayDrop {
      return new ReplayDrop(record);
  }

  /**
   * Creates a new {@link ReplayDrop} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IReplayDrop {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`ReplayDrop.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    ReplayDrop.validateCompatibility(parsed);
    return ReplayDrop.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return ReplayDrop.encode(this);
  }

  public static encode(record: IReplayDrop): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    ReplayDrop.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IReplayDrop, view: BebopView): number {
    const before = view.length;
    view.writeUint32(record.tick);
    view.writeByte(record.type);
    view.writeFloat32(record.x);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IReplayDrop {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return ReplayDrop.readFrom(view);
  }

  public static readFrom(view: BebopView): IReplayDrop {
    let field0: number;
    field0 = view.readUint32();
    let field1: FruitType;
    field1 = view.readByte() as FruitType;
    let field2: number;
    field2 = view.readFloat32();
    let message: IReplayDrop = {
      tick: field0,
      type: field1,
      x: field2,
    };
    return new ReplayDrop(message);
  }
}

export interface IFinalBoardStates extends BebopRecord {
  boards: Map<string, IFinalBoardState>;
}

export class FinalBoardStates implements IFinalBoardStates {
  public boards: Map<string, IFinalBoardState>;

  constructor(record: IFinalBoardStates) {
    this.boards = record.boards;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return FinalBoardStates.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IFinalBoardStates): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    FinalBoardStates.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link FinalBoardStates}.
   */
  public static validateCompatibility(record: IFinalBoardStates): void {
    BebopTypeGuard.ensureMap(record.boards, BebopTypeGuard.ensureString, FinalBoardState.validateCompatibility);
  }

  /**
   * Unsafely creates an instance of {@link FinalBoardStates} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IFinalBoardStates {
      return new FinalBoardStates(record);
  }

  /**
   * Creates a new {@link FinalBoardStates} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IFinalBoardStates {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`FinalBoardStates.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    FinalBoardStates.validateCompatibility(parsed);
    return FinalBoardStates.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return FinalBoardStates.encode(this);
  }

  public static encode(record: IFinalBoardStates): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    FinalBoardStates.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IFinalBoardStates, view: BebopView): number {
    const before = view.length;
    view.writeUint32(record.boards.size);
    for (const [k0, v0] of record.boards) {
      view.writeString(k0);
      FinalBoardState.encodeInto(v0, view)
    }
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IFinalBoardStates {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return FinalBoardStates.readFrom(view);
  }

  public static readFrom(view: BebopView): IFinalBoardStates {
    let field0: Map<string, IFinalBoardState>;
    {
      let length0 = view.readUint32();
      field0 = new Map<string, IFinalBoardState>();
      for (let i0 = 0; i0 < length0; i0++) {
        let k0: string;
        let v0: IFinalBoardState;
        k0 = view.readString();
        v0 = FinalBoardState.readFrom(view);
        field0.set(k0, v0);
      }
    }
    let message: IFinalBoardStates = {
      boards: field0,
    };
    return new FinalBoardStates(message);
  }
}

export interface IFinalBoardState extends BebopRecord {
  fruits: Array<IFinalBoardFruit>;
}

export class FinalBoardState implements IFinalBoardState {
  public fruits: Array<IFinalBoardFruit>;

  constructor(record: IFinalBoardState) {
    this.fruits = record.fruits;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return FinalBoardState.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IFinalBoardState): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    FinalBoardState.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link FinalBoardState}.
   */
  public static validateCompatibility(record: IFinalBoardState): void {
    BebopTypeGuard.ensureArray(record.fruits, FinalBoardFruit.validateCompatibility);
  }

  /**
   * Unsafely creates an instance of {@link FinalBoardState} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IFinalBoardState {
      return new FinalBoardState(record);
  }

  /**
   * Creates a new {@link FinalBoardState} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IFinalBoardState {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`FinalBoardState.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    FinalBoardState.validateCompatibility(parsed);
    return FinalBoardState.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return FinalBoardState.encode(this);
  }

  public static encode(record: IFinalBoardState): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    FinalBoardState.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IFinalBoardState, view: BebopView): number {
    const before = view.length;
    {
      const length0 = record.fruits.length;
      view.writeUint32(length0);
      for (let i0 = 0; i0 < length0; i0++) {
        FinalBoardFruit.encodeInto(record.fruits[i0], view)
      }
    }
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IFinalBoardState {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return FinalBoardState.readFrom(view);
  }

  public static readFrom(view: BebopView): IFinalBoardState {
    let field0: Array<IFinalBoardFruit>;
    {
      let length0 = view.readUint32();
      field0 = new Array<IFinalBoardFruit>(length0);
      for (let i0 = 0; i0 < length0; i0++) {
        let x0: IFinalBoardFruit;
        x0 = FinalBoardFruit.readFrom(view);
        field0[i0] = x0;
      }
    }
    let message: IFinalBoardState = {
      fruits: field0,
    };
    return new FinalBoardState(message);
  }
}

export interface IFinalBoardFruit extends BebopRecord {
  type: FruitType;
  x: number;
  y: number;
  rotation: number;
}

export class FinalBoardFruit implements IFinalBoardFruit {
  public type: FruitType;
  public x: number;
  public y: number;
  public rotation: number;

  constructor(record: IFinalBoardFruit) {
    this.type = record.type;
    this.x = record.x;
    this.y = record.y;
    this.rotation = record.rotation;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return FinalBoardFruit.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IFinalBoardFruit): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    FinalBoardFruit.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link FinalBoardFruit}.
   */
  public static validateCompatibility(record: IFinalBoardFruit): void {
    BebopTypeGuard.ensureEnum(record.type, FruitType);
    BebopTypeGuard.ensureFloat(record.x)
    BebopTypeGuard.ensureFloat(record.y)
    BebopTypeGuard.ensureFloat(record.rotation)
  }

  /**
   * Unsafely creates an instance of {@link FinalBoardFruit} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IFinalBoardFruit {
      return new FinalBoardFruit(record);
  }

  /**
   * Creates a new {@link FinalBoardFruit} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IFinalBoardFruit {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`FinalBoardFruit.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    FinalBoardFruit.validateCompatibility(parsed);
    return FinalBoardFruit.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return FinalBoardFruit.encode(this);
  }

  public static encode(record: IFinalBoardFruit): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    FinalBoardFruit.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IFinalBoardFruit, view: BebopView): number {
    const before = view.length;
    view.writeByte(record.type);
    view.writeFloat32(record.x);
    view.writeFloat32(record.y);
    view.writeFloat32(record.rotation);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IFinalBoardFruit {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return FinalBoardFruit.readFrom(view);
  }

  public static readFrom(view: BebopView): IFinalBoardFruit {
    let field0: FruitType;
    field0 = view.readByte() as FruitType;
    let field1: number;
    field1 = view.readFloat32();
    let field2: number;
    field2 = view.readFloat32();
    let field3: number;
    field3 = view.readFloat32();
    let message: IFinalBoardFruit = {
      type: field0,
      x: field1,
      y: field2,
      rotation: field3,
    };
    return new FinalBoardFruit(message);
  }
}

export interface IDropFruit extends BebopRecord {
  tick: number;
  x: number;
  buffer: boolean;
}

export class DropFruit implements IDropFruit {
  public readonly discriminator: number = 1 as 1;
  public tick: number;
  public x: number;
  public buffer: boolean;

  constructor(record: IDropFruit) {
    this.tick = record.tick;
    this.x = record.x;
    this.buffer = record.buffer;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return DropFruit.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IDropFruit): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    DropFruit.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link DropFruit}.
   */
  public static validateCompatibility(record: IDropFruit): void {
    BebopTypeGuard.ensureUint32(record.tick)
    BebopTypeGuard.ensureFloat(record.x)
    BebopTypeGuard.ensureBoolean(record.buffer)
  }

  /**
   * Unsafely creates an instance of {@link DropFruit} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IDropFruit {
      return new DropFruit(record);
  }

  /**
   * Creates a new {@link DropFruit} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IDropFruit {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`DropFruit.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    DropFruit.validateCompatibility(parsed);
    return DropFruit.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return DropFruit.encode(this);
  }

  public static encode(record: IDropFruit): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    DropFruit.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IDropFruit, view: BebopView): number {
    const before = view.length;
    view.writeUint32(record.tick);
    view.writeFloat32(record.x);
    view.writeByte(Number(record.buffer));
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IDropFruit {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return DropFruit.readFrom(view);
  }

  public static readFrom(view: BebopView): IDropFruit {
    let field0: number;
    field0 = view.readUint32();
    let field1: number;
    field1 = view.readFloat32();
    let field2: boolean;
    field2 = !!view.readByte();
    let message: IDropFruit = {
      tick: field0,
      x: field1,
      buffer: field2,
    };
    return new DropFruit(message);
  }
}

export interface IPreviewMove extends BebopRecord {
  x: number;
}

export class PreviewMove implements IPreviewMove {
  public readonly discriminator: number = 2 as 2;
  public x: number;

  constructor(record: IPreviewMove) {
    this.x = record.x;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return PreviewMove.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IPreviewMove): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    PreviewMove.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link PreviewMove}.
   */
  public static validateCompatibility(record: IPreviewMove): void {
    BebopTypeGuard.ensureFloat(record.x)
  }

  /**
   * Unsafely creates an instance of {@link PreviewMove} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IPreviewMove {
      return new PreviewMove(record);
  }

  /**
   * Creates a new {@link PreviewMove} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IPreviewMove {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`PreviewMove.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    PreviewMove.validateCompatibility(parsed);
    return PreviewMove.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return PreviewMove.encode(this);
  }

  public static encode(record: IPreviewMove): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    PreviewMove.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IPreviewMove, view: BebopView): number {
    const before = view.length;
    view.writeFloat64(record.x);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IPreviewMove {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return PreviewMove.readFrom(view);
  }

  public static readFrom(view: BebopView): IPreviewMove {
    let field0: number;
    field0 = view.readFloat64();
    let message: IPreviewMove = {
      x: field0,
    };
    return new PreviewMove(message);
  }
}

export interface IReady extends BebopRecord {
  isReady: boolean;
}

export class Ready implements IReady {
  public readonly discriminator: number = 3 as 3;
  public isReady: boolean;

  constructor(record: IReady) {
    this.isReady = record.isReady;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return Ready.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IReady): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    Ready.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link Ready}.
   */
  public static validateCompatibility(record: IReady): void {
    BebopTypeGuard.ensureBoolean(record.isReady)
  }

  /**
   * Unsafely creates an instance of {@link Ready} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IReady {
      return new Ready(record);
  }

  /**
   * Creates a new {@link Ready} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IReady {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`Ready.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    Ready.validateCompatibility(parsed);
    return Ready.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return Ready.encode(this);
  }

  public static encode(record: IReady): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    Ready.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IReady, view: BebopView): number {
    const before = view.length;
    view.writeByte(Number(record.isReady));
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IReady {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return Ready.readFrom(view);
  }

  public static readFrom(view: BebopView): IReady {
    let field0: boolean;
    field0 = !!view.readByte();
    let message: IReady = {
      isReady: field0,
    };
    return new Ready(message);
  }
}

export interface IReset extends BebopRecord {
}

export class Reset implements IReset {
  public readonly discriminator: number = 4 as 4;

  constructor(record: IReset) {
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return Reset.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IReset): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    Reset.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link Reset}.
   */
  public static validateCompatibility(record: IReset): void {

  }

  /**
   * Unsafely creates an instance of {@link Reset} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IReset {
      return new Reset(record);
  }

  /**
   * Creates a new {@link Reset} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IReset {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`Reset.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    Reset.validateCompatibility(parsed);
    return Reset.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return Reset.encode(this);
  }

  public static encode(record: IReset): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    Reset.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IReset, view: BebopView): number {
    const before = view.length;

    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IReset {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return Reset.readFrom(view);
  }

  public static readFrom(view: BebopView): IReset {
    let message: IReset = {
    };
    return new Reset(message);
  }
}

export type IClientToServerType
  = { discriminator: 1, value: IDropFruit }
  | { discriminator: 2, value: IPreviewMove }
  | { discriminator: 3, value: IReady }
  | { discriminator: 4, value: IReset };

export interface IClientToServer extends BebopRecord {
  readonly data: IClientToServerType;
}
export class ClientToServer implements IClientToServer {

  public readonly data: IClientToServerType;

  private constructor(data: IClientToServerType) {
    this.data = data;
  }

  public get discriminator() {
    return this.data.discriminator;
  }

  public get value() {
    return this.data.value;
  }

  public static fromDropFruit(value: IDropFruit) {
    return new ClientToServer({ discriminator: 1, value: new DropFruit(value)});
  }

  public static fromPreviewMove(value: IPreviewMove) {
    return new ClientToServer({ discriminator: 2, value: new PreviewMove(value)});
  }

  public static fromReady(value: IReady) {
    return new ClientToServer({ discriminator: 3, value: new Ready(value)});
  }

  public static fromReset(value: IReset) {
    return new ClientToServer({ discriminator: 4, value: new Reset(value)});
  }


  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return ClientToServer.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IClientToServer): string {
    delete (record.data.value as any).discriminator;
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    ClientToServer.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link ClientToServer}.
   */
  public static validateCompatibility(record: IClientToServer): void {
    const discriminator = record.data.discriminator;
    BebopTypeGuard.ensureUint8(discriminator);
    switch (discriminator) {
      case 1: {
        DropFruit.validateCompatibility(record.data.value);
        break;
      }
      case 2: {
        PreviewMove.validateCompatibility(record.data.value);
        break;
      }
      case 3: {
        Ready.validateCompatibility(record.data.value);
        break;
      }
      case 4: {
        Reset.validateCompatibility(record.data.value);
        break;
      }
      default: {
        throw new Error(`Unknown discriminator for ClientToServer: ${discriminator}`);
      }
    }
  }

  /**
   * Unsafely creates an instance of {@link ClientToServer} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): ClientToServer {
      const discriminator = record.data.discriminator;
      switch (discriminator) {
        case 1: {
          return new ClientToServer({ discriminator: 1, value: DropFruit.unsafeCast(record.value) });
        }
        case 2: {
          return new ClientToServer({ discriminator: 2, value: PreviewMove.unsafeCast(record.value) });
        }
        case 3: {
          return new ClientToServer({ discriminator: 3, value: Ready.unsafeCast(record.value) });
        }
        case 4: {
          return new ClientToServer({ discriminator: 4, value: Reset.unsafeCast(record.value) });
        }
      }
      throw new BebopRuntimeError(`Failed to unsafely cast union from discriminator: ${discriminator}`);
  }

  /**
   * Creates a new {@link ClientToServer} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): ClientToServer {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`ClientToServer.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    ClientToServer.validateCompatibility(parsed);
    return ClientToServer.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return ClientToServer.encode(this);
  }

  public static encode(record: IClientToServer): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    ClientToServer.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IClientToServer, view: BebopView): number {
    const before = view.length;
    const pos = view.reserveMessageLength();
    const start = view.length + 1;
    view.writeByte(record.data.discriminator);
    switch (record.data.discriminator) {
      case 1:
        DropFruit.encodeInto(record.data.value, view);
        break;
      case 2:
        PreviewMove.encodeInto(record.data.value, view);
        break;
      case 3:
        Ready.encodeInto(record.data.value, view);
        break;
      case 4:
        Reset.encodeInto(record.data.value, view);
        break;
    }
    const end = view.length;
    view.fillMessageLength(pos, end - start);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): ClientToServer {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return ClientToServer.readFrom(view);
  }

  public static readFrom(view: BebopView): ClientToServer {
    const length = view.readMessageLength();
    const end = view.index + 1 + length;
    switch (view.readByte()) {
      case 1:
        return this.fromDropFruit(DropFruit.readFrom(view));
      case 2:
        return this.fromPreviewMove(PreviewMove.readFrom(view));
      case 3:
        return this.fromReady(Ready.readFrom(view));
      case 4:
        return this.fromReset(Reset.readFrom(view));
      default:
        view.index = end;
        throw new BebopRuntimeError("Unrecognized discriminator while decoding ClientToServer");
    }
  }
}

export interface IServerDropFruit extends BebopRecord {
  tick: number;
  playerId: string;
  type: FruitType;
  x: number;
  nextPreview: FruitType;
}

export class ServerDropFruit implements IServerDropFruit {
  public readonly discriminator: number = 1 as 1;
  public tick: number;
  public playerId: string;
  public type: FruitType;
  public x: number;
  public nextPreview: FruitType;

  constructor(record: IServerDropFruit) {
    this.tick = record.tick;
    this.playerId = record.playerId;
    this.type = record.type;
    this.x = record.x;
    this.nextPreview = record.nextPreview;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return ServerDropFruit.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IServerDropFruit): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    ServerDropFruit.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link ServerDropFruit}.
   */
  public static validateCompatibility(record: IServerDropFruit): void {
    BebopTypeGuard.ensureUint32(record.tick)
    BebopTypeGuard.ensureString(record.playerId)
    BebopTypeGuard.ensureEnum(record.type, FruitType);
    BebopTypeGuard.ensureFloat(record.x)
    BebopTypeGuard.ensureEnum(record.nextPreview, FruitType);
  }

  /**
   * Unsafely creates an instance of {@link ServerDropFruit} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IServerDropFruit {
      return new ServerDropFruit(record);
  }

  /**
   * Creates a new {@link ServerDropFruit} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IServerDropFruit {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`ServerDropFruit.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    ServerDropFruit.validateCompatibility(parsed);
    return ServerDropFruit.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return ServerDropFruit.encode(this);
  }

  public static encode(record: IServerDropFruit): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    ServerDropFruit.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IServerDropFruit, view: BebopView): number {
    const before = view.length;
    view.writeUint32(record.tick);
    view.writeString(record.playerId);
    view.writeByte(record.type);
    view.writeFloat32(record.x);
    view.writeByte(record.nextPreview);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IServerDropFruit {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return ServerDropFruit.readFrom(view);
  }

  public static readFrom(view: BebopView): IServerDropFruit {
    let field0: number;
    field0 = view.readUint32();
    let field1: string;
    field1 = view.readString();
    let field2: FruitType;
    field2 = view.readByte() as FruitType;
    let field3: number;
    field3 = view.readFloat32();
    let field4: FruitType;
    field4 = view.readByte() as FruitType;
    let message: IServerDropFruit = {
      tick: field0,
      playerId: field1,
      type: field2,
      x: field3,
      nextPreview: field4,
    };
    return new ServerDropFruit(message);
  }
}

export interface IPlayerDied extends BebopRecord {
  playerId: string;
  lethalFruitHandle: number;
}

export class PlayerDied implements IPlayerDied {
  public readonly discriminator: number = 2 as 2;
  public playerId: string;
  public lethalFruitHandle: number;

  constructor(record: IPlayerDied) {
    this.playerId = record.playerId;
    this.lethalFruitHandle = record.lethalFruitHandle;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return PlayerDied.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IPlayerDied): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    PlayerDied.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link PlayerDied}.
   */
  public static validateCompatibility(record: IPlayerDied): void {
    BebopTypeGuard.ensureString(record.playerId)
    BebopTypeGuard.ensureFloat(record.lethalFruitHandle)
  }

  /**
   * Unsafely creates an instance of {@link PlayerDied} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IPlayerDied {
      return new PlayerDied(record);
  }

  /**
   * Creates a new {@link PlayerDied} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IPlayerDied {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`PlayerDied.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    PlayerDied.validateCompatibility(parsed);
    return PlayerDied.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return PlayerDied.encode(this);
  }

  public static encode(record: IPlayerDied): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    PlayerDied.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IPlayerDied, view: BebopView): number {
    const before = view.length;
    view.writeString(record.playerId);
    view.writeFloat64(record.lethalFruitHandle);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IPlayerDied {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return PlayerDied.readFrom(view);
  }

  public static readFrom(view: BebopView): IPlayerDied {
    let field0: string;
    field0 = view.readString();
    let field1: number;
    field1 = view.readFloat64();
    let message: IPlayerDied = {
      playerId: field0,
      lethalFruitHandle: field1,
    };
    return new PlayerDied(message);
  }
}

export interface IGarbageUpdate extends BebopRecord {
  playerId: string;
  garbageBar: number;
}

export class GarbageUpdate implements IGarbageUpdate {
  public readonly discriminator: number = 3 as 3;
  public playerId: string;
  public garbageBar: number;

  constructor(record: IGarbageUpdate) {
    this.playerId = record.playerId;
    this.garbageBar = record.garbageBar;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return GarbageUpdate.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IGarbageUpdate): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    GarbageUpdate.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link GarbageUpdate}.
   */
  public static validateCompatibility(record: IGarbageUpdate): void {
    BebopTypeGuard.ensureString(record.playerId)
    BebopTypeGuard.ensureFloat(record.garbageBar)
  }

  /**
   * Unsafely creates an instance of {@link GarbageUpdate} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IGarbageUpdate {
      return new GarbageUpdate(record);
  }

  /**
   * Creates a new {@link GarbageUpdate} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IGarbageUpdate {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`GarbageUpdate.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    GarbageUpdate.validateCompatibility(parsed);
    return GarbageUpdate.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return GarbageUpdate.encode(this);
  }

  public static encode(record: IGarbageUpdate): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    GarbageUpdate.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IGarbageUpdate, view: BebopView): number {
    const before = view.length;
    view.writeString(record.playerId);
    view.writeFloat64(record.garbageBar);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IGarbageUpdate {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return GarbageUpdate.readFrom(view);
  }

  public static readFrom(view: BebopView): IGarbageUpdate {
    let field0: string;
    field0 = view.readString();
    let field1: number;
    field1 = view.readFloat64();
    let message: IGarbageUpdate = {
      playerId: field0,
      garbageBar: field1,
    };
    return new GarbageUpdate(message);
  }
}

export type ITickEventType
  = { discriminator: 1, value: IServerDropFruit }
  | { discriminator: 2, value: IPlayerDied }
  | { discriminator: 3, value: IGarbageUpdate };

export interface ITickEvent extends BebopRecord {
  readonly data: ITickEventType;
}
export class TickEvent implements ITickEvent {

  public readonly data: ITickEventType;

  private constructor(data: ITickEventType) {
    this.data = data;
  }

  public get discriminator() {
    return this.data.discriminator;
  }

  public get value() {
    return this.data.value;
  }

  public static fromServerDropFruit(value: IServerDropFruit) {
    return new TickEvent({ discriminator: 1, value: new ServerDropFruit(value)});
  }

  public static fromPlayerDied(value: IPlayerDied) {
    return new TickEvent({ discriminator: 2, value: new PlayerDied(value)});
  }

  public static fromGarbageUpdate(value: IGarbageUpdate) {
    return new TickEvent({ discriminator: 3, value: new GarbageUpdate(value)});
  }


  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return TickEvent.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: ITickEvent): string {
    delete (record.data.value as any).discriminator;
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    TickEvent.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link TickEvent}.
   */
  public static validateCompatibility(record: ITickEvent): void {
    const discriminator = record.data.discriminator;
    BebopTypeGuard.ensureUint8(discriminator);
    switch (discriminator) {
      case 1: {
        ServerDropFruit.validateCompatibility(record.data.value);
        break;
      }
      case 2: {
        PlayerDied.validateCompatibility(record.data.value);
        break;
      }
      case 3: {
        GarbageUpdate.validateCompatibility(record.data.value);
        break;
      }
      default: {
        throw new Error(`Unknown discriminator for TickEvent: ${discriminator}`);
      }
    }
  }

  /**
   * Unsafely creates an instance of {@link TickEvent} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): TickEvent {
      const discriminator = record.data.discriminator;
      switch (discriminator) {
        case 1: {
          return new TickEvent({ discriminator: 1, value: ServerDropFruit.unsafeCast(record.value) });
        }
        case 2: {
          return new TickEvent({ discriminator: 2, value: PlayerDied.unsafeCast(record.value) });
        }
        case 3: {
          return new TickEvent({ discriminator: 3, value: GarbageUpdate.unsafeCast(record.value) });
        }
      }
      throw new BebopRuntimeError(`Failed to unsafely cast union from discriminator: ${discriminator}`);
  }

  /**
   * Creates a new {@link TickEvent} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): TickEvent {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`TickEvent.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    TickEvent.validateCompatibility(parsed);
    return TickEvent.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return TickEvent.encode(this);
  }

  public static encode(record: ITickEvent): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    TickEvent.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: ITickEvent, view: BebopView): number {
    const before = view.length;
    const pos = view.reserveMessageLength();
    const start = view.length + 1;
    view.writeByte(record.data.discriminator);
    switch (record.data.discriminator) {
      case 1:
        ServerDropFruit.encodeInto(record.data.value, view);
        break;
      case 2:
        PlayerDied.encodeInto(record.data.value, view);
        break;
      case 3:
        GarbageUpdate.encodeInto(record.data.value, view);
        break;
    }
    const end = view.length;
    view.fillMessageLength(pos, end - start);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): TickEvent {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return TickEvent.readFrom(view);
  }

  public static readFrom(view: BebopView): TickEvent {
    const length = view.readMessageLength();
    const end = view.index + 1 + length;
    switch (view.readByte()) {
      case 1:
        return this.fromServerDropFruit(ServerDropFruit.readFrom(view));
      case 2:
        return this.fromPlayerDied(PlayerDied.readFrom(view));
      case 3:
        return this.fromGarbageUpdate(GarbageUpdate.readFrom(view));
      default:
        view.index = end;
        throw new BebopRuntimeError("Unrecognized discriminator while decoding TickEvent");
    }
  }
}

export interface IPlayerInfo extends BebopRecord {
  username: string;
  image: string;
  rating: number;
}

export class PlayerInfo implements IPlayerInfo {
  public username: string;
  public image: string;
  public rating: number;

  constructor(record: IPlayerInfo) {
    this.username = record.username;
    this.image = record.image;
    this.rating = record.rating;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return PlayerInfo.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IPlayerInfo): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    PlayerInfo.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link PlayerInfo}.
   */
  public static validateCompatibility(record: IPlayerInfo): void {
    BebopTypeGuard.ensureString(record.username)
    BebopTypeGuard.ensureString(record.image)
    BebopTypeGuard.ensureFloat(record.rating)
  }

  /**
   * Unsafely creates an instance of {@link PlayerInfo} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IPlayerInfo {
      return new PlayerInfo(record);
  }

  /**
   * Creates a new {@link PlayerInfo} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IPlayerInfo {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`PlayerInfo.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    PlayerInfo.validateCompatibility(parsed);
    return PlayerInfo.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return PlayerInfo.encode(this);
  }

  public static encode(record: IPlayerInfo): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    PlayerInfo.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IPlayerInfo, view: BebopView): number {
    const before = view.length;
    view.writeString(record.username);
    view.writeString(record.image);
    view.writeFloat64(record.rating);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IPlayerInfo {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return PlayerInfo.readFrom(view);
  }

  public static readFrom(view: BebopView): IPlayerInfo {
    let field0: string;
    field0 = view.readString();
    let field1: string;
    field1 = view.readString();
    let field2: number;
    field2 = view.readFloat64();
    let message: IPlayerInfo = {
      username: field0,
      image: field1,
      rating: field2,
    };
    return new PlayerInfo(message);
  }
}

export interface IServerBoardState extends BebopRecord {
  player: IPlayerInfo;
  isReady: boolean;
  isConnected: boolean;
  rapierState: Uint8Array;
  groundHandle: number;
  fruits: Map<number, FruitType>;
  hasFallingFruit: boolean;
  fallingFruit: number;
  killGraceTimer: number;
  isDead: boolean;
  score: number;
  lastDropTime: number;
  dropTimer: number;
  garbageBar: number;
}

export class ServerBoardState implements IServerBoardState {
  public player: IPlayerInfo;
  public isReady: boolean;
  public isConnected: boolean;
  public rapierState: Uint8Array;
  public groundHandle: number;
  public fruits: Map<number, FruitType>;
  public hasFallingFruit: boolean;
  public fallingFruit: number;
  public killGraceTimer: number;
  public isDead: boolean;
  public score: number;
  public lastDropTime: number;
  public dropTimer: number;
  public garbageBar: number;

  constructor(record: IServerBoardState) {
    this.player = record.player;
    this.isReady = record.isReady;
    this.isConnected = record.isConnected;
    this.rapierState = record.rapierState;
    this.groundHandle = record.groundHandle;
    this.fruits = record.fruits;
    this.hasFallingFruit = record.hasFallingFruit;
    this.fallingFruit = record.fallingFruit;
    this.killGraceTimer = record.killGraceTimer;
    this.isDead = record.isDead;
    this.score = record.score;
    this.lastDropTime = record.lastDropTime;
    this.dropTimer = record.dropTimer;
    this.garbageBar = record.garbageBar;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return ServerBoardState.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IServerBoardState): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    ServerBoardState.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link ServerBoardState}.
   */
  public static validateCompatibility(record: IServerBoardState): void {
    PlayerInfo.validateCompatibility(record.player);
    BebopTypeGuard.ensureBoolean(record.isReady)
    BebopTypeGuard.ensureBoolean(record.isConnected)
    BebopTypeGuard.ensureArray(record.rapierState, BebopTypeGuard.ensureUint8);
    BebopTypeGuard.ensureFloat(record.groundHandle)
    BebopTypeGuard.ensureMap(record.fruits, BebopTypeGuard.ensureFloat, (value) => BebopTypeGuard.ensureEnum(value, FruitType));
    BebopTypeGuard.ensureBoolean(record.hasFallingFruit)
    BebopTypeGuard.ensureFloat(record.fallingFruit)
    BebopTypeGuard.ensureUint8(record.killGraceTimer)
    BebopTypeGuard.ensureBoolean(record.isDead)
    BebopTypeGuard.ensureUint32(record.score)
    BebopTypeGuard.ensureUint32(record.lastDropTime)
    BebopTypeGuard.ensureFloat(record.dropTimer)
    BebopTypeGuard.ensureFloat(record.garbageBar)
  }

  /**
   * Unsafely creates an instance of {@link ServerBoardState} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IServerBoardState {
      record.player = PlayerInfo.unsafeCast(record.player);
      return new ServerBoardState(record);
  }

  /**
   * Creates a new {@link ServerBoardState} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IServerBoardState {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`ServerBoardState.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    ServerBoardState.validateCompatibility(parsed);
    return ServerBoardState.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return ServerBoardState.encode(this);
  }

  public static encode(record: IServerBoardState): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    ServerBoardState.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IServerBoardState, view: BebopView): number {
    const before = view.length;
    PlayerInfo.encodeInto(record.player, view)
    view.writeByte(Number(record.isReady));
    view.writeByte(Number(record.isConnected));
    view.writeBytes(record.rapierState);
    view.writeFloat64(record.groundHandle);
    view.writeUint32(record.fruits.size);
    for (const [k0, v0] of record.fruits) {
      view.writeFloat64(k0);
      view.writeByte(v0);
    }
    view.writeByte(Number(record.hasFallingFruit));
    view.writeFloat64(record.fallingFruit);
    view.writeByte(record.killGraceTimer);
    view.writeByte(Number(record.isDead));
    view.writeUint32(record.score);
    view.writeUint32(record.lastDropTime);
    view.writeFloat64(record.dropTimer);
    view.writeFloat64(record.garbageBar);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IServerBoardState {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return ServerBoardState.readFrom(view);
  }

  public static readFrom(view: BebopView): IServerBoardState {
    let field0: IPlayerInfo;
    field0 = PlayerInfo.readFrom(view);
    let field1: boolean;
    field1 = !!view.readByte();
    let field2: boolean;
    field2 = !!view.readByte();
    let field3: Uint8Array;
    field3 = view.readBytes();
    let field4: number;
    field4 = view.readFloat64();
    let field5: Map<number, FruitType>;
    {
      let length0 = view.readUint32();
      field5 = new Map<number, FruitType>();
      for (let i0 = 0; i0 < length0; i0++) {
        let k0: number;
        let v0: FruitType;
        k0 = view.readFloat64();
        v0 = view.readByte() as FruitType;
        field5.set(k0, v0);
      }
    }
    let field6: boolean;
    field6 = !!view.readByte();
    let field7: number;
    field7 = view.readFloat64();
    let field8: number;
    field8 = view.readByte();
    let field9: boolean;
    field9 = !!view.readByte();
    let field10: number;
    field10 = view.readUint32();
    let field11: number;
    field11 = view.readUint32();
    let field12: number;
    field12 = view.readFloat64();
    let field13: number;
    field13 = view.readFloat64();
    let message: IServerBoardState = {
      player: field0,
      isReady: field1,
      isConnected: field2,
      rapierState: field3,
      groundHandle: field4,
      fruits: field5,
      hasFallingFruit: field6,
      fallingFruit: field7,
      killGraceTimer: field8,
      isDead: field9,
      score: field10,
      lastDropTime: field11,
      dropTimer: field12,
      garbageBar: field13,
    };
    return new ServerBoardState(message);
  }
}

export interface ILobbyInfo extends BebopRecord {
  private: boolean;
  createdAt: Date;
  region: string;
  gameMode: string;
}

export class LobbyInfo implements ILobbyInfo {
  public private: boolean;
  public createdAt: Date;
  public region: string;
  public gameMode: string;

  constructor(record: ILobbyInfo) {
    this.private = record.private;
    this.createdAt = record.createdAt;
    this.region = record.region;
    this.gameMode = record.gameMode;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return LobbyInfo.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: ILobbyInfo): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    LobbyInfo.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link LobbyInfo}.
   */
  public static validateCompatibility(record: ILobbyInfo): void {
    BebopTypeGuard.ensureBoolean(record.private)
    BebopTypeGuard.ensureDate(record.createdAt)
    BebopTypeGuard.ensureString(record.region)
    BebopTypeGuard.ensureString(record.gameMode)
  }

  /**
   * Unsafely creates an instance of {@link LobbyInfo} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): ILobbyInfo {
      return new LobbyInfo(record);
  }

  /**
   * Creates a new {@link LobbyInfo} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): ILobbyInfo {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`LobbyInfo.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    LobbyInfo.validateCompatibility(parsed);
    return LobbyInfo.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return LobbyInfo.encode(this);
  }

  public static encode(record: ILobbyInfo): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    LobbyInfo.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: ILobbyInfo, view: BebopView): number {
    const before = view.length;
    view.writeByte(Number(record.private));
    view.writeDate(record.createdAt);
    view.writeString(record.region);
    view.writeString(record.gameMode);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): ILobbyInfo {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return LobbyInfo.readFrom(view);
  }

  public static readFrom(view: BebopView): ILobbyInfo {
    let field0: boolean;
    field0 = !!view.readByte();
    let field1: Date;
    field1 = view.readDate();
    let field2: string;
    field2 = view.readString();
    let field3: string;
    field3 = view.readString();
    let message: ILobbyInfo = {
      private: field0,
      createdAt: field1,
      region: field2,
      gameMode: field3,
    };
    return new LobbyInfo(message);
  }
}

export interface ITick extends BebopRecord {
  index: number;
  events: Array<TickEvent>;
}

export class Tick implements ITick {
  public readonly discriminator: number = 1 as 1;
  public index: number;
  public events: Array<TickEvent>;

  constructor(record: ITick) {
    this.index = record.index;
    this.events = record.events;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return Tick.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: ITick): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    Tick.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link Tick}.
   */
  public static validateCompatibility(record: ITick): void {
    BebopTypeGuard.ensureUint32(record.index)
    BebopTypeGuard.ensureArray(record.events, TickEvent.validateCompatibility);
  }

  /**
   * Unsafely creates an instance of {@link Tick} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): ITick {
      return new Tick(record);
  }

  /**
   * Creates a new {@link Tick} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): ITick {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`Tick.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    Tick.validateCompatibility(parsed);
    return Tick.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return Tick.encode(this);
  }

  public static encode(record: ITick): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    Tick.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: ITick, view: BebopView): number {
    const before = view.length;
    view.writeUint32(record.index);
    {
      const length0 = record.events.length;
      view.writeUint32(length0);
      for (let i0 = 0; i0 < length0; i0++) {
        TickEvent.encodeInto(record.events[i0], view)
      }
    }
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): ITick {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return Tick.readFrom(view);
  }

  public static readFrom(view: BebopView): ITick {
    let field0: number;
    field0 = view.readUint32();
    let field1: Array<TickEvent>;
    {
      let length0 = view.readUint32();
      field1 = new Array<TickEvent>(length0);
      for (let i0 = 0; i0 < length0; i0++) {
        let x0: TickEvent;
        x0 = TickEvent.readFrom(view);
        field1[i0] = x0;
      }
    }
    let message: ITick = {
      index: field0,
      events: field1,
    };
    return new Tick(message);
  }
}

export interface ISetup extends BebopRecord {
  serverVersion: number;
  serverTickRate: number;
  clientTickRate: number;
  garbageTimer: number;
  gameState: GameState;
  initialFruit: FruitType;
  secondFruit: FruitType;
  initialBoardStates: Map<string, IServerBoardState>;
  lobby: ILobbyInfo;
}

export class Setup implements ISetup {
  public readonly discriminator: number = 2 as 2;
  public serverVersion: number;
  public serverTickRate: number;
  public clientTickRate: number;
  public garbageTimer: number;
  public gameState: GameState;
  public initialFruit: FruitType;
  public secondFruit: FruitType;
  public initialBoardStates: Map<string, IServerBoardState>;
  public lobby: ILobbyInfo;

  constructor(record: ISetup) {
    this.serverVersion = record.serverVersion;
    this.serverTickRate = record.serverTickRate;
    this.clientTickRate = record.clientTickRate;
    this.garbageTimer = record.garbageTimer;
    this.gameState = record.gameState;
    this.initialFruit = record.initialFruit;
    this.secondFruit = record.secondFruit;
    this.initialBoardStates = record.initialBoardStates;
    this.lobby = record.lobby;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return Setup.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: ISetup): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    Setup.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link Setup}.
   */
  public static validateCompatibility(record: ISetup): void {
    BebopTypeGuard.ensureUint32(record.serverVersion)
    BebopTypeGuard.ensureUint8(record.serverTickRate)
    BebopTypeGuard.ensureUint8(record.clientTickRate)
    BebopTypeGuard.ensureFloat(record.garbageTimer)
    BebopTypeGuard.ensureEnum(record.gameState, GameState);
    BebopTypeGuard.ensureEnum(record.initialFruit, FruitType);
    BebopTypeGuard.ensureEnum(record.secondFruit, FruitType);
    BebopTypeGuard.ensureMap(record.initialBoardStates, BebopTypeGuard.ensureString, ServerBoardState.validateCompatibility);
    LobbyInfo.validateCompatibility(record.lobby);
  }

  /**
   * Unsafely creates an instance of {@link Setup} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): ISetup {
      record.lobby = LobbyInfo.unsafeCast(record.lobby);
      return new Setup(record);
  }

  /**
   * Creates a new {@link Setup} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): ISetup {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`Setup.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    Setup.validateCompatibility(parsed);
    return Setup.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return Setup.encode(this);
  }

  public static encode(record: ISetup): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    Setup.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: ISetup, view: BebopView): number {
    const before = view.length;
    view.writeUint32(record.serverVersion);
    view.writeByte(record.serverTickRate);
    view.writeByte(record.clientTickRate);
    view.writeFloat64(record.garbageTimer);
    view.writeByte(record.gameState);
    view.writeByte(record.initialFruit);
    view.writeByte(record.secondFruit);
    view.writeUint32(record.initialBoardStates.size);
    for (const [k0, v0] of record.initialBoardStates) {
      view.writeString(k0);
      ServerBoardState.encodeInto(v0, view)
    }
    LobbyInfo.encodeInto(record.lobby, view)
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): ISetup {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return Setup.readFrom(view);
  }

  public static readFrom(view: BebopView): ISetup {
    let field0: number;
    field0 = view.readUint32();
    let field1: number;
    field1 = view.readByte();
    let field2: number;
    field2 = view.readByte();
    let field3: number;
    field3 = view.readFloat64();
    let field4: GameState;
    field4 = view.readByte() as GameState;
    let field5: FruitType;
    field5 = view.readByte() as FruitType;
    let field6: FruitType;
    field6 = view.readByte() as FruitType;
    let field7: Map<string, IServerBoardState>;
    {
      let length0 = view.readUint32();
      field7 = new Map<string, IServerBoardState>();
      for (let i0 = 0; i0 < length0; i0++) {
        let k0: string;
        let v0: IServerBoardState;
        k0 = view.readString();
        v0 = ServerBoardState.readFrom(view);
        field7.set(k0, v0);
      }
    }
    let field8: ILobbyInfo;
    field8 = LobbyInfo.readFrom(view);
    let message: ISetup = {
      serverVersion: field0,
      serverTickRate: field1,
      clientTickRate: field2,
      garbageTimer: field3,
      gameState: field4,
      initialFruit: field5,
      secondFruit: field6,
      initialBoardStates: field7,
      lobby: field8,
    };
    return new Setup(message);
  }
}

export interface IServerPreviewMove extends BebopRecord {
  playerId: string;
  x: number;
}

export class ServerPreviewMove implements IServerPreviewMove {
  public readonly discriminator: number = 3 as 3;
  public playerId: string;
  public x: number;

  constructor(record: IServerPreviewMove) {
    this.playerId = record.playerId;
    this.x = record.x;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return ServerPreviewMove.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IServerPreviewMove): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    ServerPreviewMove.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link ServerPreviewMove}.
   */
  public static validateCompatibility(record: IServerPreviewMove): void {
    BebopTypeGuard.ensureString(record.playerId)
    BebopTypeGuard.ensureFloat(record.x)
  }

  /**
   * Unsafely creates an instance of {@link ServerPreviewMove} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IServerPreviewMove {
      return new ServerPreviewMove(record);
  }

  /**
   * Creates a new {@link ServerPreviewMove} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IServerPreviewMove {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`ServerPreviewMove.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    ServerPreviewMove.validateCompatibility(parsed);
    return ServerPreviewMove.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return ServerPreviewMove.encode(this);
  }

  public static encode(record: IServerPreviewMove): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    ServerPreviewMove.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IServerPreviewMove, view: BebopView): number {
    const before = view.length;
    view.writeString(record.playerId);
    view.writeFloat32(record.x);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IServerPreviewMove {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return ServerPreviewMove.readFrom(view);
  }

  public static readFrom(view: BebopView): IServerPreviewMove {
    let field0: string;
    field0 = view.readString();
    let field1: number;
    field1 = view.readFloat32();
    let message: IServerPreviewMove = {
      playerId: field0,
      x: field1,
    };
    return new ServerPreviewMove(message);
  }
}

export interface IServerError extends BebopRecord {
  type: ServerErrorType;
  details: string;
}

export class ServerError implements IServerError {
  public readonly discriminator: number = 4 as 4;
  public type: ServerErrorType;
  public details: string;

  constructor(record: IServerError) {
    this.type = record.type;
    this.details = record.details;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return ServerError.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IServerError): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    ServerError.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link ServerError}.
   */
  public static validateCompatibility(record: IServerError): void {
    BebopTypeGuard.ensureEnum(record.type, ServerErrorType);
    BebopTypeGuard.ensureString(record.details)
  }

  /**
   * Unsafely creates an instance of {@link ServerError} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IServerError {
      return new ServerError(record);
  }

  /**
   * Creates a new {@link ServerError} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IServerError {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`ServerError.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    ServerError.validateCompatibility(parsed);
    return ServerError.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return ServerError.encode(this);
  }

  public static encode(record: IServerError): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    ServerError.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IServerError, view: BebopView): number {
    const before = view.length;
    view.writeByte(record.type);
    view.writeString(record.details);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IServerError {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return ServerError.readFrom(view);
  }

  public static readFrom(view: BebopView): IServerError {
    let field0: ServerErrorType;
    field0 = view.readByte() as ServerErrorType;
    let field1: string;
    field1 = view.readString();
    let message: IServerError = {
      type: field0,
      details: field1,
    };
    return new ServerError(message);
  }
}

export interface IPlayerJoin extends BebopRecord {
  playerId: string;
  board: IServerBoardState;
}

export class PlayerJoin implements IPlayerJoin {
  public readonly discriminator: number = 5 as 5;
  public playerId: string;
  public board: IServerBoardState;

  constructor(record: IPlayerJoin) {
    this.playerId = record.playerId;
    this.board = record.board;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return PlayerJoin.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IPlayerJoin): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    PlayerJoin.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link PlayerJoin}.
   */
  public static validateCompatibility(record: IPlayerJoin): void {
    BebopTypeGuard.ensureString(record.playerId)
    ServerBoardState.validateCompatibility(record.board);
  }

  /**
   * Unsafely creates an instance of {@link PlayerJoin} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IPlayerJoin {
      record.board = ServerBoardState.unsafeCast(record.board);
      return new PlayerJoin(record);
  }

  /**
   * Creates a new {@link PlayerJoin} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IPlayerJoin {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`PlayerJoin.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    PlayerJoin.validateCompatibility(parsed);
    return PlayerJoin.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return PlayerJoin.encode(this);
  }

  public static encode(record: IPlayerJoin): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    PlayerJoin.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IPlayerJoin, view: BebopView): number {
    const before = view.length;
    view.writeString(record.playerId);
    ServerBoardState.encodeInto(record.board, view)
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IPlayerJoin {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return PlayerJoin.readFrom(view);
  }

  public static readFrom(view: BebopView): IPlayerJoin {
    let field0: string;
    field0 = view.readString();
    let field1: IServerBoardState;
    field1 = ServerBoardState.readFrom(view);
    let message: IPlayerJoin = {
      playerId: field0,
      board: field1,
    };
    return new PlayerJoin(message);
  }
}

export interface IPlayerReady extends BebopRecord {
  playerId: string;
  isReady: boolean;
}

export class PlayerReady implements IPlayerReady {
  public readonly discriminator: number = 6 as 6;
  public playerId: string;
  public isReady: boolean;

  constructor(record: IPlayerReady) {
    this.playerId = record.playerId;
    this.isReady = record.isReady;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return PlayerReady.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IPlayerReady): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    PlayerReady.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link PlayerReady}.
   */
  public static validateCompatibility(record: IPlayerReady): void {
    BebopTypeGuard.ensureString(record.playerId)
    BebopTypeGuard.ensureBoolean(record.isReady)
  }

  /**
   * Unsafely creates an instance of {@link PlayerReady} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IPlayerReady {
      return new PlayerReady(record);
  }

  /**
   * Creates a new {@link PlayerReady} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IPlayerReady {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`PlayerReady.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    PlayerReady.validateCompatibility(parsed);
    return PlayerReady.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return PlayerReady.encode(this);
  }

  public static encode(record: IPlayerReady): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    PlayerReady.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IPlayerReady, view: BebopView): number {
    const before = view.length;
    view.writeString(record.playerId);
    view.writeByte(Number(record.isReady));
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IPlayerReady {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return PlayerReady.readFrom(view);
  }

  public static readFrom(view: BebopView): IPlayerReady {
    let field0: string;
    field0 = view.readString();
    let field1: boolean;
    field1 = !!view.readByte();
    let message: IPlayerReady = {
      playerId: field0,
      isReady: field1,
    };
    return new PlayerReady(message);
  }
}

export interface IPlayerConnected extends BebopRecord {
  playerId: string;
  isConnected: boolean;
}

export class PlayerConnected implements IPlayerConnected {
  public readonly discriminator: number = 7 as 7;
  public playerId: string;
  public isConnected: boolean;

  constructor(record: IPlayerConnected) {
    this.playerId = record.playerId;
    this.isConnected = record.isConnected;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return PlayerConnected.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IPlayerConnected): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    PlayerConnected.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link PlayerConnected}.
   */
  public static validateCompatibility(record: IPlayerConnected): void {
    BebopTypeGuard.ensureString(record.playerId)
    BebopTypeGuard.ensureBoolean(record.isConnected)
  }

  /**
   * Unsafely creates an instance of {@link PlayerConnected} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IPlayerConnected {
      return new PlayerConnected(record);
  }

  /**
   * Creates a new {@link PlayerConnected} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IPlayerConnected {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`PlayerConnected.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    PlayerConnected.validateCompatibility(parsed);
    return PlayerConnected.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return PlayerConnected.encode(this);
  }

  public static encode(record: IPlayerConnected): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    PlayerConnected.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IPlayerConnected, view: BebopView): number {
    const before = view.length;
    view.writeString(record.playerId);
    view.writeByte(Number(record.isConnected));
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IPlayerConnected {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return PlayerConnected.readFrom(view);
  }

  public static readFrom(view: BebopView): IPlayerConnected {
    let field0: string;
    field0 = view.readString();
    let field1: boolean;
    field1 = !!view.readByte();
    let message: IPlayerConnected = {
      playerId: field0,
      isConnected: field1,
    };
    return new PlayerConnected(message);
  }
}

export interface IGameStateUpdate extends BebopRecord {
  state: GameState;
}

export class GameStateUpdate implements IGameStateUpdate {
  public readonly discriminator: number = 8 as 8;
  public state: GameState;

  constructor(record: IGameStateUpdate) {
    this.state = record.state;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return GameStateUpdate.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IGameStateUpdate): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    GameStateUpdate.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link GameStateUpdate}.
   */
  public static validateCompatibility(record: IGameStateUpdate): void {
    BebopTypeGuard.ensureEnum(record.state, GameState);
  }

  /**
   * Unsafely creates an instance of {@link GameStateUpdate} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IGameStateUpdate {
      return new GameStateUpdate(record);
  }

  /**
   * Creates a new {@link GameStateUpdate} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IGameStateUpdate {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`GameStateUpdate.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    GameStateUpdate.validateCompatibility(parsed);
    return GameStateUpdate.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return GameStateUpdate.encode(this);
  }

  public static encode(record: IGameStateUpdate): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    GameStateUpdate.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IGameStateUpdate, view: BebopView): number {
    const before = view.length;
    view.writeByte(record.state);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IGameStateUpdate {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return GameStateUpdate.readFrom(view);
  }

  public static readFrom(view: BebopView): IGameStateUpdate {
    let field0: GameState;
    field0 = view.readByte() as GameState;
    let message: IGameStateUpdate = {
      state: field0,
    };
    return new GameStateUpdate(message);
  }
}

export interface IPlayerLeave extends BebopRecord {
  playerId: string;
}

export class PlayerLeave implements IPlayerLeave {
  public readonly discriminator: number = 9 as 9;
  public playerId: string;

  constructor(record: IPlayerLeave) {
    this.playerId = record.playerId;
  }

  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return PlayerLeave.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IPlayerLeave): string {
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    PlayerLeave.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link PlayerLeave}.
   */
  public static validateCompatibility(record: IPlayerLeave): void {
    BebopTypeGuard.ensureString(record.playerId)
  }

  /**
   * Unsafely creates an instance of {@link PlayerLeave} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): IPlayerLeave {
      return new PlayerLeave(record);
  }

  /**
   * Creates a new {@link PlayerLeave} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): IPlayerLeave {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`PlayerLeave.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    PlayerLeave.validateCompatibility(parsed);
    return PlayerLeave.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return PlayerLeave.encode(this);
  }

  public static encode(record: IPlayerLeave): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    PlayerLeave.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IPlayerLeave, view: BebopView): number {
    const before = view.length;
    view.writeString(record.playerId);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): IPlayerLeave {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return PlayerLeave.readFrom(view);
  }

  public static readFrom(view: BebopView): IPlayerLeave {
    let field0: string;
    field0 = view.readString();
    let message: IPlayerLeave = {
      playerId: field0,
    };
    return new PlayerLeave(message);
  }
}

export type IServerToClientType
  = { discriminator: 1, value: ITick }
  | { discriminator: 2, value: ISetup }
  | { discriminator: 3, value: IServerPreviewMove }
  | { discriminator: 4, value: IServerError }
  | { discriminator: 5, value: IPlayerJoin }
  | { discriminator: 6, value: IPlayerReady }
  | { discriminator: 7, value: IPlayerConnected }
  | { discriminator: 8, value: IGameStateUpdate }
  | { discriminator: 9, value: IPlayerLeave };

export interface IServerToClient extends BebopRecord {
  readonly data: IServerToClientType;
}
export class ServerToClient implements IServerToClient {

  public readonly data: IServerToClientType;

  private constructor(data: IServerToClientType) {
    this.data = data;
  }

  public get discriminator() {
    return this.data.discriminator;
  }

  public get value() {
    return this.data.value;
  }

  public static fromTick(value: ITick) {
    return new ServerToClient({ discriminator: 1, value: new Tick(value)});
  }

  public static fromSetup(value: ISetup) {
    return new ServerToClient({ discriminator: 2, value: new Setup(value)});
  }

  public static fromServerPreviewMove(value: IServerPreviewMove) {
    return new ServerToClient({ discriminator: 3, value: new ServerPreviewMove(value)});
  }

  public static fromServerError(value: IServerError) {
    return new ServerToClient({ discriminator: 4, value: new ServerError(value)});
  }

  public static fromPlayerJoin(value: IPlayerJoin) {
    return new ServerToClient({ discriminator: 5, value: new PlayerJoin(value)});
  }

  public static fromPlayerReady(value: IPlayerReady) {
    return new ServerToClient({ discriminator: 6, value: new PlayerReady(value)});
  }

  public static fromPlayerConnected(value: IPlayerConnected) {
    return new ServerToClient({ discriminator: 7, value: new PlayerConnected(value)});
  }

  public static fromGameStateUpdate(value: IGameStateUpdate) {
    return new ServerToClient({ discriminator: 8, value: new GameStateUpdate(value)});
  }

  public static fromPlayerLeave(value: IPlayerLeave) {
    return new ServerToClient({ discriminator: 9, value: new PlayerLeave(value)});
  }


  /**
   * Serializes the current instance into a JSON-Over-Bebop string
   */
  public toJSON(): string {
    return ServerToClient.encodeToJSON(this);
  }

  /**
   * Serializes the specified object into a JSON-Over-Bebop string
   */
  public static encodeToJSON(record: IServerToClient): string {
    delete (record.data.value as any).discriminator;
    return JSON.stringify(record, BebopJson.replacer);
  }

  /**
   * Validates that the runtime types of members in the current instance are correct.
   */
  public validateTypes(): void {
    ServerToClient.validateCompatibility(this);
  }

  /**
   * Validates that the specified dynamic object can become an instance of {@link ServerToClient}.
   */
  public static validateCompatibility(record: IServerToClient): void {
    const discriminator = record.data.discriminator;
    BebopTypeGuard.ensureUint8(discriminator);
    switch (discriminator) {
      case 1: {
        Tick.validateCompatibility(record.data.value);
        break;
      }
      case 2: {
        Setup.validateCompatibility(record.data.value);
        break;
      }
      case 3: {
        ServerPreviewMove.validateCompatibility(record.data.value);
        break;
      }
      case 4: {
        ServerError.validateCompatibility(record.data.value);
        break;
      }
      case 5: {
        PlayerJoin.validateCompatibility(record.data.value);
        break;
      }
      case 6: {
        PlayerReady.validateCompatibility(record.data.value);
        break;
      }
      case 7: {
        PlayerConnected.validateCompatibility(record.data.value);
        break;
      }
      case 8: {
        GameStateUpdate.validateCompatibility(record.data.value);
        break;
      }
      case 9: {
        PlayerLeave.validateCompatibility(record.data.value);
        break;
      }
      default: {
        throw new Error(`Unknown discriminator for ServerToClient: ${discriminator}`);
      }
    }
  }

  /**
   * Unsafely creates an instance of {@link ServerToClient} from the specified dynamic object. No type checking is performed.
   */
  public static unsafeCast(record: any): ServerToClient {
      const discriminator = record.data.discriminator;
      switch (discriminator) {
        case 1: {
          return new ServerToClient({ discriminator: 1, value: Tick.unsafeCast(record.value) });
        }
        case 2: {
          return new ServerToClient({ discriminator: 2, value: Setup.unsafeCast(record.value) });
        }
        case 3: {
          return new ServerToClient({ discriminator: 3, value: ServerPreviewMove.unsafeCast(record.value) });
        }
        case 4: {
          return new ServerToClient({ discriminator: 4, value: ServerError.unsafeCast(record.value) });
        }
        case 5: {
          return new ServerToClient({ discriminator: 5, value: PlayerJoin.unsafeCast(record.value) });
        }
        case 6: {
          return new ServerToClient({ discriminator: 6, value: PlayerReady.unsafeCast(record.value) });
        }
        case 7: {
          return new ServerToClient({ discriminator: 7, value: PlayerConnected.unsafeCast(record.value) });
        }
        case 8: {
          return new ServerToClient({ discriminator: 8, value: GameStateUpdate.unsafeCast(record.value) });
        }
        case 9: {
          return new ServerToClient({ discriminator: 9, value: PlayerLeave.unsafeCast(record.value) });
        }
      }
      throw new BebopRuntimeError(`Failed to unsafely cast union from discriminator: ${discriminator}`);
  }

  /**
   * Creates a new {@link ServerToClient} instance from a JSON-Over-Bebop string. Type checking is performed.
   */
  public static fromJSON(json: string): ServerToClient {
    if (typeof json !== 'string' || json.trim().length === 0) {
      throw new BebopRuntimeError(`ServerToClient.fromJSON: expected string`);
    }
    const parsed = JSON.parse(json, BebopJson.reviver);
    ServerToClient.validateCompatibility(parsed);
    return ServerToClient.unsafeCast(parsed);
  }
  public encode(): Uint8Array {
    return ServerToClient.encode(this);
  }

  public static encode(record: IServerToClient): Uint8Array {
    const view = BebopView.getInstance();
    view.startWriting();
    ServerToClient.encodeInto(record, view);
    return view.toArray();
  }

  public static encodeInto(record: IServerToClient, view: BebopView): number {
    const before = view.length;
    const pos = view.reserveMessageLength();
    const start = view.length + 1;
    view.writeByte(record.data.discriminator);
    switch (record.data.discriminator) {
      case 1:
        Tick.encodeInto(record.data.value, view);
        break;
      case 2:
        Setup.encodeInto(record.data.value, view);
        break;
      case 3:
        ServerPreviewMove.encodeInto(record.data.value, view);
        break;
      case 4:
        ServerError.encodeInto(record.data.value, view);
        break;
      case 5:
        PlayerJoin.encodeInto(record.data.value, view);
        break;
      case 6:
        PlayerReady.encodeInto(record.data.value, view);
        break;
      case 7:
        PlayerConnected.encodeInto(record.data.value, view);
        break;
      case 8:
        GameStateUpdate.encodeInto(record.data.value, view);
        break;
      case 9:
        PlayerLeave.encodeInto(record.data.value, view);
        break;
    }
    const end = view.length;
    view.fillMessageLength(pos, end - start);
    const after = view.length;
    return after - before;
  }

  public static decode(buffer: Uint8Array): ServerToClient {
    const view = BebopView.getInstance();
    view.startReading(buffer);
    return ServerToClient.readFrom(view);
  }

  public static readFrom(view: BebopView): ServerToClient {
    const length = view.readMessageLength();
    const end = view.index + 1 + length;
    switch (view.readByte()) {
      case 1:
        return this.fromTick(Tick.readFrom(view));
      case 2:
        return this.fromSetup(Setup.readFrom(view));
      case 3:
        return this.fromServerPreviewMove(ServerPreviewMove.readFrom(view));
      case 4:
        return this.fromServerError(ServerError.readFrom(view));
      case 5:
        return this.fromPlayerJoin(PlayerJoin.readFrom(view));
      case 6:
        return this.fromPlayerReady(PlayerReady.readFrom(view));
      case 7:
        return this.fromPlayerConnected(PlayerConnected.readFrom(view));
      case 8:
        return this.fromGameStateUpdate(GameStateUpdate.readFrom(view));
      case 9:
        return this.fromPlayerLeave(PlayerLeave.readFrom(view));
      default:
        view.index = end;
        throw new BebopRuntimeError("Unrecognized discriminator while decoding ServerToClient");
    }
  }
}

export enum GameState {
  Unknown = 0,
  Waiting = 1,
  Playing = 2,
  Finished = 3,
}

export enum ServerErrorType {
  Unknown = 0,
  ConnectedElsewhere = 1,
  MissingAuth = 2,
  InvalidLobbyCode = 3,
  InvalidSession = 4,
  LobbyNotFound = 5,
  PlayerNotInLobby = 6,
  GameFinished = 7,
  WrongServerVersion = 8,
}

export enum FruitType {
  Unknown = 0,
  Cherry = 1,
  Strawberry = 2,
  Grape = 3,
  Orange = 4,
  Persimmon = 5,
  Apple = 6,
  Yuzu = 7,
  Peach = 8,
  Pineapple = 9,
  Honeydew = 10,
  Watermelon = 11,
  RottenCherry = 12,
  RottenStrawberry = 13,
  RottenGrape = 14,
  RottenOrange = 15,
  RottenPersimmon = 16,
  RottenApple = 17,
  RottenYuzu = 18,
  RottenPeach = 19,
  RottenPineapple = 20,
  RottenHoneydew = 21,
  RottenWatermelon = 22,
  Blueberry = 23,
}

