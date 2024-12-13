import React from "react";

const Testinomials = () => {
  return (
    <>
      <div className="carousel">
        <div id="slide1" className="carousel-item relative w-full">
          <div className=" border-2 border-indigo-500/100  text-center p-5 rounded-lg m-auto">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className=" my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              nihil delectus voluptatibus cumque, ab qui numquam minus vitae
              aliquam quia.
            </p>
            <p className="text-lg font-semibold">John Deo1</p>
            <p className=" text-sm">Digital Marketing</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className=" border-2 border-indigo-500/100  text-center p-5 rounded-lg m-auto">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className=" my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              nihil delectus voluptatibus cumque, ab qui numquam minus vitae
              aliquam quia.
            </p>
            <p className="text-lg font-semibold">John Deo2</p>
            <p className=" text-sm">Digital Marketing</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className=" border-2 border-indigo-500/100  text-center p-5 rounded-lg m-auto">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className=" my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              nihil delectus voluptatibus cumque, ab qui numquam minus vitae
              aliquam quia.
            </p>
            <p className="text-lg font-semibold">John Deo3</p>
            <p className=" text-sm">Digital Marketing</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className=" border-2 border-indigo-500/100  text-center p-5 rounded-lg m-auto">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className=" my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              nihil delectus voluptatibus cumque, ab qui numquam minus vitae
              aliquam quia.
            </p>
            <p className="text-lg font-semibold">John Deo4</p>
            <p className=" text-sm">Digital Marketing</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testinomials;
