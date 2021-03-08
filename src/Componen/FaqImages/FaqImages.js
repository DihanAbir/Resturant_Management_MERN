import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cup } from '../../Icons/Icons';
import './FaqImage.scss';

const Faqimages = ({image}) => {
    return (
        <div className="col-4">
                    <div className="img">
                        <img src={image} className="img-fluid" alt="prepared male "/>
                    </div>
                    <div className="row  mt-3">
                        <div className="col-2">
                            <div className="icon">
                                <i><FontAwesomeIcon icon={cup} /></i>
                            </div>
                        </div>
                        <div className="col-10">
                            <b>fast dalivery</b>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, in? Nam itaque omnis adipisci iure?</p>
                            <div className="seeMore d-flex">
                                <p>See more</p>
                                <i className='ml-1'><FontAwesomeIcon icon={cup} /></i>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Faqimages;