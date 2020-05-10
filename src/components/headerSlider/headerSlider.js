import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Button } from "semantic-ui-react";

const slides = [
  {
    id: 1,
    title: "Discover. Build. Grow.",
    description: "Turn an idea into a reality",
    button: "LET'S GROW TOGETHER",
    image:
      "https://www.razorwebs.com/wp-content/uploads/2020/04/writing-codes-and-typing-data-code-technology-programmer-cooperating-working-on-web-site-project-in-a_t20_pRVd2Y.jpg",
  },
  {
    id: 2,
    title: "Free Lightroom Presets now available.",
    description: "10 Professional photo presets for free download",
    button: "DOWNLOAD NOW",
    image:
      "https://www.razorwebs.com/wp-content/uploads/2019/08/photo-1486607303850-bc051a4ffad4.jpeg",
  },
  {
    id: 2,
    title: "New React.js tutorials coming soon...",
    description: "Learn how to us React.JS in your next node project",
    button: "LEARN MORE",
    image:
      "https://www.razorwebs.com/wp-content/uploads/2019/08/photo-1486607303850-bc051a4ffad4.jpeg",
  },
];

export default class headerSlider extends Component {
  //state = {};

  state = {
    slides,
  };

  render() {
    console.log(this.state.slides);

    return (
      <div className="sliderContainer">
        <Slider autoplay={4300} duration={1300} infinite>
          {this.state.slides.map((item, index) => (
            <div
              key={index}
              style={{
                background: `url('${item.image}') no-repeat center center`,
                backgroundSize: "cover",
                height: "100vh",
              }}
            >
              <div className="center">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button>{item.button}</Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
