/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/imagesrc2.jpg";

const imageAltText = "A poetic scenery behind the piano";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A piece of wave",
    description:
      "Within a digital fabrication workshop, I embarked on an artistic endeavor where Rhino and ABB Robotics' robotic arm converged to shape a singular piece of a wave. Harnessing their combined capabilities, I brought this sculpture to life. As a final touch, I projected mesmerizing graphics onto the formed structure, transforming it into a canvas for visual exploration.",
    url: "https://tealchoi.com/a-piece-of-wave",
  },
  {
    title: "Trace memory circuitry",
    description:
      "Trace is an interactive artwork that navigates the elusive realm of evasive recollections and delves into the enigmatic journey of tracing déjà vu. As spectators engage with the piece, they become active participants, embarking on a captivating exploration of memory's elusive echoes.",
    url: "https://tealchoi.com/trace-memory-circuitry",
  },
  {
    title: "Summer Breeze",
    description:
      "Embracing the realm of generative art, my creative endeavors unfold as a harmonious fusion of real-time audio capturing and the intricate utilization of data, culminating in visually captivating compositions. Drawing inspiration from the ethereal movements found within the fluidity of sedimentary deposits, my works become a testament to the organic flow and captivating essence of nature.",
    url: "https://tealchoi.com/summer-breeze",
  },
  {
    title: "Rave Geometry",
    description:
      "Leveraging the capabilities of virtual cameras, I meticulously recreated the interviews, incorporating diverse perspectives to breathe life into the digital realm.",
    url: "https://tealchoi.com/rave-geometry",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
