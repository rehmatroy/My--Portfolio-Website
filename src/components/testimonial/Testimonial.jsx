import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Hear from the client I have partnered with and how my work helped bring their ideas to life.",
    quote: `Excellent Webflow Developer! I had the pleasure of working with Rehmat on a Webflow project, and he exceeded my expectations in every way. His skills in Webflow development are top-notch, and he delivered a stunning website that perfectly aligned with my vision. He was highly professional, communicative, and attentive to every detail throughout the process. 
    Rehmat’s expertise allowed us to complete the project efficiently, and his creativity helped generate new ideas. I’m thoroughly impressed with his work and highly recommend him to anyone needing a skilled Webflow developer. 
    Thank you, Rehmat, for your hard work and dedication!`,
    name: "Elyes",
    designation: "CEO at The Blessing Company",
  },
  {
    message:
      "Building long-term trust through reliable work and seamless collaboration",
    quote: `Rehmat did an outstanding job in converting our Figma designs into HTML. His work was nothing short of excellent, and I am truly impressed with the level of professionalism, attention to detail, and quality of his work. He is always available to answer questions, provide updates and make necessary changes promptly. His ability to transform our Figma designs into a beautiful, functional and responsive website was truly remarkable, and we couldn't have been more pleased with the end result.`,
    name: "Jewelyn",
    designation: "Managing Director at EasyTech Company",
  },
  {
    message:
      "Professional, reliable, and creative, everything you want in a development partner.",
    quote: `I would like to thank Rehmat very much for the quick and reliable cooperation! Rehmat has a lot of knowledge when it comes to Webflow and Figma, which makes it very easy to work with him. Thank you again!`,
    name: "Joel",
    designation: "COO at GrowLocal Solutions",
  },
  {
    message:
      "Feedback from clients who value quality, communication, and results in every project.",
    quote: `it was absolute joy working with Rehmat.
    I needed a minimalist web template and he was able to deliver exactly what I wanted, and project completed in very short time.
    will surely hire him again if I need more website stuff :)`,
    name: "Cornelius Aveling",
    designation: "CEO at CareValue Health",
  },
  {
    message:
      "Trusted by businesses and teams worldwide, here’s what clients share about working with me",
    quote: `Rehmat has been a valuable asset to us in building Webflow websites. Would recommend him any day and will hire him again!`,
    name: "Rameel Sheikh",
    designation: "Marketing Manager at Strabo",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
