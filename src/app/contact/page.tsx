// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";

export default function page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can send the form to your backend or API
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Contact Us</h1>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Have questions or want to enroll? Reach out to us via the form or use the info below.
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-foreground">info@musicacademy.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-foreground">+1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-foreground">123 Music Street, New York, USA</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-border p-6 bg-background shadow-md dark:bg-black"
        >
          {submitted && (
            <p className="text-green-500 font-semibold">Thank you! Your message has been sent.</p>
          )}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-md border border-border px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-md border border-border px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="rounded-md border border-border px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-accent px-4 py-2 font-semibold text-accent-foreground hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
