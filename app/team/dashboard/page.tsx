.then((data) => {
  const formatted = data.map((item: any) => ({
    id: item.id,
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