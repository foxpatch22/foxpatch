'use client';
import { useEffect, useState } from 'react';

interface Submission {
  id: number;
  name: string;
  email: string;
  company: string;
  projectDescription: string;
  startTimeline: string;
  service: string;
  referral: string;
  team: string;
  calendlyLink?: string;
}

export default function TeamDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    if (localStorage.getItem("foxpatch-team") !== "true") {
      window.location.href = "/team";
    }
    fetch('/api/submit-request')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item: any) => ({
          id: item.id, // ✅ real Supabase ID
          name: `${item.first_name} ${item.last_name}`,
          email: item.email,
          company: item.company || '—',
          projectDescription: item.project_description || '—',
          startTimeline: item.start_timeline || '—',
          service: item.services?.join(', ') || '—',
          referral: item.referral || '—',
          team: item.team || '—',
          calendlyLink: item.calendly_link || '',
        }));
        setSubmissions(formatted);
      })
      .catch((err) => console.error('Failed to fetch submissions:', err));
  }, []);

  // ✅ Delete by Supabase ID
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;

    try {
      const response = await fetch(`/api/delete-submission?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
      } else {
        alert('Failed to delete submission.');
      }
    } catch (error) {
      console.error(error);
      alert('Error deleting submission.');
    }
  };

  return (
    <section className="p-8 bg-[#FAF9F7] min-h-screen">
      <h2 className="text-3xl font-bold mb-8">Client Submissions</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-neutral-200 bg-white rounded-xl shadow-md">
          <thead>
            <tr className="bg-neutral-100 text-sm">
              <th className="text-left px-4 py-3 border-b">Name</th>
              <th className="text-left px-4 py-3 border-b">Email</th>
              <th className="text-left px-4 py-3 border-b">Company</th>
              <th className="text-left px-4 py-3 border-b">Project Description</th>
              <th className="text-left px-4 py-3 border-b">Start Timeline</th>
              <th className="text-left px-4 py-3 border-b">Service</th>
              <th className="text-left px-4 py-3 border-b">Referral</th>
              <th className="text-left px-4 py-3 border-b">Team Size</th>
              <th className="text-left px-4 py-3 border-b">Calendly</th>
              <th className="text-left px-4 py-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id} className="text-sm">
                <td className="px-4 py-3 border-b">{s.name}</td>
                <td className="px-4 py-3 border-b">{s.email}</td>
                <td className="px-4 py-3 border-b">{s.company}</td>
                <td className="px-4 py-3 border-b">{s.projectDescription}</td>
                <td className="px-4 py-3 border-b">{s.startTimeline}</td>
                <td className="px-4 py-3 border-b">{s.service}</td>
                <td className="px-4 py-3 border-b">{s.referral}</td>
                <td className="px-4 py-3 border-b">{s.team}</td>
                <td className="px-4 py-3 border-b">
                  {s.calendlyLink ? (
                    <a
                      href={s.calendlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Booking
                    </a>
                  ) : (
                    'Not booked'
                  )}
                </td>
                <td className="px-4 py-3 border-b">
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {submissions.length === 0 && (
              <tr>
                <td colSpan={10} className="py-6 px-4 text-center text-neutral-500">
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}