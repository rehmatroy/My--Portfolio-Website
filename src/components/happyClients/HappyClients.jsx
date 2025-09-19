import Marquee from "react-fast-marquee";

// Import your local assets (logos stored in src/assets)
import marvelcode from "../../assets/logos/marvelcode.svg";
import charity from "../../assets/logos/charity.svg";
import growlocal from "../../assets/logos/growlocal.jpg";
import chicago from "../../assets/logos/chicago.png";
import easytech from "../../assets/logos/easytech.gif";
import theblessing from "../../assets/logos/theblessing.png";
import stats from "../../assets/logos/stats.jpg";
import lighthouse from "../../assets/logos/lighthouse.png";
import promatch from "../../assets/logos/promatch.svg";
import carevalue from "../../assets/logos/carevalue.jpg";
import fule from "../../assets/logos/fuel.png";
import fuellogic from "../../assets/logos/fuellogic.webp";
import navfuel from "../../assets/logos/navfuel.png";
import southren from "../../assets/logos/southren.png";
import strabo from "../../assets/logos/strabo.png";

const commonSVGClass = "h-5 sm:h-8 md:h-10";

const brandLogos = [

  <img
    key="marvelcode"
    src={marvelcode}
    alt="marvelcode"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="charity"
    src={charity}
    alt="charity"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="growlocal"
    src={growlocal}
    alt="growlocal"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="chicago"
    src={chicago}
    alt="chicago"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="easytech"
    src={easytech}
    alt="easytech"
    className={`${commonSVGClass} object-contain`}
  />, 

  <img
    key="theblessing"
    src={theblessing}
    alt="theblessing"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="stats"
    src={stats}
    alt="stats"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="lighthouse"
    src={lighthouse}
    alt="lighthouse"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="promatch"
    src={promatch}
    alt="promatch"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="carevalue"
    src={carevalue}
    alt="carevalue"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="fule"
    src={fule}
    alt="fule"
    className={`${commonSVGClass} object-contain`}
  />,

   <img
    key="fuellogic"
    src={fuellogic}
    alt="fuellogic"
    className={`${commonSVGClass} object-contain`}
  />,

   <img
    key="navfuel"
    src={navfuel}
    alt="navfuel"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="southren"
    src={southren}
    alt="southren"
    className={`${commonSVGClass} object-contain`}
  />,

  <img
    key="strabo"
    src={strabo}
    alt="strabo"
    className={`${commonSVGClass} object-contain`}
  />,
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I have worked with a variety of clients, from startups to established brands, creating solutions tailored to their needs. Every project reflects my focus on quality, performance, and lasting value.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};
export default HappyClients;
