import React, { useState } from "react";
import Title from "../layouts/Title";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Slider from "react-slick";
import { testimonialOne, testimonialTwo, quote } from "../../assest";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300
         rounded-md text-2xl text-gray-400 flex justify-center items-center 
         absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}
      ><HiArrowRight/></div>
    );
  }

  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300
      rounded-md text-2xl text-gray-400 flex justify-center items-center 
      absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}
      ><HiArrowLeft/></div>
    );
  }

const Testimonial = () => {
    const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    beforeChange: (prev, next) => {
        setDotActive(next);
    },
    appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul
           style={{ 
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
          > 
          {dots}
           </ul>
        </div>
      ),
      customPaging: i => (
        <div
         style={
            i===dotActive?{
              width: "12px",
              height: "12px",
              color: "blue",
              background: "#ff014f",
              borderRadius: "50%",
              cursor: "pointer",
            }
            :{
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
            }
         }
        >

        </div>
      )
    };
  
  return (
    <section
      id="testimonials"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* {slider one} */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center  p-8 rounded-lg shadow-shadowOne">
                <img
                  className="object-cover rounded-lg md:h-32 lgl:h-72 h-72"
                  src={testimonialTwo}
                  alt="testimonialOne"
                />
                <div className="flex flex-col justify-end w-full">
                  <p className="mb-2 text-xs tracking-wide uppercase text-designColor">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jon Deon Jon</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />

                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between py-6 border-b-2 lgl:items-center border-b-gray-900">
                    <div>
                      <h3 className="text-xl font-medium tracking-wide lgl:text-2xl">
                        Travel Mobile App Design.
                      </h3>
                      <p className="mt-3 text-base text-gray-400">
                        Via Upwork - Mar 4, 2020 - Aug 30, 2022 test
                      </p>
                    </div>
                    <div className="flex gap-1 text-yellow-500">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>

                  <p className="text-base font-medium leading-6 tracking-wide text-gray-400 font-titleFont">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse id ante in quam venenatis accumsan. Mauris
                    auctor eros vel feugiat pellentesque. Vivamus rhoncus, nibh
                    id volutpat finibus, dolor urna viverra elit, eu consequat
                    lacus quam nec ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="w-full">
            <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center  p-8 rounded-lg shadow-shadowOne">
                <img
                  className="object-cover rounded-lg md:h-32 lgl:h-72 h-72"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="flex flex-col justify-end w-full">
                  <p className="mb-2 text-xs tracking-wide uppercase text-designColor">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jon Deon Jon</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />

                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between py-6 border-b-2 lgl:items-center border-b-gray-900">
                    <div>
                      <h3 className="text-xl font-medium tracking-wide lgl:text-2xl">
                        Travel Mobile App Design.
                      </h3>
                      <p className="mt-3 text-base text-gray-400">
                        Via Upwork - Mar 4, 2020 - Aug 30, 2022 test
                      </p>
                    </div>
                    <div className="flex gap-1 text-yellow-500">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>

                  <p className="text-base font-medium leading-6 tracking-wide text-gray-400 font-titleFont">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse id ante in quam venenatis accumsan. Mauris
                    auctor eros vel feugiat pellentesque. Vivamus rhoncus, nibh
                    id volutpat finibus, dolor urna viverra elit, eu consequat
                    lacus quam nec ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>

        <div className="w-full">
            <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center  p-8 rounded-lg shadow-shadowOne">
                <img
                  className="object-cover rounded-lg md:h-32 lgl:h-72 h-72"
                  src={testimonialTwo}
                  alt="testimonialOne"
                />
                <div className="flex flex-col justify-end w-full">
                  <p className="mb-2 text-xs tracking-wide uppercase text-designColor">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jon Deon Jon</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />

                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between py-6 border-b-2 lgl:items-center border-b-gray-900">
                    <div>
                      <h3 className="text-xl font-medium tracking-wide lgl:text-2xl">
                        Travel Mobile App Design.
                      </h3>
                      <p className="mt-3 text-base text-gray-400">
                        Via Upwork - Mar 4, 2020 - Aug 30, 2022 test
                      </p>
                    </div>
                    <div className="flex gap-1 text-yellow-500">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>

                  <p className="text-base font-medium leading-6 tracking-wide text-gray-400 font-titleFont">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse id ante in quam venenatis accumsan. Mauris
                    auctor eros vel feugiat pellentesque. Vivamus rhoncus, nibh
                    id volutpat finibus, dolor urna viverra elit, eu consequat
                    lacus quam nec ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
