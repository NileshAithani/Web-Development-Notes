import  React,{ useEffect, useState } from "react";
import axios from 'axios';



const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

  const[gif,setGif]=useState('');


  async function fetchData(){
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    console.log(imageSource);
     

  }

  useEffect( ()=>{
    fetchData();

  },[] )
  


  
  function clickHandler(){
    fetchData();
    
  }


  return(
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
    <h1 className=" mt-[15px] text-2xl underline uppercase font-bold"> A Random Gif</h1>
    <img src={gif} width="450"/>
    <button className="w-10/12 bg-yellow-100 text-lg py-2 rounded-lg mb-20px]"
          onClick={clickHandler}>
      Generate
    </button>
    </div>
  );
}
