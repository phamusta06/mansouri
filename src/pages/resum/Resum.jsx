import Item from "../../componants/item/Item";

const Rezum = () => {
  return (
    <>
      <div className="w-full min:h-screen bg-slate-800  flex flex-col items-center " id="resum" >
        <div className=" flex tex space-x-2 text-white ">
          <p className="text-4xl">My</p>
          <span className="text-4xl font-bold">Resume</span>
        </div>
        <div className="flex space-x-4 p-6 overflow-hidden md:flex-row flex-col md:justify-around w-full text-white ">
          <div >
            <p className="text-xl">Educatio</p>
            <Item  anee="2020- 2022" content="Deplom Technique Développement
Informatique" local="Ofppt Khémisset" />
            <Item  anee="2017- 2019
" content="Deplom Comptable d'entreprises

Informatique" local="Ofppt Khémisset" />
          
            
          </div>
          <div>
            <p className="text-xl">Experience</p>
            <Item  anee="Mai-2022 - Juin2022

" content="Commune de khemisset Stage de commune


" local="de khemisset
" />
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Rezum;
