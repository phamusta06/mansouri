
import cd from "../../assets/photo_2023-08-06_01-56-58.jpg"
import ActionAreaCard from "../../componants/cards/Card";


const Portfolio = () => {
  return (
    <>
      <div className="w-full bg-slate-800 text-white flex flex-col py-4 items-center min-h-screen px-3 ">
        <div className="flex space-x-2 -space-y-1">
          <h4 className="text-3xl">My </h4>
          <h3 className="text-4xl font-extrabold">Project</h3>
        </div>
        <dir>
            <ul className="flex space-x-7">
                <li><a href="">ALL</a> </li>
                <li><a href="">Marketing</a></li>
                <li><a href="">Foods</a></li>
                
            </ul>

        </dir>
       <div className="flex items-center   w-full justify-center flex-col sm:flex-row  flex-wrap ">
       <ActionAreaCard img={cd} title="Square Box Mockup" com="marketing"/>
       <ActionAreaCard img={cd} title="Square Box Mockup" com="marketing"/>
    
    
      
     

       </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default Portfolio;
