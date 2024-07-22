import { Banner, CTA, ScaleCarousel, Stats } from "@/components";
import Dev from "@/components/includes/Event";
import WallOfWisdom from "@/components/includes/WallOfWidom";
import { BentoGridDemo } from "@/components/includes/EventGrid";
import { Department } from "@/components/includes/Department";
import Faq from "@/components/includes/Faq";
import MarqueeDemo from "@/components/includes/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      {/* <Stats /> */}
      <div className="">
        <h2 className="text-2xl  md:text-5xl font-bold text-center mb-4 md:mb-6 mt-8">
          Chapters and Affinity group
        </h2>
        {/* <h3 className="text-sm md:text-base font-bold text-center mb-4 md:mb-6 mt-8">
          Chapters and affinity groups are the key segments of IEEE architecture          that provides customized opportunities to students
        // </h3> */}
        <Department />
      </div>
      <section className="">
        <div className="pt-8 md:pt-12">
          <h2 className="text-2xl  md:text-5xl font-bold text-center mb-4 md:mb-6 mt-8">
            Our Achievements
          </h2>
          <ScaleCarousel list={Achivement} height="h-96" />
        </div>
      </section>
      <div className="pt-8">
        <h2 className="text-2xl  md:text-5xl font-bold text-center mb-4 md:mb-6 mt-8">
          Alumni Reflectioins
        </h2>
        <div className="">
          <MarqueeDemo />
        </div>
      </div>
      <section className="md:px-28 px-8 pt-8 md:pt-16">
        <WallOfWisdom />
      </section>
      {/* <Dev /> */}
      <div className="pt-12 md:pt-16 px-8 md:px-28">
        <BentoGridDemo />
      </div>
      <Faq />
      {/* <CTA /> */}
    </>
  );
}

const Achivement = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "1st Prize at Smart India Hackathon 2021",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "2nd Prize at XYZ Hackathon 2025",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "2nd Prize at XYZ Hackathon 2025",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "2nd Prize at XYZ Hackathon 2025",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "2nd Prize at XYZ Hackathon 2025",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "2nd Prize at XYZ Hackathon 2025",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "2nd Prize at XYZ Hackathon 2025",
  },
];
