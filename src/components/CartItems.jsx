import { useCart } from "../contexts/CartContext"

function CartItem({ item }) {

    const {decreaseQuantity, removeCart, addToCart} = useCart();

    return (
        <>
            <div className="cart-item">
                    <span className="cart-item__remove"
                    onClick={() => removeCart(item.id)}
                    >
                        🗑️
                    </span>

                    <div className="cart-item__product">

                        <div className="cart-item__image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="cart-item__details">
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                        </div>
                    </div>

                    <div className="quantity-control">
                        <button aria-label="Decrease quantity"
                        onClick={() => decreaseQuantity(item.id)}
                        >-</button>
                        <span>{item.quantity}</span>
                        <button aria-label="Increase quantity"
                        onClick={() => addToCart(item)}
                        >+</button>
                    </div>
            </div>
        </>
    )
}

export default CartItem