import { useCart } from "../contexts/CartContext"

function CartItem({ item }) {

    const {decreaseQuantity, removeCart, addToCart} = useCart();

    return (
        <>
            <div className="space-y-3 mb-6">

                <div className="relative bg-[#3d1414] p-3 rounded-2xl flex items-center justify-between border border-[#4d1d1d]">
                    <span className="absolute -top-1.5 -right-1.5 bg-transparent text-white text-[15px] font-bold w-5 h-5 flex items-center justify-center rounded-full z-10 cursor-pointer"
                    onClick={() => removeCart(item.id)}
                    >
                        🗑️
                    </span>

                    <div className="flex items-center space-x-3">

                        <div className="w-12 h-12 bg-[#521c1c] rounded-xl flex items-center justify-center text-xs">
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <h4 className="text-xs font-bold tracking-wide">{item.title}</h4>
                            <p className="text-[10px] text-gray-400">Price: ${item.price}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-[#280808] px-2 py-1 rounded-lg text-xs">
                        <button className="text-gray-400 hover:text-white px-1"
                        onClick={() => decreaseQuantity(item.id)}
                        >-</button>
                        <span className="font-mono text-[11px]">{item.quantity}</span>
                        <button className="text-gray-400 hover:text-white px-1"
                        onClick={() => addToCart(item)}
                        >+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem