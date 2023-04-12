import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center">
      <h1 className="bg-white  rounded-lg absolute w-11/12 text-center font-bold text-4xl  py-2 top-[40px]  ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center absolute top-[150px] ">
        <Random/>
        <Tag/>
      </div>
    </div>
    
  );
}
