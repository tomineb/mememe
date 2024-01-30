import React from "react";

const Me = () => {
  return (
      <div className=" flex flex-row justify-evenly text-sm">
          <div>
            <p>
                Hi!
            </p> 
            <br/>
          <p>
            {" "}
            My name is Tomine Berge and I just turned 23 :) I like
            minimalistic design and crafting stuff for the web. Currently based in Trondheim, where I am
            finishing my bachelors degree. {" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            I work part time as a fullstack developer for the company Electronic Chart
            Centre. My role mainly consists of development with React, Vue and Java,
            including a lot of work with REST Api. I also do web - and interface design with Figma. 
          </p>{" "}
          <br />
          <p>
            {" "}
            I am really interested in all things visual, and currently I am 
            exploring the different instances of the Adobe Creative Cloud and Blender. 
          </p>{" "}
          <br />
        </div>
        </div>
  );
};

export default Me;