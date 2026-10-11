import { useCart } from "../contexts/CartContext"
import CartItem from "./CartItems"
import CartSummery from "./CartSummary"
import { Link } from "react-router-dom"

function Cart() {

    const {cart} = useCart();

    return (
        <div
            className="flex-1 flex items-center justify-center p-4 font-sans
               bg-[#f4ebe7]
               md:items-start md:p-12 md:bg-[#280808]"
        >
            <main
                className="w-full max-w-sm p-6 rounded-[32px]
                       bg-white text-[#280808] shadow-xl shadow-[#280808]/10
                       md:max-w-6xl md:p-0 md:rounded-none
                       md:bg-transparent md:text-white md:shadow-none
                       md:grid md:grid-cols-[minmax(0,1fr)_380px] md:gap-x-12 md:gap-y-8"
            >
                {/* Header */}
                <header
                    className="flex justify-between items-center mb-6
                           md:mb-0 md:col-span-2 md:pb-6 md:border-b md:border-white/10"
                >
                    <Link to="/"
                        type="button"
                        className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity
                               focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current rounded"
                    >
                        <span aria-hidden="true">←</span>
                        <span className="text-sm font-medium md:text-base">My orders</span>
                    </Link>

                    <div className="text-right">
                        <span className="block text-2xl font-bold leading-none md:text-4xl">18</span>
                        <span className="text-xs uppercase tracking-wider opacity-60 md:text-sm">Dec</span>
                    </div>
                </header>

                {/* Items */}
                <section className="min-w-0">
                    <h3 className="text-sm font-semibold text-gray-300 mb-4">Your daily itemes</h3>
                    {cart.length === 0 ? (<p>Your cart is empty.</p>) : (cart.map((item) => (
                        <CartItem key={item.id} item={item}/>
                    )))}
                </section>

                {/* Summary: plain on mobile, sticky side panel on desktop */}
                <aside
                    className="md:sticky md:top-12 md:self-start
                           md:rounded-3xl md:bg-white/5 md:border md:border-white/10 md:p-8"
                >
                    <CartSummery />
                </aside>
            </main>
        </div>
    )

}

export default Cart