import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/web1.png";
import card2 from "../../assets/images/portfolio-images/web4.png";
import card3 from "../../assets/images/portfolio-images/web6.png";
import card4 from "../../assets/images/portfolio-images/web5.png";
import card5 from "../../assets/images/portfolio-images/webflow2.png";
import card6 from "../../assets/images/portfolio-images/webflow1.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "React JS | JavaScript",
    title: "BinaryBean Cafe Dashboard",
    description:
      "A responsive web application for managing café operations with sales tracking, orders, inventory, and customer insights.",
    link: "https://binary-bean.netlify.app/",
  },
  {
    id: 2,
    image: card2,
    category: "React JS | JavaScript",
    title: "ProMatch Admin Dashboard",
    description:
      "A fully functional admin panel built with React.js, designed for managing users, drills, and shot analytics.",
    link: "https://promatch-admin-dashboard.netlify.app/dashboard",
  },
  {
    id: 3,
    image: card3,
    category: "HTMl | CSS | Bootstrap",
    title: "Rent Loom Website",
    description:
      "A responsive website built with HTML, CSS, and Bootstrap, designed to simplify property management for landlords and property managers.",
    link: "https://lucent-naiad-ada2ed.netlify.app/home",
  },
  {
    id: 4,
    image: card4,
    category: "HTML | CSS | Bootstrap | JavaScript",
    title: "Portfolio Website",
    description:
      "A clean and modern portfolio site built with HTML, CSS, Bootstrap & JavaScript, designed to showcase creative work and services professionally.",
    link: "https://m-updated-ortfolio-website.netlify.app/home",
  },
  {
    id: 5,
    image: card5,
    category: "webflow | GSAP Animation",
    title: "Symphony Energy Website",
    description:
      "Built with Webflow, showcasing HVAC optimisation solutions with a clean, responsive design and clear user journey.",
    link: "https://www.symphonyenergy.com/",
  },
  {
    id: 6,
    image: card6,
    category: "webflow | GSAP Animation",
    title: "The ValueCare Group Website",
    description:
      "Built with Webflow, this site highlights preventative healthcare solutions with a clean, responsive layout and user-friendly navigation.",
    link: "https://www.thevaluecaregroup.co.uk/",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A showcase of my recent projects, highlighting my expertise in building responsive, user-focused, and visually engaging web experiences.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
