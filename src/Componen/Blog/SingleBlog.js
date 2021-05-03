import React from "react";
import image from "../../Resources/Blog/1.jpg";
import showcaseImage from "../../Resources/Blog/anna-pelzer-IGfIGP5ONV0-unsplash.jpg";
import showcaseImage1 from "../../Resources/Blog/chad-montano-eeqbbemH9-c-unsplash.jpg";
import showcaseImage2 from "../../Resources/Blog/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg";
import showcaseImage3 from "../../Resources/Blog/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg";
import showcaseImage4 from "../../Resources/Blog/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import Profile from "../../Resources/Blog/jay-wennington-N_Y88TWmGwA-unsplash.jpg";

function SingleBlog() {
  return (
    <div className="blog">
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
      ></section>
      {/* blog */}
      <div className="mt-5 container">
        <b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lectus
          nunc. Suspendisse sagittis diam aliquet, interdum felis eget,
          fermentum mauris. Vivamus ipsum metus, dictum fermentum lobortis
          eleifend, eleifend non nibh. Integer fermentum accumsan metus. Nullam
          tristique interdum mollis. Praesent rutrum massa a lobortis interdum.
        </b>
        <div className="row py-3">
          <div className="col-4">
            <div className="img">
              <img className="img-fluid" src={showcaseImage4} alt="" />
            </div>
          </div>
          <div className="col-8 d-flex" style={{ alignItems: "center" }}>
            <p>
              Sed eu lectus nunc. Suspendisse sagittis diam aliquet, interdum
              felis eget, fermentum mauris. Vivamus ipsum metus, dictum
              fermentum lobortis eleifend, eleifend non nibh. Integer fermentum
              accumsan metus. Nullam tristique interdum mollis. Praesent rutrum
              massa a lobortis interdum. Sed eu lectus nunc. Suspendisse
              sagittis diam aliquet, interdum felis eget, fermentum mauris.
              Vivamus ipsum metus, dictum fermentum lobortis eleifend, eleifend
              non nibh. Integer fermentum accumsan metus. Nullam tristique
              interdum mollis. Praesent rutrum massa a lobortis interdum.
            </p>
          </div>
        </div>
        <br />
        <p>
          nunc ut iaculis congue, nulla ante porta dolor, vulputate mollis arcu
          quam sed est. Maecenas consectetur pretium mollis. Integer vitae
          facilisis justo, a eleifend orci. Mauris elit urna, malesuada sit amet
          varius non, rutrum ut sem. Phasellus posuere, nunc et pulvinar
          sollicitudin, massa ipsum egestas mauris, sit amet venenatis elit
          metus ut tellus. Phasellus tincidunt elit urna, quis egestas erat
          varius nec. Morbi ut neque leo. Morbi eget velit lacus. Donec sem sem,
          gravida at purus id, molestie dapibus dui. Etiam urna mi, ultricies ut
          nisl a, egestas fringilla mauris. Phasellus blandit dui eu est pretium
          congue. Nulla blandit sem eget orci sodales ultrices. Sed non euismod
          magna. Duis feugiat accumsan urna sit amet vulputate. Donec quis
          ullamcorper lectus. Suspendisse consectetur lacus lorem. Mauris
          tempus, leo quis vehicula aliquet, odio sem ultrices dui, a mattis
          magna quam quis lacus. Vivamus vitae sollicitudin ante.
        </p>
        <p>
          nunc ut iaculis congue, nulla ante porta dolor, vulputate mollis arcu
          quam sed est. Maecenas consectetur pretium mollis. Integer vitae
          facilisis justo, a eleifend orci. Mauris elit urna, malesuada sit amet
          varius non, rutrum ut sem. Phasellus posuere, nunc et pulvinar
          sollicitudin, massa ipsum egestas mauris, sit amet venenatis elit
          metus ut tellus. Phasellus tincidunt elit urna, quis egestas erat
          varius nec. Morbi ut neque leo. Morbi eget velit lacus. Donec sem sem,
          gravida at purus id, molestie dapibus dui. Etiam urna mi, ultricies ut
          nisl a, egestas fringilla mauris. Phasellus blandit dui eu est pretium
          congue. Nulla blandit sem eget orci sodales ultrices. Sed non euismod
          magna. Duis feugiat accumsan urna sit amet vulputate. Donec quis
          ullamcorper lectus. Suspendisse consectetur lacus lorem. Mauris
          tempus, leo quis vehicula aliquet, odio sem ultrices dui, a mattis
          magna quam quis lacus. Vivamus vitae sollicitudin ante.
        </p>
        <div className="row py-3">
          <div className="col-8 d-flex" style={{ alignItems: "center" }}>
            <p>
              nulla ante porta dolor, vulputate mollis arcu quam sed est.
              Maecenas consectetur pretium mollis. Integer vitae facilisis
              justo, a eleifend orci. Mauris elit urna, malesuada sit amet
              varius non, rutrum ut sem. Phasellus posuere, nunc et pulvinar
              sollicitudin, massa ipsum egestas mauris, sit amet venenatis elit
              metus ut tellus. Phasellus tincidunt elit urna, quis egestas erat
              varius nec. Morbi ut neque leo. Morbi eget velit lacus. Donec sem
              sem, gravida at purus id, molestie dapibus dui. Etiam urna mi,
              ultricies ut nisl a, egestas fringilla mauris. Phasellus blandit
              dui eu est pretium congue. Nulla blandit sem eget orci sodales
              ultrices. Sed non euismod magna. Duis feugiat accumsan urna sit
              amet vulputate. Donec quis ullamcorper lectus. Suspendisse
              consectetur lacus lorem. Mauris tempus, leo quis vehicula aliquet,
              odio sem ultrices dui, a mattis magna quam quis lacus. Vivamus
              vitae sollicitudin ante. Suspendisse sagittis diam aliquet,
              interdum felis eget, fermentum mauris. Vivamus ipsum metus, dictum
              fermentum lobortis eleifend, eleifend non nibh. Integer fermentum
              accumsan metus. Nullam tristique interdum mollis. Praesent rutrum
              massa a lobortis interdum.
            </p>
          </div>
          <div className="col-4">
            <div className="img">
              <img className="img-fluid" src={showcaseImage3} alt="" />
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-4">
            <div className="img">
              <img className="img-fluid" src={showcaseImage2} alt="" />
            </div>
          </div>
          <div className="col-8 d-flex" style={{ alignItems: "center" }}>
            <p>
              Sed eu lectus nunc. Suspendisse sagittis diam aliquet, interdum
              felis eget, fermentum mauris. Vivamus ipsum metus, dictum
              fermentum lobortis eleifend, eleifend non nibh. Integer fermentum
              accumsan metus. Nullam tristique interdum mollis. Praesent rutrum
              massa a lobortis interdum. Sed eu lectus nunc. Suspendisse
              sagittis diam aliquet, interdum felis eget, fermentum mauris.
              Vivamus ipsum metus, dictum fermentum lobortis eleifend, eleifend
              non nibh. Integer fermentum accumsan metus. Nullam tristique
              interdum mollis. Praesent rutrum massa a lobortis interdum.
            </p>
          </div>
        </div>
        <p>
          nunc ut iaculis congue, nulla ante porta dolor, vulputate mollis arcu
          quam sed est. Maecenas consectetur pretium mollis. Integer vitae
          facilisis justo, a eleifend orci. Mauris elit urna, malesuada sit amet
          varius non, rutrum ut sem. Phasellus posuere, nunc et pulvinar
          sollicitudin, massa ipsum egestas mauris, sit amet venenatis elit
          metus ut tellus. Phasellus tincidunt elit urna, quis egestas erat
          varius nec. Morbi ut neque leo. Morbi eget velit lacus. Donec sem sem,
          gravida at purus id, molestie dapibus dui. Etiam urna mi, ultricies ut
          nisl a, egestas fringilla mauris. Phasellus blandit dui eu est pretium
          congue. Nulla blandit sem eget orci sodales ultrices. Sed non euismod
          magna. Duis feugiat accumsan urna sit amet vulputate. Donec quis
          ullamcorper lectus. Suspendisse consectetur lacus lorem. Mauris
          tempus, leo quis vehicula aliquet, odio sem ultrices dui, a mattis
          magna quam quis lacus. Vivamus vitae sollicitudin ante.
        </p>
      </div>
      {/* blog */}

      <div className="text-center category my-5 p-4">
        <h1>Comment</h1>
      </div>

      <hr />
      {/* Blog SHowcase  */}
      <div className=" container-fluid blog-showcase ">
        <div className="row container m-auto">
          {/* ---------*********** */}
          <div className="col-md-6 mt-5">
            <div className="user">
              <div className="row">
                <div className="col-8">
                  <h2>Jannatul Naiem</h2>
                  <p>2, July, 2021</p>
                </div>
                <div className="col-4">
                  <div className="img">
                    <img className="img-fluid" src={Profile} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-md-6 mt-5  container">
            <div className="singleDesc  text-center">
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
              <p>
                Vivamus lorem purus, sollicitudin ut aliquet at, tincidunt eu
                risus. Sed congue scelerisque blandit. Aliquam sed semper velit,
                et mattis massa. Suspendisse interdum semper lacus nec egestas.
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="user">
              <div className="row">
                <div className="col-8">
                  <h2>Jannatul Naiem</h2>
                  <p>2, July, 2021</p>
                </div>
                <div className="col-4">
                  <div className="img">
                    <img className="img-fluid" src={Profile} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------*********** ---------*********** */}
          <div className="col-md-6 mt-5">
            <div className="user">
              <div className="row">
                <div className="col-8">
                  <h2>Jannatul Naiem</h2>
                  <p>2, July, 2021</p>
                </div>
                <div className="col-4">
                  <div className="img">
                    <img className="img-fluid" src={Profile} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5  container">
            <div className="singleDesc  text-center">
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
              <p>
                Morbi eleifend scelerisque tellus, Josepe Pikoloti sodales a.
                Mauris posuere, Silva Vargas ante in aliquet consequat, libero
                metus venenatis augue, ut aliquam sem purus eu eros.
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="user">
              <div className="row">
                <div className="col-8">
                  <h2>Jannatul Naiem</h2>
                  <p>2, July, 2021</p>
                </div>
                <div className="col-4">
                  <div className="img">
                    <img className="img-fluid" src={Profile} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------*********** ---------*********** */}
          <div className="col-md-6 mt-5">
            <div className="user">
              <div className="row">
                <div className="col-8">
                  <h2>Jannatul Naiem</h2>
                  <p>2, July, 2021</p>
                </div>
                <div className="col-4">
                  <div className="img">
                    <img className="img-fluid" src={Profile} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5  container">
            <div className="singleDesc  text-center">
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
        {/* <button className="btn btn-danger my-4 ">Load More</button> */}
      </div>

      <div className="text-center category my-5 p-4">
        <h1>Leave a Comment</h1>
      </div>
      <div className="m-5 text-center">
        <form className="form blogForm">
          <div className="row">
            <div className="col-6 border" style={{}}>
              <input type="text" placeholder="demo" name="mail" />
              <input type="text" placeholder="demo" name="comment" size="50" />
            </div>
            <div className="col-6 border" style={{}}>
              <input type="text" placeholder="demo" name="mail" />
              <div className="d-flex">
                <button className="btn btn-salmon" type="submit" value="Send">
                  Send
                </button>
                <button className="btn btn-salmon" type="reset" value="Reset">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Blog SHowcase  */}
    </div>
  );
}

export default SingleBlog;
