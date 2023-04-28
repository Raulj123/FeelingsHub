import type { Actions } from './$types';
import { prisma } from '../lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	createFeels: async ({ request }) => {
		const { name, feelings } = Object.fromEntries(await request.formData()) as {
			name: string;
			feelings: string;
		};
		try {
			await prisma.feels.create({
				data: {
					name,
					feelings
				}
			});
		} catch (error) {
			console.log(error);
			return fail(500, { message: 'Could not create the article.' });
		}
		return {
			status: 201
		};
	}
};
