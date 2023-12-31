import React from "react";
import { AppContext } from "../context";

function Model(){

    let {setModel,meal,model} = React.useContext(AppContext)

    let hadelSetModel =()=>{
        setModel(false)
    }

    return(
        <div className="model-container">
            {
                meal.map(items => {
                   return items.idMeal === model ? <div className="model-box" key={items.idMeal}>
                                                <div className="box-top">
                                                    <img src={items.strMealThumb} alt="modelimg" />
                                                </div>
                                                <div className="box-bottom">
                                                    <h2>{items.strMeal}</h2>
                                                    <p>{items.strInstructions}</p>
                                                    <a href={items.strYoutube} target="blank">Whatch on Youtube</a><br/>
                                                    <button onClick={hadelSetModel}>Close</button>
                                                </div>
                                            </div>: ''
                })
            }
            
        </div>
    )
}
export default Model;