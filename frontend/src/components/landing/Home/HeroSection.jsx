import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ButtonFill from "../../common/ButtonFill";
import ButtonOutline from "../../common/ButtonOutline";

const HeroSection = () => {
    

  return (
    <section className="bg-[#fdf2e9] py-20">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-8 items-center">
        {/* ========= Left Side (Text) ========= */}
        <div data-aos="fade-right">
          <h1 className="text-[2.5rem]  font-bold leading-tight text-[#333] mb-8">
            A healthy meal delivered to your door, every single day
          </h1>

          <p className="text-[1.6rem] text-[#555] leading-relaxed mb-10">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <ButtonFill href="#">Start eating well</ButtonFill>
            <ButtonOutline href="#">Learn more ↓</ButtonOutline>
          </div>

          {/* ========= Delivered Meals ========= */}
          <div className="flex items-center gap-8" data-aos="fade-up">
            <div className="flex -space-x-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <img
                  key={i}
                  src={`https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-${
                    i + 1
                  }.jpg`}
                  alt="Customer"
                  className="w-12 h-12 md:w-[4.8rem] md:h-[4.8rem] rounded-full border-4 border-[#fdf2e9]"
                />
              ))}
            </div>
            <p className="text-[1rem] md:text-[1.3rem] font-semibold text-[#333]">
              <span className="text-[#cf711f]">250,000+</span> meals delivered
              last year!
            </p>
          </div>
        </div>

        {/* ========= Right Side (Image) ========= */}
        {/* <div data-aos="fade-left" className="flex justify-center md:justify-end">
          <LazyLoadImage
            src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/hero.png"
            alt="Woman enjoying food"
            effect="blur"
            className="w-full max-w-[600px]"
          />
        </div> */}
        <div data-aos="fade-left" className="flex justify-center md:justify-end">
            <LazyLoadImage
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80"
                alt="Modern luxury apartment exterior"
                effect="blur"
                className="w-full max-w-[600px] rounded-xl shadow-lg"
            />
        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;
