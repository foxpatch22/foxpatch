// app/api/submit-request/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ✅ POST: Save new submission
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabase.from('submissions').insert([
      {
        first_name: body.firstName,
        last_name: body.lastName,
        email: body.email,
        company: body.company,
        project_description: body.projectDescription,
        start_timeline: body.startTimeline,
        services: body.services,
        referral: body.referral,
        team: body.team,
        calendly_link: body.calendlyLink,
      },
    ]);

    if (error) {
      console.error('❌ Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ API POST error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// ✅ GET: Fetch all submissions
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error('❌ Supabase fetch error:', error);
      return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('❌ API GET error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}