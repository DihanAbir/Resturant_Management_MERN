import React from "react";
import logo from "../../Resources/logo2.png";
import './Footer.scss';


const Footer = () => {
    const footeritems = [ 'About Onion food', 'Read Our Blog', 'SignUp to delivery', 'Add Your resturant' ]

  return (
    <div className="container-fluid" style={{backgroundColor: '#000'}}>
      <div className="row py-4 container">
        <div className="col-2 offset-col-4">
          <div className="img">
            <img className="img-fluid" src={logo} alt="" />
          </div>
        </div>
        <div className=" offset-4 col-3">
            <ul>
                {
                    footeritems.map((item, index) => <li className='list-unstyled '>{item}</li>)
                }
            </ul>
        </div>
        <div className=" col-3">
            <ul>
                {
                    footeritems.map((item, index) => <li className='list-unstyled '>{item}</li>)
                }
            </ul>
        </div>
      </div>
      <div className="row py-4">
          <div className="col-4"><p>Copyright @2020 Onion red</p></div>
          <div className="offset-4 col-4">
              <ul className=' d-flex'>
                  <li className ='list-unstyled ml-3 text-danger'>Privacy policy</li>
                  <li className ='list-unstyled ml-3 text-danger'>Tearms of Use</li>
                  <li className ='list-unstyled ml-3 text-danger'>Pricing</li>
              </ul>
          </div>
      </div>
    </div>
  );
};

export default Footer;
