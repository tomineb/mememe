"use client";

import React, { useState } from "react";

const About: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<string | null>();
  const showContent = (contentId: string) => {
    setSelectedContent(contentId);
  };

  return (
    <div className="pt-28 lg:px-28 ">
      <div className="w-full px-4 sm:px-0 text-xl">
        <main className="flex flex-col lg:px-28 px-16">
          <a>Tomine Berge</a>
          <h1>Software developer & creative</h1>
          <div className="mt-2 mb-2"></div>
          <span>Currently at Seven Peaks Software, BKK</span>
          <span>Previously at Electronic Chart Centre, SVG</span>{" "}
          <div className="mt-2 mb-2"></div>
        </main>
        <div className="text-neutral-400 flex flex-col lg:px-28 px-16">
          <a
            href="https://www.linkedin.com/in/tomine-berge/"
            className="hover:text-black cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tomineb"
            className="hover:text-black cursor-pointer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
