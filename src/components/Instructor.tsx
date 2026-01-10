import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "Arjun Malhotra",
    designation: "Lead Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Ayesha Khan",
    designation: "Vocal Training Coach",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Daniel Brooks",
    designation: "Drums & Rhythm Specialist",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Sophia Martinez",
    designation: "Piano & Music Theory Expert",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Michael Turner",
    designation: "Music Production Mentor",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "Emily Chen",
    designation: "Violin & Classical Music Coach",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=60",
  },
];

export function Instructor() {
  return (
    <>
      <div className="relative h-[40rem] overflow-hidden">
        <WavyBackground className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-5xl font-extrabold text-white">
              Meet Our Instructors
            </h1>

            <p className="max-w-xl text-lg text-slate-200">
              Discover the talented mentors guiding your musical journey
            </p>

            <div className="mt-4 flex items-center justify-center">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </WavyBackground>
      </div>
    </>
  );
}
