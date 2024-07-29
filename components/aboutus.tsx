export default function AboutUs() {
  return (
    <section className="relative w-screen" id="about">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="w-full mx-auto px-[8vw]">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Who we are?</h2>
            <p
              className="text-base text-gray-600 leading-8"
              data-aos="zoom-y-out"
            >
              Better Technology Company (BT Ltd) is a start-up and a networked
              business firm with its head office located in the Nyarugenge
              District of Kigali, Rwanda, uniquely positioned at the
              intersection of science, service, and technology. Since 2010, BT
              Ltd has been working with ambitious partners on mission-critical
              projects that prioritize health and safety across Africa. As an
              impact-driven company, we strive for our products and services to
              be delightful, competitive, professional, and safe for both our
              people and the planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
