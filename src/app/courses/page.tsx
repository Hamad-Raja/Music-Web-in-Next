"use client";

import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import courseData from "@/data/courses-data.json";

export default function page() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-20 ">
      {courseData.courses.map((course) => (
        <CardContainer key={course.id} className="inter-var">
          <CardBody className="relative rounded-xl border border-border bg-background p-6">
            
            {/* Title */}
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-foreground"
            >
              {course.title}
            </CardItem>

            {/* Description */}
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-sm text-muted-foreground"
            >
              {course.description}
            </CardItem>

            {/* Image */}
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="mt-4 w-full"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-60 w-full rounded-xl object-cover"
              />
            </CardItem>

            {/* Actions */}
            <div className="mt-16 flex items-center justify-between">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="rounded-xl px-4 py-2 text-xs text-muted-foreground"
              >
                View Course →
              </CardItem>

              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
              >
                Enroll
              </CardItem>
            </div>

          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
