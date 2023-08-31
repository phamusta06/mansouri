import "./item.css";

const Item = (props) => {
  return (
    <>
      <div className="min:h-36 shadow-sm shadow-zinc-600 bg-zinc-700 bg-opacity-80 rounded-xl my-4 p-3  ">
        <p>{props.anee}</p>
        <h1>{props.content}</h1>
        <p>
          
         {props.local}
        </p>
        <h4></h4>
      </div>
    </>
  );
};

export default Item;
