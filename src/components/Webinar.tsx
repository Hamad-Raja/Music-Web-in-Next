"use client";
import { HoverEffect } from "./ui/card-hover-effect";

const webinars = [
  {
    title: "Mastering Guitar Fundamentals",
    description:
      "Learn essential chords, strumming patterns, and techniques to build a strong foundation in guitar playing.",
    link: "",
  },
  {
    title: "Vocal Training & Breath Control",
    description:
      "Improve your voice with professional vocal exercises, breathing techniques, and pitch control methods.",
    link: "",
  },
  {
    title: "Music Theory Made Easy",
    description:
      "Understand scales, chords, rhythm, and composition with simplified music theory explained step by step.",
    link: "",
  },
  {
    title: "Stage Performance Confidence",
    description:
      "Overcome stage fear and learn how to perform confidently in front of an audience.",
    link: "",
  },
  {
    title: "Songwriting & Composition",
    description:
      "Turn your ideas into songs by learning melody writing, chord progressions, and lyrical structure.",
    link: "",
  },
  {
    title: "Digital Music Production",
    description:
      "Explore modern tools, DAWs, and techniques to produce professional-quality music at home.",
    link: "",
  },
];

const Webinar = () => {
  return (
    <section className="px-2 py-20 bg-gray-800">
      {/* Heading */}
      <div className="mb-16 text-center">
        <h1 className="text-teal-400 text-xl font-semibold">
          Featured Webinars
        </h1>
        <p className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Enhance Your Musical Journey
        </p>
      </div>

      {/* Webinar Grid */}

      <HoverEffect items={webinars} />
    </section>
  );
};

export default Webinar;
