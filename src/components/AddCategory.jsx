import React from "react"
import { useState } from "react"

export const AddCategory = ({onNewCategory}) =>{
   
    
    const [inputValue, setInputValue] = useState('')
    //console.log(onNewCategory)

    const onInputChange =({target})=>{
        //const onInputChange =(event)=>{
        //console.log(target.value)        
        setInputValue(target.value)
       
        //  setInputValue(event.target.value )
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
              
        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
       
        setInputValue('');
    }

    return(
        <>
        <form onSubmit={(event)=>onSubmit(event)}>
             <input
                type="text"
                placeholder="Search Gifs"
                value={inputValue}
                onChange={(event)=>onInputChange(event)}
            />
        </form>
            
        </>
    )
}