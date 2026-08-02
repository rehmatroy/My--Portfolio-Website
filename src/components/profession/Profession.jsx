import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "I build fast, responsive, and scalable web applications using React.js, HTML, CSS, and modern front-end tools.",
  },
  {
    id: 2,
    title: "Website Development (Custom & CMS)",
    description:
      "From custom-coded websites to Webflow and CMS-based solutions, I develop user-friendly, modern, and maintainable websites.",
  },
  {
    id: 3,
    title: "Performance Optimization",
    description:
      "I optimize websites for speed, accessibility, and SEO to ensure smooth performance and better rankings.",
  },
  {
    id: 3,
    title: "Maintenance & Support",
    description:
      "I provide ongoing support, bug fixes, and improvements to keep your website updated and running flawlessly.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in creating responsive and user-friendly web applications with modern front-end tools like React.js, HTML, CSS, Bootstrap, Tailwind, and Webflow & Wordpress. My focus is on turning designs into functional, pixel-perfect interfaces while ensuring speed, performance, and seamless user experiences.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
