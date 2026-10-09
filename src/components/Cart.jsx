import CartItem from "./CartItems"
import CartSummery from "./CartSummary"

function Cart() {
    return (
        <>

            <div class="max-w-sm bg-[#280808] text-white p-6 rounded-[32px] font-sans shadow-2xl">


                <div class="flex justify-between items-center mb-6">
                    <div class="flex items-center space-x-2 text-gray-300 cursor-pointer">
                        <span>←</span>
                        <span class="text-sm font-medium">My orders</span>
                    </div>
                    <div class="text-right">
                        <span class="text-2xl font-bold block leading-none">18</span>
                        <span class="text-xs text-gray-400 uppercase tracking-wider">Dec</span>
                    </div>
                </div>
                <CartItem/>
                <CartSummery/>
            </div>

        </>
    )
}

export default Cart