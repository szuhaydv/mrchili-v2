import dotenv from 'dotenv';

dotenv.config();

export const handle = async ({ event, resolve }) => {
	return await resolve(event);
};
