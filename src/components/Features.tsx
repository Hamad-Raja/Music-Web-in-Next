"use client";

import Link from "next/link";
import courseData from "@/data/courses-data.json";
import { BackgroundGradient } from "./ui/background-gradient";

const Features = () => {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    // image: string
  }

  // Assuming courseData has a "courses" array
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured === true
  );

  return (
    <div className="py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 mb-8">
        <h1 className="text-4xl text-teal-400 font-bold mb-2">
          Featured Courses
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mt-2">
          Discover our amazing featured courses to enhance your learning
          experience. From expert instructors to comprehensive content, we have
          it all!
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {featuredCourses.map((course: Course) => (
          <BackgroundGradient
            key={course.id}
            className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-zinc-900 h-full"
          >
            <div className="flex flex-col h-full">
              {/* Course Title */}
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                {course.title}
              </h2>

              {/* Instructor */}
              <p className="text-teal-400 text-sm font-medium mb-2">
                Instructor: {course.instructor}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                {course.description}
              </p>

              {/* Price and Link */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  ${course.price}
                </span>
                <Link
                  href={`/courses/${course.slug}`}
                  className="px-4 py-2 bg-teal-400 hover:bg-teal-500 text-white rounded-lg text-sm font-medium transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>

      {/* View All Button */}
      {featuredCourses.length > 0 && (
        <div className="flex items-center justify-center mt-12">
          <Link
            href={"/courses"}
            className="px-8 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-lg font-medium transition-colors duration-300"
          >
            View All Courses
          </Link>
        </div>
      )}

      {/* Empty State */}
      {featuredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No featured courses available at the moment.
          </p>
          <Link
            href={"/courses"}
            className="inline-block mt-4 px-6 py-2 bg-teal-400 text-white rounded-lg"
          >
            Browse All Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default Features;