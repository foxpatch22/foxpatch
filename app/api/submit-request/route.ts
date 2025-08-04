// app/api/submit-request/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabase.from('submissions').insert([{
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
    }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}