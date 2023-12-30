import Image from "next/image";
import React from "react";
import study from "../../public/study.jpg";
import "../../styles/hero.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <div className="hero1">
          <h1>
            <span>Welcome</span>
            <span>To</span> <span></span>Studify.
          </h1>
          <p>
          </p>
          <p>I am Thinking Maybe You And I Could Partner Up..</p>
          <p>You , You Wanna Study. ?</p>
          <div className="btns">
            <button>
              <Link href={"/search"}>Search Classes.</Link>
            </button>
            <button>
              <Link href={"/skyler"}>Explore More.</Link>
            </button>
          </div>
        </div>
        <div className="hero2">
          <Image src={study} alt="hello" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
