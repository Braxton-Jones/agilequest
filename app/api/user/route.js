import prisma from "@/lib/prisma"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request) {
    console.log('request', request)
    return Response.json({ message: 'Hello world' })
}