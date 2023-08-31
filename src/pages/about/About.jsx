import "./about.css";
import img from "../../assets/face3.png";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { HashLink as Link} from "react-router-hash-link";


const About = () => {
  return (
    <>
      <div id="about"  className=" w-full bg-slate-800 min:h-screen flex p-6  space-x-3 justify-center text-white flex-col md:flex-row pt-8">
        <div className="md:w-1/4 md:h-1/4">
          <img
            src={img}
            alt=""
            className="profilImg md:rounded-full my-6 opacity-60 md:my-28 md:w-96 md:h-60 lg:h-72 lg:my-20  rounded-md  cursor-pointer transition-all  duration-1000 "
          />
        </div>
        <div className="md:w-1/3 h-full text-center flex justify-center flex-col space-y-10 md:my-20">
          <div className="space-y-10">
            <h1 className="text-center md:text-start font-bold text-4xl pb-11">
              About me
            </h1>
            Experienced developer skilled in creating responsive and
            user-friendly web applications. Proficient in HTML, CSS, and
            JavaScript, with a strong understanding of modern front-end
            frameworks and libraries. Committed to delivering high-quality code
            and crafting exceptional user experiences.
          </div>
          <div className="flex space-x-4">
            {/* <button className="p-3 px-10 outline-1 outline-slate-400 outline rounded-full hover:bg-white hover:text-gray-800 ">Hire me</button>
            <button className="p-3 px-10 outline-1 outline-slate-400 outline rounded-full hover:bg-white hover:text-gray-800 ">Download CV</button> */}
           <Link smooth to="#contact">
             <Button 
               variant="contained"
               className="btn opacity-80"
               color="error"
               sx={{ borderRadius: 28, backgroundColor: "red" }}
             >
               Hire me
             </Button>
           </ Link>
            <Link to="https://drive.usercontent.google.com/download?id=1-z7EuFyCiZ-V5N27ehEieTsAlYXvV_fC&export=download&authuser=0&confirm=t&uuid=15aafeac-7157-4128-aff7-d9bfeea4f162&at=APZUnTU2h1xv6xFGAYVJx9Ksibvh:1692638808211"><Button
              className='btn opacity-80 hover:opacity-90 '
             
              sx={{ borderRadius: 28 }}
              variant="contained"
              endIcon={<DownloadIcon />}
            >
              Download CV
            </Button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
