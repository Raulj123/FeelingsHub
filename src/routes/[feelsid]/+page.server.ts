import type { Actions, PageServerLoad } from '../$types';
import { prisma } from '$lib/server/prisma';
import { error, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	console.log('params:', params);
	const getFeels = async () => {
		const feels = await prisma.feels.findUnique({
			where: {
				id: Number(params.feelsid)
			}
		});
		if (!feels) {
			throw error(404, 'not found');
		}
		return feels;
	};
	return {
		feels: getFeels()
	};
};

export const actions: Actions = {
	updateFeels: async ({ request, params }) => {
		const { name, feelings } = Object.fromEntries(await request.formData()) as {
			name: string;
			feelings: string;
		};
		try {
			await prisma.feels.update({
				where: {
					id: Number(params.feelsid)
				},
				data: {
					name,
					feelings
				}
			});
		} catch (error) {
			console.log(error);
			return fail(500, { message: 'no' });
		}
		return {
			status: 200
		};
	}
};
