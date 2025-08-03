import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'submissions.json');

// DELETE handler
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    // Read file
    const rawData = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '[]';
    let submissions = JSON.parse(rawData);

    // Filter out the submission
    submissions = submissions.filter((_: any, index: number) => (index + 1).toString() !== id);

    // Save back to file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json({ error: 'Failed to delete submission' }, { status: 500 });
  }
}