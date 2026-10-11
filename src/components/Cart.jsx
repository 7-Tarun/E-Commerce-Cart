import { useCart } from "../contexts/CartContext"
import CartItem from "./CartItems"
import CartSummery from "./CartSummary"
import { Link } from "react-router-dom"

function Cart() {

    const {cart} = useCart();

    return (
        <div className="cart-page">
            <main className="cart-layout">
                {/* Header */}
                <header className="cart-header">
                    <Link to="/"
                        type="button"
                        className="cart-back"
                    >
                        <span aria-hidden="true">←</span>
                        <span>Back to store</span>
                    </Link>

                    <div className="cart-date">
                        <strong>18</strong>
                        <span>Dec</span>
                    </div>
                </header>

                {/* Items */}
                <section className="cart-items">
                    <h2>Your cart</h2>
                    {cart.length === 0 ? (<p className="cart-empty">Your cart is empty.</p>) : (cart.map((item) => (
                        <CartItem key={item.id} item={item}/>
                    )))}
                </section>

                {/* Summary: plain on mobile, sticky side panel on desktop */}
                <aside className="cart-summary">
                    <CartSummery />
                </aside>
            </main>
        </div>
    )

}

export default Cart