import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL,
  userName: process.env.USER_NAME || '',
  password: process.env.PASSWORD || '',
};
