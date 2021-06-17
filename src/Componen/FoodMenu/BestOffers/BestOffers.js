import React from "react";
import "./BestOffers.scss";

const bestDish = [
  {
    image:
      "https://media.istockphoto.com/photos/kulfi-serving-in-hand-picture-id1066916042?b=1&k=6&m=1066916042&s=170667a&w=0&h=K2Z3CR4yFITicl_jK6m5juJo4YiYiwPz7FcdhyREWTQ=",
    title: "Kulfi",
  },
  {
    image:
      "https://media.istockphoto.com/photos/seekh-kabab5-picture-id501266025?b=1&k=6&m=501266025&s=170667a&w=0&h=M-CB1Y0hqyUyPRaIVW75HiGBgaeg4lMvxwzbPbPiJns=",
    title: "Tawa Jheenga",
  },
  {
    image:
      "https://media.istockphoto.com/photos/shrimp-street-tacos-picture-id1200136076?b=1&k=6&m=1200136076&s=170667a&w=0&h=fhLFL-P66KifMk7iy51zn9qLt9XxhEHfbHyw2FtbVqs=",
    title: "Seekh Kebab",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579888944880-d98341245702?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNlZWtoJTIwa2ViYWJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Boti",
  },
];
function BestOffers() {
  return (
    <div className="container pb-5 mb-5">
      <h1 className="headerTitle">Best offers</h1>
      <div className="row">
        {bestDish.map((dish) => (
          <div className="bestOfferCard col-lg-3 col-sm-6 col-12 col-md-3">
            <div className="mainDiv">
              <div className="img">
                <img className="img-fluid" src={dish.image} alt={dish.title} />
              </div>
              <div className="py-3 details">
                <h5>{dish.title}</h5>
                <span className="underline"></span>
                <div className="d-flex px-3 justify-content-around price">
                  <h6
                    style={{ color: "#bdbdbd", textDecoration: "line-through" }}
                  >
                    $25
                  </h6>
                  <h6>$21</h6>
                </div>
                <button className="material-bubble">Add To Cart</button>
                <div class="ribbon">
                  <span class="ribbon1">
                    <span>OFF 10%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestOffers;
