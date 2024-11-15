import React from "react";
import Image from "../assets/vector-img.jpg";
const Newsletter = () => {
  return (
    <section>
      <div className=" container p">
        <div>
          <img className="block mx-auto " src={Image} alt="girl drops letter" />
        </div>
       
          <h1 className=" text-[18px] font-semibold text-center">
            suscribe to our Newsletter
          </h1>
          <div className="text-center">
          <p className="text-[14px] font-normal text-[#908F8F] ">
            Be the first to get exclusive offers <br />
            <span className="text-left">ands the latest news</span>
          </p>
          <form action="" method="post">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border border-[#B3B3B3] p-5 placeholder:text-[14px] placeholder:font-normal "
            />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
