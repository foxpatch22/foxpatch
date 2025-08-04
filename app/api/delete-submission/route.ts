// app/api/delete-submission/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // use service key for write access
);

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    // Delete submission by ID
    const { error } = await supabase.from('submissions').delete().eq('id', id);

    if (error) {
      console.error('❌ Supabase delete error:', error);
      return NextResponse.json({ error: 'Failed to delete submission' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('❌ API delete error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}