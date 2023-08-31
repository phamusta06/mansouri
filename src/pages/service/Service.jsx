import Item2 from "../../componants/item/item2";

import web from "../../assets/c.png";
const Service = () => {
  return (
    <>
      <div id="service" className="bg-slate-800 w-full min-h-screen flex items-center flex-col px-6 "  >
        <p className="text-4xl font-extrabold text-white">My Service</p>
        <div className="w-full min:h-96 flex flex-wrap justify-center  ">
          <Item2
          title="Web design"
            img={web}
            content="the process of creating and planning the visual and functional aspects of a website. It encompasses various elements, including layout, color schemes, typography, images"
          />
          <Item2 img={web} title="Performance optimization " content="front-end development involves enhancing the speed and responsiveness of a website or application. It focuses on minimizing load times, reducing latency" />
          <Item2 img={web} title="Responsive Design" content="Responsive design involves creating websites that automatically adjust and adapt their layout and content to fit various screen sizes and devices, such as desktops, tablets, and smartphones" />
        </div>
      </div>
    </>
  );
};

export default Service;
