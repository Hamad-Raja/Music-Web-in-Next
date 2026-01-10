import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { cn } from '@/utils/cn';

const TestimonialCard = () => {
    const testimonials = [
  {
    quote:
      "Joining this music academy completely changed the way I understand music. The instructors are patient, supportive, and incredibly skilled. I gained confidence not just in playing, but in performing in front of others.",
    name: "Aarav Mehta",
    title: "Guitar Student",
  },
  {
    quote:
      "The structured lessons and hands-on practice helped me improve faster than I ever expected. From music theory to real performances, everything feels well-planned and easy to follow.",
    name: "Sara Khan",
    title: "Vocal Training Student",
  },
  {
    quote:
      "I struggled with rhythm and timing for years, but the mentors here explained concepts in such a simple way. Now I actually enjoy practicing every day.",
    name: "Daniel Roberts",
    title: "Drums Student",
  },
  {
    quote:
      "What I love most is the supportive environment. You’re encouraged to grow at your own pace while still being challenged to improve. It truly feels like a community.",
    name: "Ayesha Ali",
    title: "Piano Student",
  },
  {
    quote:
      "From beginner lessons to advanced techniques, this academy covers everything. The performance sessions helped me overcome stage fear and boosted my confidence immensely.",
    name: "Michael Thompson",
    title: "Music Performance Student",
  },
];

  return (
    <>
    
   <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
   <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </>
  )
}

export default TestimonialCard
