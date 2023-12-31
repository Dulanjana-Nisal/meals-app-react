import React from "react";

let AppContext = React.createContext();

function Context({children}){

    let [meal,setMeal] = React.useState([])
    let [load,setLoad] = React.useState(false)
    let [search,setSearch] = React.useState('')
    let [model,setModel] = React.useState(false)
    let [favourite,setFavourite] = React.useState(JSON.parse(localStorage.getItem('favourite')) || [])

    let mealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    let randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    let getUrl = async (url) => {
        setLoad(true)
        try{    
            let responce = await fetch(url);
            let data = await responce.json();
            setMeal(data.meals)
        }catch(error){
            setMeal(false)
        }
        setLoad(false)
    }

    let genarateRandomMeal = ()=>{
        getUrl(randomMealUrl)
    }

    let addFavMeals = (mealId)=>{
        let meals = meal.find(items => items.idMeal === mealId)
        let ifFavMeal = favourite.find(items => items.idMeal === mealId)
        if(ifFavMeal !== meals){
            setFavourite([...favourite,meals])
        }
    }

    let removeFavMeals = (mealId) => {
        let ifFavMeal = favourite.filter(items => items.idMeal !== mealId)
        setFavourite(ifFavMeal)
    }

    React.useEffect(() => {
        getUrl(`${mealUrl}${search}`)
    }, [search])

    React.useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(favourite))
    },[favourite])
    

    return(
        <AppContext.Provider value={{meal,load,setSearch,genarateRandomMeal,model,setModel,favourite,addFavMeals,removeFavMeals}}>{children}</AppContext.Provider>
    )
}

export {AppContext,Context}