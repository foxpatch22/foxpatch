import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (
    email === process.env.TEAM_EMAIL &&
    password === process.env.TEAM_PASSWORD
  ) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}