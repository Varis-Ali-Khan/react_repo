import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
 
import { clearCart } from "../utils/cartSlice";
 

const Cart=()=>
{

const cartItems= useSelector((store)=>store.cart.items)

const dispatch = useDispatch()
const handleclearCart = ()=>
{
    dispatch(clearCart())
}

    return (
        <div className="text-center m10 p-10">
            <h1 className="test-2xl font-bold">cart</h1>
            <div className="w-6/12 m-auto"> 
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleclearCart}>clear cart</button>
            {cartItems.length===0 && <h1>Cart Is Empty , Please add items </h1>}
                <ItemList item={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;