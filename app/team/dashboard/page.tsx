.then((data) => {
  const formatted = data.map((item: any) => ({
    id: item.id, // Use Supabase's actual primary key
    name: `${item.first_name} ${item.last_name}`, // matches snake_case
    email: item.email,
    company: item.company || '—',
    projectDescription: item.project_description || '—',
    startTimeline: item.start_timeline || '—',
    service: Array.isArray(item.services) ? item.services.join(', ') : item.services || '—',
    referral: item.referral || '—',
    team: item.team || '—',
    calendlyLink: item.calendly_link || '',
  }));
  setSubmissions(formatted);
})