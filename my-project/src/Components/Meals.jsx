import React from "react";
import { AppContext } from "../context";
import { AiOutlineLike } from "react-icons/ai";

function Meals(){

    let {meal,load,setModel,addFavMeals,favourite} = React.useContext(AppContext)

    let hadelSetModel = (mealId)=>{
        setModel(mealId)
    }
  
    return(
        <div className="meal-container">
            <div className="container-width">
                
            {
                    load === true ? <h1>Loading...</h1> : 
                    meal === false ? <h1>Network Error!</h1> :
                    meal < 1 ? <h1>Sorry! Your Meal Not Here...</h1> :
                    meal.map(items => {
                        return <div className="meal-box" key={items.idMeal}>
                                    <div className="box-top">
                                        <img src={items.strMealThumb} alt="mealimg" onClick={() => hadelSetModel(items.idMeal)}/>
                                    </div>
                                    <div className="box-bottom">
                                        <p>{items.strMeal}</p>
                                        <button onClick={() => addFavMeals(items.idMeal)}><AiOutlineLike/></button>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
    )
}
export default Meals;