import { useCart } from "../contexts/CartContext"


function CartSummery() {
    const {cart} = useCart();
    const subTotal = cart.reduce((acc, item) => acc+(item.price * item.quantity), 0);
    const shippingCost = subTotal > 0 ? 30 : 0;
    const finalCost = shippingCost + subTotal;

    return (
        <>
            <div>
                <h2>Order summary</h2>

                <div className="cart-summary__rows">
                    <div className="cart-summary__row">
                        <span>Subtotal</span>
                        <span>${subTotal.toFixed(2)}</span>
                    </div>
                    <div className="cart-summary__row">
                        <span>Shipping Cost</span>
                        <span>${shippingCost}</span>
                    </div>


                    <div className="cart-summary__row cart-summary__total">
                        <span>Total</span>
                        <strong>${finalCost.toFixed(2)}</strong>
                    </div>
                </div>


                <button className="checkout-button">
                    Checkout
                </button>
            </div>
        </>
    )
}

export default CartSummery