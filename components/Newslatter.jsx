import React from "react";
import Illustration from "./Illustration";
import ListProduct from "./ListProduct";
import CheckEmail from "./CheckEmail";
import list from "../data/Data.js";

const Newslatter = ( { SubmitButtonProp } ) => {
  return (
    <main className="flex justify-center items-center rounded-lg lg:p-7">
      <section className="lg:p-12 lg:flex lg:flex-row-reverse bg-white rounded-3xl">
        <div className="lg:self-end flex justify-center">
          <Illustration />
        </div>

        <div className="lg:flex lg:flex-col lg:justify-center p-6 lg:w-[27rem]">
          <h1 className="text-[#262533] text-5xl font-bold mt-3 mb-3">
            Stay updated!
          </h1>
          <p className="text-[#262533] mb-3">
            join 60.000+ product managers receiving monthly updates on:
          </p>
          <div>
            {list.map((item) => (
              <ListProduct key={item.id} list={item.paragraphs} />
            ))}
          </div>
          <CheckEmail SubmitButtonProp={SubmitButtonProp}/>
        </div>
      </section>
    </main>
  );
};

export default Newslatter;
