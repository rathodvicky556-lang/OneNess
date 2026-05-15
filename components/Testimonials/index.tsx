"use client";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "Founder, Delhi Eats",
    content: "Their accounting guidance helped our restaurant manage GST and payroll smoothly. The team is prompt, knowledgeable, and practical.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Amit Patel",
    designation: "CEO, Patel Enterprises",
    content: "My quarterly filings were completed ahead of time, and the tax advice saved us a lot of unnecessary cost. Very reliable service.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Radhika Singh",
    designation: "CFO, GrowthWings",
    content: "The team explained every compliance step clearly. Our cash flow is now easier to predict and our finance process is organized.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Karan Mehta",
    designation: "Founder, Mehta Innovations",
    content: "They made GST filing and monthly reconciliation so much simpler. I’m impressed by their responsiveness and attention to detail.",
    image: "/images/testimonials/auth-04.png",
    star: 5,
  },
];

const Testimonials = () => {
  // We duplicate the items to ensure the loop is seamless
  const carouselItems = [...testimonialData, ...testimonialData];

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Users Says"
          paragraph="Trusted by Indian founders and finance leaders for clear compliance, tax, and accounting support."
          center
        />

        <div className="relative overflow-hidden py-8">
          {/* Track Container */}
          <div className="flex animate-carousel gap-6">
            {carouselItems.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative SVGs */}
      <div className="absolute right-0 top-5 z-[-1]">
        <svg width="238" height="531" viewBox="0 0 238 531" fill="none">
          <rect opacity="0.3" x="422.819" y="-70.8145" width="196" height="541.607" rx="2" transform="rotate(51.2997 422.819 -70.8145)" fill="url(#paint0_linear_83:2)" />
          <defs>
            <linearGradient id="paint0_linear_83:2" x1="517.152" y1="-251.373" x2="517.152" y2="459.865" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-carousel {
          display: flex;
          width: max-content;
          animation: carousel 25s linear infinite;
        }

        /* Stop animation on hover so users can read */
        .animate-carousel:hover {
          animation-play-state: paused;
        }

        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Since we duplicated the list, we scroll exactly half of the track */
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;