import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/web1.png";
import card2 from "../../assets/images/portfolio-images/web4.png";
import card3 from "../../assets/images/portfolio-images/web6.png";
import card4 from "../../assets/images/portfolio-images/web5.png";
import card5 from "../../assets/images/portfolio-images/webflow2.png";
import card6 from "../../assets/images/portfolio-images/webflow1.png";
import card7 from "../../assets/images/portfolio-images/web7.png";
import card8 from "../../assets/images/portfolio-images/webflow3.png";
import card9 from "../../assets/images/portfolio-images/web9.png";
import card10 from "../../assets/images/portfolio-images/wordpress2.png";
import card11 from "../../assets/images/portfolio-images/wordpress1.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "React JS | JavaScript | CSS",
    title: "BinaryBean Cafe Dashboard",
    description:
      "A responsive web application for managing café operations with sales tracking, orders, inventory, and customer insights.",
    link: "https://binary-bean.netlify.app/",
    target: "_blank",
  },
  {
    id: 2,
    image: card2,
    category: "React JS | Next JS | JavaScript | CSS",
    title: "ProMatch Admin Dashboard",
    description:
      "A fully functional admin panel built with React.js, designed for managing users, drills, and shot analytics.",
    link: "https://promatch-admin-dashboard.netlify.app/dashboard",
    target: "_blank",
  },
  {
    id: 3,
    image: card3,
    category: "HTML | CSS | Bootstrap",
    title: "Rent Loom Website",
    description:
      "A responsive website built with HTML, CSS, and Bootstrap, designed to simplify property management for landlords and property managers.",
    link: "https://lucent-naiad-ada2ed.netlify.app/home",
    target: "_blank",
  },
  {
    id: 8,
    image: card8,
    category: "Webflow | Webflow Interactions | Webflow CMS",
    title: "BlueGrid Website",
    description:
      "Built with Webflow, this website showcases IT consulting and technology solutions with a clean, responsive design and intuitive user experience.",
    link: "https://elyess-new-site.webflow.io/",
    target: "_blank",
  },
  {
    id: 5,
    image: card5,
    category: "Webflow | GSAP Animation | Webflow CMS",
    title: "Symphony Energy Website",
    description:
      "Built with Webflow, showcasing HVAC optimisation solutions with a clean, responsive design and clear user journey.",
    link: "https://www.symphonyenergy.com/",
    target: "_blank",
  },
  {
    id: 6,
    image: card6,
    category: "Webflow | Webflow Interactions | Webflow CMS",
    title: "Calm-DeskCo Website",
    description:
      "Built with Webflow, this website showcases digital marketing and web development services through a clean, responsive design and engaging user experience.",
    link: "https://www.calmdeskco.com/",
    target: "_blank",
  },
  {
    id: 7,
    image: card7,
    category: "React JS | JavaScript | CSS",
    title: "GPTZero Landing Page",
    description:
      "Built with React.js, JavaScript, and CSS, this landing page showcases an AI detection platform with a clean, responsive design and smooth user experience.",
    link: "https://gptxero-landingpage.netlify.app/",
    target: "_blank",
  },
  {
    id: 4,
    image: card4,
    category: "HTML | CSS | Bootstrap | JavaScript",
    title: "Portfolio Website",
    description:
      "A clean and modern portfolio site built with HTML, CSS, Bootstrap & JavaScript, designed to showcase creative work and services professionally.",
    link: "https://m-updated-ortfolio-website.netlify.app/home",
    target: "_blank",
  },
  {
    id: 9,
    image: card9,
    category: "React JS | JavaScript | CSS Animations",
    title: "Keller Website",
    description:
      "Built with React.js, JavaScript, and CSS, this website showcases global geotechnical engineering projects with a modern, responsive design and intuitive navigation.",
    link: "https://www.keller.com/",
    target: "_blank",
  },
  {
    id: 10,
    image: card10,
    category: "Wordpress | Elementor | Custom Animations",
    title: "Amey Website",
    description:
      "Built with WordPress, Elementor, this corporate website showcases infrastructure consulting and engineering services with a clean, responsive design and intuitive navigation.",
    link: "https://www.amey.com/uk",
    target: "_blank"
  },
  {
    id: 11,
    image: card11,
    category: "Wordpress | Elementor",
    title: "Golden Peak Tours Website",
    description:
      "Built with WordPress, Elementor, this tourism website showcases guided tours and travel experiences across Pakistan with a clean, responsive design and seamless booking experience.",
    link: "https://goldenpeaktours.com.pk/",
    target: "_blank"
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
