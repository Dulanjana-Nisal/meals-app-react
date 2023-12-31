import React from "react";
import { AppContext } from "../context";

function Favourite(){
    
    let {favourite,removeFavMeals,setModel} = React.useContext(AppContext)

    let hadelModel =(mealID)=>{setModel(mealID)}

    return(
        <div className="fav-container">
            <div className="container-width">
                <div className="fav-top">
                    <h1>Your Meals</h1>
                </div>
                <div className="fav-bottom">
                    {
                        favourite.map(items => {
                            return <div className="meal-box" key={items.idMeal}>
                                        <img src={items.strMealThumb} alt="favimg" onClick={() => hadelModel(items.idMeal)}/>
                                        <button onClick={() => removeFavMeals(items.idMeal)}>Remove</button>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Favourite;