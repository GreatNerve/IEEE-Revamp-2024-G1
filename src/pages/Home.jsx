import { Banner, CTA, ScaleCarousel, Stats } from "@/components";
export default function Home() {
  return (
    <>
      <Banner />
      {/* <Stats /> */}
      <section className="">
        <div className="">
          <h2 className="text-2xl  md:text-5xl font-bold text-center mb-4 md:mb-6 mt-8">
            Our Achievements
          </h2>
          <ScaleCarousel list={Achivement} height="h-96" />
        </div>
      </section>
      <CTA />
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
