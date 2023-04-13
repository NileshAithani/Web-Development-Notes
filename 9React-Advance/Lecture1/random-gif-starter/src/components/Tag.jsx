import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


export default function Tag() {

  const [tag, setTag] = useState('car');
  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false); 


  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);


  // }

  // useEffect(() => {
  //   fetchData();

  // }, [])

  const{gif, loading, fetchData} = useGif(tag);

  return (
    <div>
      <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
        <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
        {
          loading ? (<Spinner />) : (<img src={gif} width="450" />)
        }

        <div className="flex flex-col items-center gap-y-3 w-full">
          <input
            type="text"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            className="uppercase bg-[#F0F0F0] w-9/12 rounded-lg font-normal py-[5px] text-sm text-center"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setTag(event.target.value);
                fetchData(tag);
              }
            }}
          />


          <button className="w-10/12 bg-yellow-100 text-lg py-2 rounded-lg mb-[20px]"
            onClick={()=>fetchData(tag)}>
            Generate
          </button>
        </div>
        </div>
      </div>
      );
}
