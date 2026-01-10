"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-24 top-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-45"
          fill="white"
        />

        <h1
          className="mb-6 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-400
 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Where Music Becomes Mastery
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
          Discover the art of music with expert-led courses designed for
          beginners and professionals alike.
        </p>

        {/* Moving Border Button as Link */}
        <div className="flex justify-center">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="rounded-full  bg-gradient-to-r from-teal-500 to-emerald-600
 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl hover:from-teal-600 hover:to-emerald-700"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;