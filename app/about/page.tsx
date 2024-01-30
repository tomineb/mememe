"use client";

import React, { useState } from "react";
import Me from "../components/me";
import Image from "next/image";

const About : React.FC = () =>  {
    const [selectedContent, setSelectedContent] = useState<string | null>()
    const showContent = (contentId: string) => {
        setSelectedContent(contentId);
    }

    return (
    <div className="flex flex-row  pt-28">
    <div className=" w-1/2  pl-28  text-base ">
        <main className="flex flex-col">
            <a onClick={() => showContent("content3")} className=" hover:text-black cursor-default">Tomine Berge</a>
            <h1 className=" text-neutral-400"> Software Designer </h1> <br/>
        </main>
        <div className="text-neutral-400 flex flex-col">     
            <span onClick={() => showContent("content1")} className=" hover:text-black cursor-default">About</span>
            <a href="https://www.linkedin.com/in/tomine-berge/" className=" hover:text-black cursor-default"> Linkedin </a>
            <a href="https://github.com/tomineb" className=" hover:text-black cursor-default"> Github </a>
            <a href="" className=" hover:text-black cursor-default"> Medium (?)</a>
        </div>
    </div>
    <div className=" w-3/4 pl-1/4 ">
        {selectedContent ? (
            <div id={selectedContent} className="m:px-0 flex-row justify-end  sm:pt-10 w-1/2 text-neutral-800 text-sm">
                {selectedContent === "content1" && (
                <Me />
            )}
            {selectedContent === "content3" && (
                 <div>
                 <figure>
                   <Image 
                     src={`/images/tomine.jpg`}
                     alt={`Tomine`}
                     width="240"
                     height="38"
                   />
                 </figure>
               </div>
            )}
            </div>
        ): (
            <div>
            <figure>
              <Image 
                src={`/images/tomine.jpg`}
                alt={`Tomine`}
                width="240"
                height="38"
              />
            </figure>
          </div>
        )}
    </div>
    </div>
  );
}
export default About