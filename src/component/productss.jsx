import ItemsList from "./itemsList";

const Productss = ({cartData}) => {
  return ( 
    <>
    <div className="datas">
      {cartData.map((items) =>{
        return <ItemsList key={items.id} {...items}/>
      })}
    </div>
    </>
   );
}
 
export default Productss;