import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {

    const navigation = useNavigate();
    function clickHandler(){
        //Move to about page
        navigation("/about");

    }
  return (
    <div>
    <div>This is Labs Page</div>
    <button onClick={clickHandler}>Move to About Page</button>

    </div>
    
  )
}

export default Labs