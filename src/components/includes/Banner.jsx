import { SparklesCore } from "../ui/sparkles";
export default function Banner() {
  const img =
    "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section
      // className={`h-[calc(100vh-4rem-1px)] relative bg-cover bg-center bg-no-repeat`}
      className="h-screen relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0  bg-black/70"></div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-5 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-2xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="tracking-tight	 text-3xl font-extrabold sm:text-5xl">
            NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY
            <strong className="block tracking-wide text-7xl font-extrabold text-rose-700">
              {" "}
              IEEE{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Sparking with the passion of technology, we are the IEEE NSUT Student Branch. We are a
            group of technology enthusiasts who are always ready to learn and innovate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center sm:justify-start">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Join Us
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
