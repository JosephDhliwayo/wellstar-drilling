import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header
        id="navbar"
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src="/images/logo3.png"
              alt="Wellstar Drilling icon"
              className="h-11 w-11 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
            />
            <div className="leading-none">
              <p className="text-[#1A2744] font-extrabold text-xl tracking-widest uppercase leading-none">
                Wellstar
              </p>
              <p className="text-[#2472B5] font-bold text-[10px] tracking-[0.35em] uppercase mt-1 leading-none">
                — Drilling —
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Services
            </a>
            <a href="#team" className="hover:text-primary transition-colors">
              Team
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#gallery"
              className="hover:text-primary transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            id="menu-btn"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="Open menu"
          >
            <svg
              id="icon-open"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="icon-close"
              className="w-6 h-6 hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 text-sm font-medium text-gray-700"
        >
          <a href="#home" className="block py-2 hover:text-primary">
            Home
          </a>
          <a href="#about" className="block py-2 hover:text-primary">
            About
          </a>
          <a href="#services" className="block py-2 hover:text-primary">
            Services
          </a>
          <a href="#team" className="block py-2 hover:text-primary">
            Team
          </a>
          <a href="#projects" className="block py-2 hover:text-primary">
            Projects
          </a>
          <a href="#gallery" className="block py-2 hover:text-primary">
            Gallery
          </a>
          <a
            href="#contact"
            className="block mt-2 bg-primary text-white text-center py-2 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2744] via-[#2472B5] to-[#5AABDA] -z-10" />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="water-ring w-[600px] h-[600px] top-[-200px] right-[-200px]" />
          <div className="water-ring w-[400px] h-[400px] bottom-[-100px] left-[-100px] animation-delay-1" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-white">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase backdrop-blur">
                Zimbabwe&apos;s Trusted Borehole Specialists
              </span>
              <h1 className="hero-title text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
                Clean Water <br className="hidden sm:block" />
                Starts <span className="text-accent-light">Underground</span>
              </h1>
              <p className="hero-sub text-white/80 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                Wellstar Drilling delivers reliable borehole drilling, pump
                installation, and water solutions to homes, farms, and
                businesses across Zimbabwe.
              </p>
              <div className="hero-btns flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="bg-white text-primary font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors text-center"
                >
                  Get a Free Quote
                </a>
                <a
                  href="#services"
                  className="border border-white/50 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-colors text-center"
                >
                  Our Services
                </a>
              </div>

              {/* Stats */}
              <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <p className="text-xl sm:text-3xl font-extrabold">2000+</p>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    Boreholes Drilled
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-3xl font-extrabold">5+</p>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-3xl font-extrabold">10</p>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    Provinces Covered
                  </p>
                </div>
              </div>
            </div>

            {/* Hero illustration */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />
                <div className="relative w-80 h-80 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-48 h-48 text-white"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="92"
                      y="10"
                      width="16"
                      height="120"
                      rx="4"
                      fill="currentColor"
                      opacity=".9"
                    />
                    <rect
                      x="70"
                      y="30"
                      width="60"
                      height="8"
                      rx="3"
                      fill="currentColor"
                      opacity=".7"
                    />
                    <rect
                      x="78"
                      y="50"
                      width="44"
                      height="8"
                      rx="3"
                      fill="currentColor"
                      opacity=".7"
                    />
                    <rect
                      x="60"
                      y="70"
                      width="80"
                      height="10"
                      rx="4"
                      fill="currentColor"
                      opacity=".8"
                    />
                    <path
                      d="M88 130 L100 155 L112 130 Z"
                      fill="currentColor"
                      opacity=".9"
                    />
                    <ellipse
                      cx="40"
                      cy="150"
                      rx="12"
                      ry="16"
                      fill="currentColor"
                      opacity=".5"
                    />
                    <ellipse
                      cx="160"
                      cy="160"
                      rx="10"
                      ry="14"
                      fill="currentColor"
                      opacity=".4"
                    />
                    <ellipse
                      cx="70"
                      cy="175"
                      rx="8"
                      ry="11"
                      fill="currentColor"
                      opacity=".35"
                    />
                    <path
                      d="M10 140 Q50 130 100 140 Q150 150 190 140"
                      stroke="currentColor"
                      strokeWidth={3}
                      opacity=".6"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 160 Q60 152 100 160 Q140 168 180 160"
                      stroke="currentColor"
                      strokeWidth={2}
                      opacity=".4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 175 Q70 168 110 175 Q150 182 170 175"
                      stroke="currentColor"
                      strokeWidth={2}
                      opacity=".3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 inset-x-0">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-16 text-white fill-current"
          >
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-14 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-96 shadow-lg bg-white flex items-center justify-center p-10 border border-gray-100">
                <img
                  src="/images/logo.jpg"
                  alt="Wellstar Drilling logo"
                  className="w-full max-w-sm object-contain"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-3xl font-extrabold">5+</p>
                <p className="text-white/80 text-xs font-medium">
                  Years in Business
                </p>
              </div>
            </div>

            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
                Zimbabwe&apos;s Water Access{" "}
                <span className="text-primary">Partner</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wellstar Drilling was founded with a simple mission: bring
                safe, reliable water to every corner of Zimbabwe. From remote
                rural farms to urban commercial properties, we have delivered
                sustainable water solutions for over 5 years.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of certified hydrogeologists, skilled drillers, and
                pump engineers uses modern drilling rigs and equipment to
                locate and access groundwater efficiently and responsibly. We
                are fully registered with the Zimbabwe National Water
                Authority (ZINWA) and adhere to all industry standards.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "ZINWA registered & compliant",
                  "Modern rotary drilling rigs",
                  "Nationwide coverage",
                  "Accredited water quality testing",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team" className="py-14 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              The People Behind The Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Meet Our Team
            </h2>
            <p className="text-gray-500 mt-4">
              Dedicated professionals committed to delivering clean water
              across Zimbabwe.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                img: "team-01.jpg",
                name: "P. Magwa",
                role: "Managing Director",
                ring: "ring-primary/20",
                delay: "delay-1",
              },
              {
                img: "team-04.jpg",
                name: "A. Maibva",
                role: "Managing Director",
                ring: "ring-primary/20",
                delay: "delay-2",
              },
              {
                img: "team-06.jpg",
                name: "M. Magwa",
                role: "Executive Director",
                ring: "ring-primary/15",
                delay: "delay-3",
              },
              {
                img: "team-07.jpg",
                name: "J. Dhliwayo",
                role: "Sales & Marketing Director",
                ring: "ring-accent/20",
                delay: "delay-1",
              },
              {
                img: "team-02.jpg",
                name: "T. Mashinyira",
                role: "Operations Manager",
                ring: "ring-primary/10",
                delay: "delay-2",
              },
              {
                img: "team-03.jpg",
                name: "T. Chikwanda",
                role: "Hydrogeologist",
                ring: "ring-primary/10",
                delay: "delay-3",
              },
              {
                img: "team-05.jpg",
                name: "T. Mutamba",
                role: "Irrigation Engineer",
                ring: "ring-primary/10",
                delay: "delay-1",
              },
            ].map((member) => (
              <div
                key={member.name}
                className={`team-card fade-in ${member.delay} bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ${member.ring}`}
                >
                  <img
                    src={`/images/${member.img}`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                  {member.name}
                </h3>
                <p className="text-primary text-xs sm:text-sm font-semibold mt-0.5">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-14 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Comprehensive Water Solutions
            </h2>
            <p className="text-gray-500 mt-4">
              From site survey to running water — we handle every step of the
              process.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Borehole Drilling",
                desc: "Professional rotary and percussion drilling for residential, agricultural, and commercial properties to reach reliable groundwater aquifers.",
                path: "M12 2v11m-3-3l3 4 3-4M4 10h16M4 14h16M4 18h16",
              },
              {
                title: "Pump Installation",
                desc: "Supply and installation of submersible and surface pumps, solar-powered pump systems, and pump controls tailored to your yield and budget.",
                path: "M12 19V8m0 0l-4 4m4-4l4 4M5 19h14M8 5h8a1 1 0 011 1v1H7V6a1 1 0 011-1z",
              },
              {
                title: "Water Quality Testing",
                desc: "Laboratory and on-site testing for bacteria, pH, minerals, and contaminants. Receive a full report and recommendations to ensure water is safe for drinking and irrigation.",
                path: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
              },
              {
                title: "Hydrogeological Survey",
                desc: "Expert ground surveys using geophysical methods to identify the best drilling sites, maximising water yield and minimising dry borehole risk.",
                path: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
              },
              {
                title: "Borehole Rehabilitation",
                desc: "Restore an old or under-performing borehole through development, airlifting, and re-equipping to bring it back to full productivity.",
                path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="service-card fade-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d={service.path}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
            <div className="service-card fade-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Solar Pump Systems
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Off-grid solar-powered water pumping for farms and remote
                communities — reducing electricity costs and ensuring water
                access even without grid power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS / GALLERY ===== */}
      <section id="projects" className="py-14 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Our Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Projects Across Zimbabwe
            </h2>
            <p className="text-gray-500 mt-4">
              A sample of the boreholes and water systems we have delivered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "photo-01.jpg",
                alt: "Rural solar pump installation",
                tag: "Matabeleland",
                title: "Rural Solar Pump System",
                desc: "Dual-tank elevated solar pump serving a remote off-grid community",
              },
              {
                img: "photo-08.jpg",
                alt: "Borehole drilling rig",
                tag: "Mashonaland",
                title: "Residential Estate Drilling",
                desc: "90 m borehole, submersible pump and 5 000 L storage tank",
              },
              {
                img: "photo-03.jpg",
                alt: "Community solar water point",
                tag: "Gweru",
                title: "Community Solar Water Point",
                desc: "Solar borehole with wash bay serving 200+ households",
              },
              {
                img: "photo-14.jpg",
                alt: "Water gushing from borehole",
                tag: "Harare",
                title: "High-Yield Water Strike",
                desc: "Successful artesian borehole — clean water flowing within 48 hours",
              },
              {
                img: "photo-04.jpg",
                alt: "Geophysical survey team at sunset",
                tag: "Masvingo",
                title: "Geophysical Survey",
                desc: "TEM survey identifying optimal drilling sites for a commercial farm",
              },
              {
                img: "photo-05.jpg",
                alt: "Borehole hand pump installation",
                tag: "Manicaland",
                title: "Village Hand Pump Borehole",
                desc: "Afridev hand pump with concrete apron and drainage channel",
                objectTop: true,
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden h-72 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={`/images/${project.img}`}
                  alt={project.alt}
                  className={`w-full h-full object-cover ${project.objectTop ? "object-top" : ""} group-hover:scale-105 transition-transform duration-700`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs font-semibold bg-white/20 backdrop-blur px-2 py-0.5 rounded-full">
                    {project.tag}
                  </span>
                  <h3 className="font-bold text-lg mt-2">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-gray-500">
            Have a project in mind?{" "}
            <a
              href="#contact"
              className="text-primary font-semibold hover:underline"
            >
              Get in touch →
            </a>
          </p>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="py-14 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Behind The Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              On The Ground
            </h2>
            <p className="text-gray-500 mt-4">
              Real crews, real rigs, real results — from survey to water
              strike.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { img: "photo-02.jpg", alt: "Drilling rig in operation" },
              { img: "photo-06.jpg", alt: "Night pump testing" },
              { img: "photo-07.jpg", alt: "Pump yield testing in the field" },
              { img: "photo-09.jpg", alt: "Team on site with borehole casing" },
              { img: "photo-10.jpg", alt: "Wellstar drilling crew member" },
              { img: "photo-11.jpg", alt: "Drilling cuttings at the bit" },
              { img: "photo-12.jpg", alt: "Lowering borehole casing" },
              { img: "photo-13.jpg", alt: "Air rotary drilling" },
              { img: "photo-15.jpg", alt: "Drilling rig and crew" },
              { img: "photo-16.jpg", alt: "Night drilling operations" },
              { img: "photo-17.jpg", alt: "Wellstar team on site" },
              {
                img: "photo-18.jpg",
                alt: "Pump testing and water level measurement",
              },
            ].map((item) => (
              <div
                key={item.img}
                className="group relative overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={`/images/${item.img}`}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent-light font-semibold text-sm uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="text-3xl font-extrabold mt-2">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                initials: "TM",
                name: "Tendai Mutasa",
                role: "Harare homeowner",
                quote:
                  "Wellstar drilled our borehole in just two days. The team was professional, the water yield is excellent, and the price was very fair. I highly recommend them.",
              },
              {
                initials: "GN",
                name: "George Ncube",
                role: "Commercial farmer, Mashonaland",
                quote:
                  "We engaged Wellstar for our tobacco farm in Mashonaland. Their geophysical survey identified a high-yield site that previous contractors missed. Outstanding work.",
              },
              {
                initials: "AN",
                name: "Agnes Ndlovu",
                role: "Village chairperson, Matabeleland",
                quote:
                  "The solar pump system they installed has transformed our community. We no longer walk 5 km for water. Wellstar changed our lives — God bless them.",
              },
            ].map((t) => (
              <div
                key={t.initials}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
              >
                <div className="flex gap-1 mb-4">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-white/60 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-14 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Request a Free Quote
            </h2>
            <p className="text-gray-500 mt-4">
              Fill in the form below and we&apos;ll get back to you within 24
              hours with a tailored quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Phone / WhatsApp
                  </p>
                  <p className="text-gray-500 mt-1">+263 78 351 9420</p>
                  <p className="text-gray-500">+263 77 854 9362</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-500 mt-1">
                    info@wellstardrilling.co.zw
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Office Address
                  </p>
                  <p className="text-gray-500 mt-1">
                    184 Samora Avenue
                    <br />
                    Harare, Zimbabwe
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Working Hours</p>
                  <p className="text-gray-500 mt-1">
                    Mon – Fri: 8:00 AM – 5:00 PM
                  </p>
                  <p className="text-gray-500">Saturday: 8:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              id="contact-form"
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Tendai Mutasa"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+263 77 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="service"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                >
                  <option value="">Select a service…</option>
                  <option>Borehole Drilling</option>
                  <option>Pump Installation</option>
                  <option>Water Quality Testing</option>
                  <option>Hydrogeological Survey</option>
                  <option>Borehole Rehabilitation</option>
                  <option>Solar Pump System</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="location"
                >
                  Property Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Harare, Bulawayo, farm name…"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="message"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us more about your project…"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary-dark transition-colors shadow-sm"
              >
                Send Enquiry
              </button>
              <p
                id="form-success"
                className="hidden text-center text-green-600 text-sm font-medium"
              >
                Thank you! We&apos;ll be in touch within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/images/logo3.png"
                alt="Wellstar Drilling icon"
                className="h-11 w-11 rounded-full object-cover shadow-md"
              />
              <div className="leading-none">
                <p className="text-white font-extrabold text-xl tracking-widest uppercase leading-none">
                  Wellstar
                </p>
                <p className="text-accent font-bold text-[10px] tracking-[0.35em] uppercase mt-1 leading-none">
                  — Drilling —
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Bringing clean, reliable water to homes, farms, and businesses
              across Zimbabwe since 2020.
            </p>
            <p className="text-white/40 text-xs mt-6">
              © 2026 Wellstar Drilling (Pvt) Ltd. All rights reserved.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                ["#home", "Home"],
                ["#about", "About Us"],
                ["#team", "Our Team"],
                ["#services", "Services"],
                ["#projects", "Projects"],
                ["#gallery", "Gallery"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">
              Services
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Borehole Drilling</li>
              <li>Pump Installation</li>
              <li>Water Quality Testing</li>
              <li>Hydrogeological Survey</li>
              <li>Borehole Rehabilitation</li>
              <li>Solar Pump Systems</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 text-center py-4 text-white/30 text-xs">
          Registered with ZINWA · Zimbabwe
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        id="whatsapp-btn"
        href="https://wa.me/263783519420?text=Hello%20Wellstar%20Drilling"
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full shadow-xl flex items-center justify-center transition-transform duration-200 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Back to top button */}
      <button
        id="back-top"
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}
