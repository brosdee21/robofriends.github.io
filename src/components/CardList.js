import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  
    return(
        <div>
            {
            robots.map((user, i) =>{
            //The essence of key prop key={i} is to make sure each child in a list have a unique key prop.
            //Note: The key prop should have something unique that doesn't change eg i in key = {i}
            return (
            <Card 
            key ={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>
            
        );
            })
            }
    </div>
    );
}

export default CardList;