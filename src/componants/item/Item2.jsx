import { NavLink } from "react-router-dom";

const item2 = (props) => {
  return (
    <>
      <>
        <div className=" bg-zinc-700 bg-opacity-80 p-3 rounded-xl my-4 text-center  md:w-1/4 md:h-1/4 flex items-center flex-col m-5 ">
          <div className="bg-lime-700 opacity-40 text-center flex items-center  justify-center w-24 h-24 md:w-32 md:h-32 mx-20 my-3 rounded-full">
            <img src={props.img} alt="" className="w-2/3 h-2/3"/>
          </div>
          <h1 className="mb-4 text-gray-400 text-xl">{props.title} </h1>
          <h1 className="mb-4">{props.content} ...</h1>
          <NavLink className="hover:space-x-6 space-x-2 transition-all duration-1000 flex">
            <p className="text-lime-800">Learn More    </p>
            <p className="font-bold text-lime-800">{">"}</p>

       
            
          </NavLink>
          <h4></h4>
        </div>
      </>
    </>
  );
};

export default item2;
