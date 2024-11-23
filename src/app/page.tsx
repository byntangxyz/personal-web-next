"use client";

import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Meteors from "@/components/ui/meteors";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Home() {
  const el = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Student",
        "Tech Enthusiast",
        "Photographer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="star pt-16 pb-32 relative w-full h-screen overflow-hidden bg-gradient-to-b from-dark to-blue-950"
        ref={containerRef}
      >
        <Meteors />

        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold md:text-lg lg:text-xl text-white">
                Hello World! Im
                <span className="text-secondary text-4xl block lg:text-6xl">
                  byntang<span className="rgb">xyz</span>
                </span>
              </h1>
              <span
                id="slogan"
                ref={el}
                className="rgb text-3xl font-bold lg:text-5xl"
              ></span>
              <p className="font-medium text-slate-500 mb-10 md:text-lg lg:text-xl">
                Im just an ordinary human, nothing special about me!
              </p>
              <Link href={"/about"}><RainbowButton>About Me</RainbowButton></Link>
              <Link className="ml-4" href={"/about"}><RainbowButton>View My Blog</RainbowButton></Link>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-9">
                <div>
                  <Image
                    src="/pfp.jpg"
                    alt="photo-profile"
                    width={280}
                    height={280}
                    className="max-w-full mx-auto rounded-lg relative bg-white shadow-2xl p-2 pb-6 lg:w-[400px]"
                  />
                  <p className="text-center text-slate-500">-Bintang Maulana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
