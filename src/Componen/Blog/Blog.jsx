import React from "react";
import "./Blog.scss";
import image from "../../Resources/Blog/1.jpg";
import showcaseImage from "../../Resources/Blog/anna-pelzer-IGfIGP5ONV0-unsplash.jpg";
import showcaseImage1 from "../../Resources/Blog/chad-montano-eeqbbemH9-c-unsplash.jpg";
import showcaseImage2 from "../../Resources/Blog/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg";
import showcaseImage3 from "../../Resources/Blog/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg";
import showcaseImage4 from "../../Resources/Blog/jay-wennington-N_Y88TWmGwA-unsplash.jpg";

function Blog() {
  return (
    <div className="blog text-center">
      <section
        className="banner testclass"
        style={{
          height: "100vh",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: "cover",
          position: "relative",
        }}
      >
        <main
          id="overlay"
          className="overFlow"
          style={{
            height: "100%",
            position: "absolute",
          }}
        >
          <div className="img container">
            <h1 className="BlodHead">Our Delicious Blog</h1>
            <span className="title"></span>
            <h4 className="desc">
              Suspendisse pellentesque ipsum non mauris rutrum mollis. Aliquam
              tristique dui et nunc iaculis, id accumsan nunc eleifend. Etiam
              ullamcorper risus vel mollis sagittis. Praesent id lobortis quam.
              Ut pretium nunc at arcu elementum molestie. Morbi euismod leo ut
              semper fringilla.
            </h4>
          </div>
        </main>
      </section>

      <div className="text-center category p-4">
        <h1>News</h1>
      </div>

      {/* Blog SHowcase  */}
      <div className=" container-fluid blog-showcase ">
        <div className="row">
          {/* ---------*********** */}
          <div className="col-md-6 mt-5">
            <div className="image">
              <img className="img-fluid" src={showcaseImage4} alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-5  container">
            <div className="singleDesc  text-center">
              <h3>23 | 05 | 2014</h3>
              <h3>Exquisite Flavours and Ingredients</h3>
              <span className="title"></span>
              <p>
                Pellentesque fringilla mauris id dolor ultrices elementum. In
                auctor odio neque, a convallis lacus eleifend in. Nunc
                hendrerit, est quis bibendum tempus, lectus libero ullamcorper
                purus, ac ultricies magna enim id eros.
              </p>
            </div>
          </div>
          {/* ---------*********** ---------*********** */}
          <div className="col-md-6 mt-5  container">
            <div className="singleDesc  text-center">
              <h3>12 | 05 | 2014</h3>
              <h3>Craftsmanship of Cooking and Tradition</h3>
              <span className="title"></span>
              <p>
                Vivamus lorem purus, sollicitudin ut aliquet at, tincidunt eu
                risus. Sed congue scelerisque blandit. Aliquam sed semper velit,
                et mattis massa. Suspendisse interdum semper lacus nec egestas.
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="image">
              <img className="img-fluid" src={showcaseImage} alt="" />
            </div>
          </div>
          {/* ---------*********** ---------*********** */}
          <div className="col-md-6 mt-5">
            <div className="image">
              <img className="img-fluid" src={showcaseImage1} alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-5  container">
            <div className="singleDesc  text-center">
              <h3>18 | 04 | 2014</h3>
              <h3>People are Everything</h3>
              <span className="title"></span>
              <p>
                Pellentesque fringilla mauris id dolor ultrices elementum. In
                auctor odio neque, a convallis lacus eleifend in. Nunc
                hendrerit, est quis bibendum tempus, lectus libero ullamcorper
                purus, ac ultricies magna enim id eros.
              </p>
            </div>
          </div>
          {/* ---------*********** ---------*********** */}
          <div className="col-md-6 mt-5  container">
            <div className="singleDesc  text-center">
              <h3>23 | 05 | 2014</h3>
              <h3>Exquisite Flavours and Ingredients</h3>
              <span className="title"></span>
              <p>
                Morbi eleifend scelerisque tellus, Josepe Pikoloti sodales a.
                Mauris posuere, Silva Vargas ante in aliquet consequat, libero
                metus venenatis augue, ut aliquam sem purus eu eros.
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="image">
              <img className="img-fluid" src={showcaseImage2} alt="" />
            </div>
          </div>
          {/* ---------*********** ---------*********** */}
          <div className="col-md-6 mt-5">
            <div className="image">
              <img className="img-fluid" src={showcaseImage3} alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-5  container">
            <div className="singleDesc  text-center">
              <h3>23 | 05 | 2014</h3>
              <h3>Exquisite Flavours and Ingredients</h3>
              <span className="title"></span>
              <p>
                Pellentesque fringilla mauris id dolor ultrices elementum. In
                auctor odio neque, a convallis lacus eleifend in. Nunc
                hendrerit, est quis bibendum tempus, lectus libero ullamcorper
                purus, ac ultricies magna enim id eros.
              </p>
            </div>
          </div>
          {/* ---------*********** */}
        </div>
        <button className="btn btn-danger my-4 ">Load More</button>
      </div>
      {/* Blog SHowcase  */}
    </div>
  );
}

export default Blog;
