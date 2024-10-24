import React from "react";
import Nav from "./Nav";
// import downloadImage from "../assets/download.png"; // Import from assets folder
import downloadImage from "../assets/flower.png"; // Import from assets folder

const Home = () => {
  return (
    <section className="w-full min-h-[100vh]">
      <Nav />
      <section className="w-full px-[15vw] py-[20vw]">
        <h6 className="font-lighter px-2">let's</h6>
        <div className="headings flex justify-between text-[7vw] font-semibold text-zinc-700">
          <h1 className="leading-none tracking-tighter">bloom</h1>
          <h1 className="leading-none tracking-tighter">with</h1>
          <h1 className="leading-none tracking-tighter">grace</h1>
          {/* <img
            className="w-80 absolute right-28 rotate-45"
            src={downloadImage}
            alt="Download"
          /> */}
          {/* <img
            className="w-80 absolute right-28 bottom-44 rotate-45"
            src={downloadImage}
            alt="Download"
          /> */}
        </div>
      </section>
    </section>
  );
};

export default Home;
