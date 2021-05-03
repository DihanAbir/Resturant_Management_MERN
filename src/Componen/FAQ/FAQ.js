import React from "react";
import image1 from "../../Resources/Image/adult-blur-blurred-background-687824.png";
import image2 from "../../Resources/Image/chef-cook-food-33614.png";
import image3 from "../../Resources/Image/architecture-building-city-2047397.png";
import Faqimages from "../FaqImages/FaqImages";

const FaqAsk = () => {
  const faqImage = [image1, image2, image3];

  return (
    <div className="container headFont faq text-center primary-spacing">
      <h1>Why you choose us!</h1>
      <p className="text-center desc pt-2 pb-5 w-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam
        commodi officia expedita amet provident eligendi doloremque, voluptate
        recusandae mollitia!
      </p>
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
