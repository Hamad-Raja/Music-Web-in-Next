"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal"


const WhyUs = () => {
    const MusicContent = [
  {
    title: "Expert Music Mentors",
    description:
      "Learn from experienced musicians and industry professionals who guide you step by step. Our mentors help you build strong fundamentals, refine your technique, and grow confidently as a musician.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] text-white text-xl font-semibold">
        Expert Mentors
      </div>
    ),
  },
  {
    title: "Hands-On Practice",
    description:
      "Practice alongside structured lessons with real musical exercises. From instruments to vocals, every session focuses on improving timing, tone, and performance through hands-on learning.",
    content: (
     <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--violet-500))] text-white text-xl font-semibold">
        
      </div>
    ),
  },
  {
    title: "Performance & Stage Skills",
    description:
      "Gain confidence through live performances and stage training. Learn how to connect with an audience, control stage presence, and perform with confidence in real-world musical settings.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--violet-500))] text-white text-xl font-semibold">
        Stage Performance
      </div>
    ),
  },
  {
    title: "Music Theory Made Simple",
    description:
      "Understand rhythm, scales, chords, and composition without confusion. Our simplified approach to music theory helps you apply concepts directly to your playing and songwriting.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] text-white text-xl font-semibold">
        Music Theory
      </div>
    ),
  },
];

  return (
    <div>
         <StickyScroll content={MusicContent}/>
    </div>
  )
}

export default WhyUs;
