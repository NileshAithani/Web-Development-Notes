import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigation = useNavigate();

    function clickHandler(){
        //Move to labs
        navigation("/labs")

    }
    function backHandler(){
        navigation(-1);
    }
  return (
    <div>
    <div>
        This is About Page
    </div>

    <button onClick={clickHandler}>Move to Labs Page</button>

    <button onClick={backHandler}>Go Back</button>

    </div>
    
  )
}

export default About