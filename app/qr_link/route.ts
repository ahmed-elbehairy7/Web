import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	return NextResponse.redirect("https://wa.me/+201003816322");
}
