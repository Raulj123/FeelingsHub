import type { Actions, PageServerLoad } from './$types';
import { prisma } from '../lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		feelss: await prisma.feels.findMany()
	};
};

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
	},
  deleteFeel: async ({url}) => {
  const id = url.searchParams.get("id")
  if(!id){
    return fail(500,{message:"null"})
  }
  try{
    await prisma.feels.delete({
      where: {
      id : Number(id)
      }
    })
  } catch(err){
    console.log(err)
  }
  return{
  status:201,
  }
    }
};
