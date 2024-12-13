import React from "react";
import news from "../assets/news.png";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";

const News = () => {
  return (
    <>
      <div>
        <p className=" text-center text-5xl font-semibold mb-4 mt-14">
          News & Updates
        </p>

        {/* 1st */}
        <div className="news_section container mt-14">
          <div className="news_section_card card w-96 text-center rounded-xl p-3">
            <img src={news} alt="" className=" rounded-xl" />
            <p className=" text-left mt-2 opacity-75">12 jun 2024</p>
            <h2 className="font-bold my-3">Why Choose Our System?</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              molestiae dolorem tempora maiores voluptatum in minima aliquid
              architecto sapiente eius deserunt dignissimos tenetur, nulla, a
              sunt quis molestias doloremque distinctio quam, consectetur modi.
              Consequatur, magni consequuntur. Quia blanditiis nihil corrupti,
              sequi est adipisci, eligendi vel unde commodi facere, molestias
              eveniet.
            </p>
            <button className="button btn border-none">More Details</button>
          </div>

          {/* 2nd */}
          <div className="news_section_card card w-96  text-center rounded-xl p-3">
            <img src={news1} alt="" className=" rounded-xl" />
            <p className=" text-left mt-2 opacity-75">12 jun 2024</p>
            <h2 className="font-bold my-3">
              Revolutionizing Patient Care Today
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              a molestiae nisi impedit quaerat, non quibusdam libero unde
              blanditiis obcaecati. Sunt, eius! Recusandae doloribus corrupti
              sunt culpa in, laboriosam, id ipsa officiis sequi adipisci dolore?
              Magni blanditiis omnis nostrum id voluptatempquam aperiam impedit,
              tempore asperiores est obcaecati voluptate debitis!
            </p>
            <button className="button btn border-none">More Details</button>
          </div>

          {/* 3rd */}
          <div className="news_section_card card w-96  text-center rounded-xl p-3">
            <img src={news2} alt="" className=" rounded-xl" />
            <p className=" text-left mt-2 opacity-75">12 jun 2024</p>
            <h2 className=" font-bold my-3">
              The Future of Healthcare Technology
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              a molestiae nisi impedit quaerat, non quibusdam libero unde
              blanditiis obcaecati. Sunt, eius! Recusandae doloribus corrupti
              sunt culpa in, laboriosam, id ipsa officiis sequi adipisci dolore?
              Magni blanditiis omnis nostrum id voluptatem, quam aperiam
              impedit, tempore asperiores est obcaecati voluptate debitis!
            </p>
            <button className=" btn button border-none">More Details</button>
          </div>

          {/* 4th */}
          <div className="news_section_card card w-96  text-center rounded-xl p-3">
            <img src={news2} alt="" className=" rounded-xl" />
            <p className=" text-left mt-2 opacity-75">12 jun 2024</p>
            <h2 className=" font-bold my-3">Top 5 Hospital Management Tips</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              a molestiae nisi impedit quaerat, non quibusdam libero unde
              blanditiis obcaecati. Sunt, eius! Recusandae doloribus corrupti
              sunt culpa in, laboriosam, id ipsa officiis sequi adipisci dolore?
              Magni blanditiis omnis nostrum id voluptatem, quam aperiam
              impedit, tempore asperiores est obcaecati voluptate debitis!
            </p>
            <button className=" btn button border-none">More Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
