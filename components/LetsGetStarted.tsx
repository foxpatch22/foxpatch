'use client';
import { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

export default function LetsGetStartedForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectDescription: '',
    startTimeline: '',
    services: [] as string[],
    referral: '',
    team: '',
    calendlyLink: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const messageRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked; // ✅ Safe cast only for checkboxes
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          projectDescription: '',
          startTimeline: '',
          services: [],
          referral: '',
          team: '',
          calendlyLink: '',
        });
        messageRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lets-get-started" className="bg-[#FAF9F7] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 gap-y-16">
        {/* Left Illustration */}
        <div>
          <img
            src="/LetsGetStarted/SubmitDesignRequest.png"
            alt="Contact Illustration"
            className="rounded-xl mb-8"
          />
          <div>
            <h3 className="font-semibold text-lg text-[#141414] mb-2">
              General Inquiries
            </h3>
            <p className="text-neutral-600 mb-4">
              For all other matters, please send a polite email to the address below.
            </p>
            <a href="mailto:hello@foxpatch.com" className="text-blue-600 underline">
              hello@foxpatch.com
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#141414] mb-8">
            How can we help?
          </h2>

          {submitted ? (
            <div
              ref={messageRef}
              className="p-8 bg-white border border-green-200 rounded-2xl shadow-md text-center"
            >
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#141414] mb-2">
                Thank you for reaching out!
              </h3>
              <p className="text-neutral-600">
                Our team has received your request and will get back to you soon.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border-b border-neutral-400 bg-transparent focus:outline-none py-2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border-b border-neutral-400 bg-transparent focus:outline-none py-2"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-b border-neutral-400 bg-transparent focus:outline-none py-2 w-full"
              />

              {/* Company */}
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="border-b border-neutral-400 bg-transparent focus:outline-none py-2 w-full"
              />

              {/* Project Description */}
              <textarea
                name="projectDescription"
                placeholder="Tell us a bit about your project."
                value={formData.projectDescription}
                onChange={handleChange}
                className="border-b border-neutral-400 bg-transparent focus:outline-none py-2 w-full"
                rows={4}
              />

              {/* Start Timeline */}
              <div>
                <p className="font-semibold mb-2 text-[#141414]">
                  How soon would you like to start?
                </p>
                <div className="space-y-3">
                  {['Yesterday.', 'In a few weeks.', "We're just getting the ball rolling."].map(
                    (option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="startTimeline"
                          value={option}
                          onChange={handleChange}
                          checked={formData.startTimeline === option}
                          className="accent-black"
                        />
                        {option}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="font-semibold mb-2 text-[#141414]">
                  What are you looking for?
                </p>
                <div className="flex flex-wrap gap-6">
                  {['Product Design', 'Website', 'Branding', 'Other'].map((service) => (
                    <label key={service} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        onChange={handleChange}
                        checked={formData.services.includes(service)}
                        className="accent-black"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              {/* Referral Source */}
              <div>
                <p className="font-semibold mb-2 text-[#141414]">
                  How did you hear about us?
                </p>
                <select
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  className="border-b border-neutral-400 bg-transparent focus:outline-none py-2 w-full"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {['Word of Mouth', 'Contra', 'Dribbble', 'LinkedIn', 'Instagram', 'Other'].map(
                    (option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Team Info */}
              <div>
                <p className="font-semibold mb-2 text-[#141414]">
                  Tell us about the team behind this project
                </p>
                <div className="space-y-3">
                  {[
                    "I'm running this thing solo.",
                    'Team of 2–5',
                    'Team of 6–10',
                    'More than 10',
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="team"
                        value={option}
                        onChange={handleChange}
                        checked={formData.team === option}
                        className="accent-black"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Calendly Integration */}
              <div>
                <p className="font-semibold mb-4 text-[#141414]">
                  Pick a time for a discussion
                </p>
                <iframe
                  src="https://calendly.com/foxpatch/project-kickoff-call"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="rounded-xl shadow-md"
                ></iframe>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full md:w-auto px-6 py-3 rounded-full font-mono transition ${
                  loading
                    ? 'bg-neutral-400 text-white cursor-not-allowed'
                    : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}