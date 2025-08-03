'use client';
import { useState } from 'react';

export default function TeamLoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.email === "admin@foxpatch.com" && form.password === "secret123") {
      localStorage.setItem("foxpatch-team", "true");
      window.location.href = "/team/dashboard";
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#FAF9F7]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Team Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-3 hover:bg-neutral-800"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}