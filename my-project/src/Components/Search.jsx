import React from "react";
import { AppContext } from "../context";

function Search(){

    let {setSearch,genarateRandomMeal} = React.useContext(AppContext)

    let [searchText,setSearchText] = React.useState('')

    let hadelSearchValue = (event) => {
        setSearchText(event.target.value)
    }

    let hadelSearch = (event)=>{
        event.preventDefault();
        setSearch(searchText)
        setSearchText('')
    }

    return(
        <div className="search-container">
            <div className="container-width">
                <div className="search-box">
                    <form onSubmit={hadelSearch}>
                        <input type="text" placeholder="Serch Your Meal" onChange={hadelSearchValue} value={searchText}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className="random-search">
                    <button onClick={genarateRandomMeal}>Random Meal</button>
                </div>
            </div>
        </div>
    )
}
export default Search;