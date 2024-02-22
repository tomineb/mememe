"use client";

import React, { useState } from "react";
import Me from "../components/me";
import Image from "next/image";

const About: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<string | null>();
  const showContent = (contentId: string) => {
    setSelectedContent(contentId);
  };

  return (
    <div className="flex flex-col sm:flex-row pt-28 lg:px-28">
      <div className="w-full sm:w-1/2 px-4 sm:px-0">
        <main className="flex flex-col px-28">
          <a
            onClick={() => showContent("content3")}
            className="hover:text-black cursor-pointer"
          >
            Tomine Berge
          </a>
          <h1 className="text-neutral-400">Software Designer</h1> <br />
        </main>
        <div className="text-neutral-400 flex flex-col px-28">
          <span
            onClick={() => showContent("content1")}
            className="hover:text-black cursor-pointer"
          >
            About
          </span>
          <a
            href="https://www.linkedin.com/in/tomine-berge/"
            className="hover:text-black cursor-pointer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/tomineb"
            className="hover:text-black cursor-pointer"
          >
            Github
          </a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 px-28">
        {selectedContent ? (
          <div
            id={selectedContent}
            className="px-4 sm:px-0 pt-10 text-neutral-800 text-sm"
          >
            {selectedContent === "content1" && <Me />}
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
        ) : (
          <div>
            <figure>
              <Image
                src={`/images/tomine.jpg`}
                alt={`Tomine`}
                width="240"
                height="38"
                className="w-auto sm:w-1/2"
              />
            </figure>
          </div>
        )}
      </div>
    </div>
  );
};
export default About;
