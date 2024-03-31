import type { FruitType } from 'schema';
import type { FruitBase, FruitBaseContext } from './fruit';
import type { ColliderHandle, Vector2 } from '@dimforge/rapier2d';

export const BOARD_OFFSET = { x: -0.0021, y: 0.0032 };

export function create_world(RAPIER: typeof import('@dimforge/rapier2d')) {
	const world = new RAPIER.World({ x: 0.0, y: 0.973 });

	const ground = RAPIER.ColliderDesc.cuboid(BOX_WIDTH / 2, WALL_THICKNESS)
		.setRestitution(0)
		.setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Min)
		.setTranslation(
			BOX_WIDTH / 2 + BOARD_OFFSET.x,
			BOX_HEIGHT + WALL_THICKNESS + BOARD_OFFSET.y,
		);
	const ground_collider = world.createCollider(ground);

	const left_wall = RAPIER.ColliderDesc.cuboid(
		WALL_THICKNESS,
		BOX_HEIGHT / 2,
	).setTranslation(
		BOARD_OFFSET.x + WALL_THICKNESS,
		BOX_HEIGHT / 2 + BOARD_OFFSET.y,
	);
	world.createCollider(left_wall);

	const right_wall = RAPIER.ColliderDesc.cuboid(
		WALL_THICKNESS,
		BOX_HEIGHT / 2,
	).setTranslation(
		BOARD_OFFSET.x + BOX_WIDTH - WALL_THICKNESS,
		BOX_HEIGHT / 2 + BOARD_OFFSET.y,
	);
	world.createCollider(right_wall);

	const ceiling = RAPIER.ColliderDesc.cuboid(BOX_WIDTH / 2, WALL_THICKNESS)
		.setRestitution(0)
		.setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Min)
		.setCollisionGroups(
			0xffff0002 /* member of all groups, only collides with group 2 */,
		)
		.setTranslation(
			BOX_WIDTH / 2 + BOARD_OFFSET.x,
			FRUIT_KILL_Y + FRUIT_CEILING_OFFSET - WALL_THICKNESS + BOARD_OFFSET.y,
		);
	world.createCollider(ceiling);

	// const kill_box = RAPIER.ColliderDesc.cuboid(BOX_WIDTH / 2, WALL_THICKNESS)
	// 	.setSensor(true)
	// 	.setTranslation(
	// 		BOX_WIDTH / 2 + BOARD_OFFSET.x,
	// 		FRUIT_KILL_Y - WALL_THICKNESS + BOARD_OFFSET.y,
	// 	);
	// const kill_box_collider = world.createCollider(kill_box);

	return {
		world,
		ground: ground_collider.handle,
		// kill_box: kill_box_collider.handle,
	};
}

export type DrainCollisions = ReturnType<typeof make_drain_collisions>;

export function make_drain_collisions<TFruit extends FruitBase>(
	context: FruitBaseContext<TFruit>,
	callbacks: {
		on_create: (
			combine: {
				combine: boolean;
				output: FruitType;
				score: number;
			},
			position: Vector2,
		) => void;
		on_rotten_pop?: () => void;
		on_finish_falling?: () => void;
		on_kill?: () => void;
	},
) {
	return (
		handle1: ColliderHandle,
		handle2: ColliderHandle,
		started: boolean,
	) => {
		try {
			if (!started) return;

			const fruit1 = context.fruits.get(handle1);
			const fruit2 = context.fruits.get(handle2);
			if (context.falling_fruit) {
				const colliding_with_falling =
					handle1 === context.falling_fruit.handle
						? handle2
						: handle2 === context.falling_fruit.handle
						  ? handle1
						  : null;

				if (
					colliding_with_falling !== null &&
					(context.ground_handle === colliding_with_falling ||
						context.fruits.has(colliding_with_falling))
				) {
					context.falling_fruit = undefined;
					callbacks.on_finish_falling?.();
				}
			}
			if (!fruit1 || !fruit2) return;

			if (fruit1.type !== fruit2.type) return;

			const combine_result = fruit1.combine();
			if (!combine_result.combine) return; /* todo: what if two watermelons? */

			context.score += combine_result.score;

			if (combine_result.output) {
				const { x: x1, y: y1 } = fruit1.rigidBody.translation();
				const { x: x2, y: y2 } = fruit2.rigidBody.translation();
				const midpoint = { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };

				fruit1.destroy();
				fruit2.destroy();

				callbacks.on_create(combine_result, midpoint);
			} else {
				fruit1.destroy();
				fruit2.destroy();
				callbacks.on_rotten_pop?.();
			}
		} catch (e) {
			console.error(e);
		}
	};
}

// all in meters
export const WALL_THICKNESS = 1 / 100;
export const BOX_WIDTH = 30 / 100;
const BOX_HEIGHT = 40 / 100;

export const PX_PER_METER = 45 * 100;

export const FRUIT_DROP_Y = BOARD_OFFSET.y + 270 / PX_PER_METER;

export const FRUIT_KILL_Y = BOARD_OFFSET.y + 350 / PX_PER_METER;
const FRUIT_CEILING_OFFSET = 0; //100 / PX_PER_METER;
// cherry = 2cm = 98px 49px/cm
// apple = 8.5cm = 341px 40px/cm
// orange = 4.6cm = 208px 45px/cm

export const DROP_MARGIN = 10 / PX_PER_METER;

export function getDropConstraints(radius: number): [number, number] {
	return [
		BOARD_OFFSET.x + WALL_THICKNESS * 2 + radius + DROP_MARGIN,
		BOARD_OFFSET.x + BOX_WIDTH - WALL_THICKNESS * 2 - radius - DROP_MARGIN,
	];
}
