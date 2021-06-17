import React from "react";
import Carousel from "react-spring-3d-carousel";

import Faqimages from "../FaqImages/FaqImages";
import image2 from "../../Resources/Image/chef-cook-food-33614.png";
import image3 from "../../Resources/Image/architecture-building-city-2047397.png";
import image1 from "../../Resources/Image/adult-blur-blurred-background-687824.png";

const slides = [
  {
    key: "dsfdf",
    content: <img src={image2} alt="1" />,
  },
  {
    key: "sdfdfsdf",
    content: <img src={image2} alt="2" />,
  },
  {
    key: "dgdggsd",
    content: <img src={image2} alt="3" />,
  },
  {
    key: "fdgdfgdfg",
    content: <img src={image2} alt="4" />,
  },
  {
    key: "dfgdfgdfg",
    content: <img src={image2} alt="5" />,
  },
  {
    key: "dfgdfgdegdsfgfg",
    content: <img src={image2} alt="6" />,
  },
];

const FaqAsk = () => {
  const faqImage = [image1, image2, image3];

  return (
    <div className="headFont container faq text-center primary-spacing">
      <h1 className="headerTitle">Why you choose us!</h1>
      <p className="text-center desc pt-2 pb-5 w-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam
        commodi officia expedita amet provident eligendi doloremque, voluptate
        recusandae mollitia!
      </p>
      <Carousel slides={slides} />
      <div className="row">
        {/* <div className="col-4"> */}
        {faqImage.map((image) => (
          <Faqimages image={image}></Faqimages>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default FaqAsk;
