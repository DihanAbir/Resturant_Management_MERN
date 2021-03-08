import React, { useEffect, useState } from 'react';
import { itemsdata } from '../../Resource/Resource';
import './FoodMenu.scss';
import SingleFood from './SingleFood/SingleFood';




const FoodMenu = () => {
    // States 
    const [selectedFood, setSelectedFood ] = useState('shokal')
    const [selectedFoodItems, setSelectedFoodItems ] = useState([])

    // Custome functions 
    const changeFoodMenuHandler = (e) => {
        const value = e.target.value
        setSelectedFood(value)
    }
    const FilterdFoodItems = itemsdata.filter(item => item.category === selectedFood)
    
    useEffect(()=>{
        setSelectedFoodItems(FilterdFoodItems)
        
    },[selectedFood])

    return (
            <div className="buttonSection container mt-4 text-center">
                <button className="btn btn-danger" onClick={changeFoodMenuHandler} value="dupur" >Dupur</button>
                <button className="btn btn-danger mx-3"  onClick={changeFoodMenuHandler}  value="shokal" >Shokal</button>
                <button className="btn btn-danger mx-3"  onClick={changeFoodMenuHandler}  value="bikal">Bikal</button>

        	    <div className="row mt-5">
                    {
                        selectedFoodItems.map(item => <SingleFood index={item.index} item={item}></SingleFood> )
                    }
                </div>

            </div>
            
    );
};

export default FoodMenu;