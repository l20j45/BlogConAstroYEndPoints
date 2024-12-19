import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Clients).values([
		{ id: 1, name: 'raul', age: 30, isActive: true },
		{ id: 2, name: 'manuel', age: 30, isActive: true },
		{ id: 3, name: 'alicia', age: 30, isActive: true },
		{ id: 4, name: 'saul', age: 30, isActive: true },

	]);
	console.log('db seeded');
}
