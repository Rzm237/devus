/*voici le code du body de ma page , modifie en consequence :"import React, { useState } from "react";
import { Star } from "lucide-react"; // Icône étoile
import Vector1 from "../image/Vector1.svg";
import Vector2 from "../image/Vector2.svg";
import Bottle from "../image/bottle.svg";
import carre from "../image/carre.svg";
import phone from "../image/phone.svg";
import Rect from "../image/Rectangle.svg";
import Img1 from "../image/img1.jpg";
import Img5 from "../image/img5.jpg";
import Img7 from "../image/img7.jpg";
import Img8 from "../image/img8.jpg";
import Img31 from "../image/img31.png";
import Img101 from "../image/img101.png";

const testimonials = [
  {
    name: "John Doe",
    role: "Youtuber",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    name: "Jane Doe",
    role: "Youtuber",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.8,
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-y-32">
      <div className="px-4 grid gap-y-24">
        <div
          className=" 2xl:h-[500px] xl:gap-x-32 xl:h-[450px] xl:gap-x-16 lg:flex lg:gap-x-20 lg:justify-between lg:h-[400px] md:grid md:grid-cols-2 sm:grid 
      sm:grid-cols-2  grid grid-cols-2  bg-[var(--greenhome-color)] h-64 w-full  rounded-xl pl-4"
        >
          <div className="lg:ml-4 lg:content-start lg:mt-8 lg:gap-y-6 grid gap-y-4 h-full content-center">
            <p className="2xl:text-[80px] xl:text-[70px] lg:text-[50px] font-bold text-[30px] ">
              DevUs Lion
            </p>
            <div className="2xl:text-[30px] xl:text-[25px] lg:text-[20px] flex">
              <div className="font-semibold">
                <p>50+</p>
                <p>Auto Parts</p>
              </div>
              <div className="bg-black h-full mx-4 py-4 w-[1px]"></div>
              <div className="font-semibold">
                <p>100+</p>
                <p>Customers</p>
              </div>
            </div>
            <div className="xl:w-[350px] xl:h-[45px]  lg:w-[300px] lg:h-[40px] bg-white flex w-fit rounded-[8px] h-10 items-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="what are you looking ?"
                className="ml-4 size-full outline-none z-16"
              />
              <div className="bg-[var(--greenhome-color)] mr-4 size-fit rounded-lg relative">
                <i class="fa-solid fa-magnifying-glass p-2 "></i>
              </div>
            </div>
          </div>
          <div className="hidden sm:gap-x-12 sm:block sm:flex sm:gap-x-8 sm:size-full">
            <img
              src={Vector1}
              alt=""
              className="xl:size-[150px] lg:mb-10  lg:size-[120px] md:size-20 size-12 self-end "
            />
            <img
              src={Rect}
              alt=""
              className="xl:hidden xl:size-[400px] lg:size-[350px] md:mt-4 size-[200px] self-end relative"
            />
            <div className=" hidden xl:content-end xl:block h-full grid ">
              <img
                src={Rect}
                alt=""
                className="2xl:size-[470px] xl:mb-[-17px] xl:mr-[50px] xl:place-items-end xl:size-[400px] lg:size-[350px] md:mt-4 size-[200px] self-end relative"
              />
            </div>
            <div className="flex justify-end mt-4">
              <img
                src={Vector2}
                alt=""
                className=" xl:size-[150px] lg:absolute lg:justify-self-end lg:size-[120px] md:size-20 size-12 self-start"
              />
            </div>
          </div>
        </div>
        <div className=" grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full ">
          <div className="h-48">
            <p className="font-bold text-[30px]">
              Best Selling <br /> Parts
            </p>
            <p className="text-[15px] text-justify w-62 my-4">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="bg-[var(--greenhome-color)] rounded-lg h-8 w-fit p font-semibold content-center">
              <p className="px-4 text-xs">
                See more <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={ImgWeb}
              alt="Web Development"
              className=" rounded-xl h-48 w-72"
            />
            <p className="font-semibold text-lg">
              Web Development
            </p>
            <p className="font-semibold opacity-50 text-md">£ 900</p>
          </div>
          <div className="">
            <img
              src={ImgCloud}
              alt="Cloud Solutions"
              className=" rounded-xl h-48 w-72"
            />
            <p className="font-semibold text-lg">
              Cloud & DevOps
            </p>
            <p className="font-semibold opacity-50 text-md">£ 700</p>
          </div>
          <div >
            <img
              src={ImgAI}
              alt="AI Solutions"
              className=" rounded-xl h-48 w-72"
            />
            <p className="font-semibold text-lg text-justify">
              AI & Machine Learning
            </p>
            <p className="font-semibold opacity-50 text-md">£ 1150</p>
          </div>
        </div>
        <div className="">
          <div className="grid mb-8">
            <p className="font-bold text-[30px] lg:text-[40px] justify-self-center">
              About US
            </p>
            <p className="font-semibold opacity-50 justify-self-center text-center">
              Transforming ideas into digital realities.
            </p>
          </div>
          <div className="grid  sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 md:w-full sm:justify-start flex flex-wrap gap-4 justify-center">
            <div className="justify-items-center">
              <div className="bg-[var(--greenhome-color)] content-center h-24 w-24 rounded-full">
                <img src={Bottle} alt="Innovation" className="mx-auto" />
              </div>
              <p className="font-bold text-[20px]">Innovative Solutions</p>
              <p className="text-center">
                We craft tailored software products to meet your business needs.
              </p>
            </div>
            <div className="justify-items-center">
              <div className="bg-[var(--greenhome-color)] content-center h-24 w-24 rounded-full">
                <img src={carre} alt="Agile" className="mx-auto" />
              </div>
              <p className="font-bold text-[20px]">Agile & Fast Delivery</p>
              <p className="text-center">
                We deliver robust and scalable applications in record time.
              </p>
            </div>
            <div className="justify-items-center">
              <div className="bg-[var(--greenhome-color)] content-center h-24 w-24 rounded-full">
                <img src={phone} alt="" className="mx-auto" />
              </div>
              <p className="font-bold text-[20px]">24/7 Support</p>
              <p className="text-center">
                Our dedicated team ensures seamless assistance at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid mb-8">
          <p className="font-bold text-[30px] lg:text-[40px] justify-self-center">
            What we can build for you
          </p>
          <p className="font-semibold opacity-50 justify-self-center text-center">
            Find what you are looking for
          </p>
        </div>
        <div className="2xl:text-2xl xl:text-xl lg:text-lg lg:h-[600px] sm:h-[850px] grid justify-items-center bg-[var(--greenhome-color)] w-full h-[1200px] mt-[80px] ">
          <div className=" lg:grid-cols-3 sm:grid-cols-2 grid gap-y-4 justify-items-center absolute mt-[-40px]">
            <div className="justify-items-center grid gap-y-2">
              <div className="w-64 h-80 mx-auto rounded-xl overflow-hidden">
                <img src={ImgMobile} alt="Mobile Apps" />
              </div>
              <p className="font-bold sm:mt-[-60px] lg:mt-[-100px]">
                Mobile Applications
              </p>
            </div>
            <div className="lg:mt-[80px] justify-items-center grid gap-y-2">
              <div className="w-64 h-80 mx-auto rounded-xl overflow-hidden">
                <img src={ImgUIUX} alt="UI/UX" />
              </div>
              <p className="font-bold">UI / UX Design</p>
              <p className="text-center">
                Stunning, user-centric interfaces to enhance your products.
              </p>
              <div className="xl:h-12 bg-white rounded-lg h-8 w-fit p font-semibold content-center">
                <p className="px-4 2xl:text-2xl xl:text-xl lg:text-lg text-xs pointer">
                  Explore <i class="fa-solid fa-arrow-right"></i>
                </p>
              </div>
            </div>
            <div className=" justify-items-center grid gap-y-2">
              <div className="w-64 h-80 mx-auto rounded-xl overflow-hidden">
                <img src={ImgProject} alt="Recent Projects" />
              </div>
              <p className="font-bold lg:mt-[-100px]">Recent Projects</p>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-10">
          What our clients say about <br />
          <span className="text-black">DevUs Lion ?</span>
        </h2>
        <div className="bg-[var(--greenhome-color)] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 transition-all duration-500">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <p className="text-lg mb-4 max-w-xl">
              {testimonials[activeIndex].text}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-600">
                  {testimonials[activeIndex].role}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-black text-black" />
                <span className="font-semibold">
                  {testimonials[activeIndex].rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-1 w-5 rounded-full transition-colors duration-300 ${
                index === activeIndex ? "bg-teal-600" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
" */
