// app/api/auth/[auth0]/route.js
import { handleAuth } from '@auth0/nextjs-auth0';

console.log('Hello');
export const GET = handleAuth({});