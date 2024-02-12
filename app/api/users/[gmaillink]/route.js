import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(request, { params }) {
    const nickname = params.gmaillink;
    try {
        const user = await prisma.user.create({
            data: {
                gmailNickname: nickname
            }
        });
        if (!user) throw new Error("User not created");
        return NextResponse.json({ message: "User created", redirectUrl: "/dashboard/?newUser=true" });
    } catch (err) {
        console.log(err, "err");
        return NextResponse.json({ message: "There is an error", error: err });
    } finally {
        await prisma.$disconnect();
    }
}