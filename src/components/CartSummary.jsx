function CartSummery() {
    return (
        <>
            <div className="border-t border-[#4d1d1d] pt-4">
                <h3 className="text-sm font-bold tracking-wide mb-3">Order Info</h3>

                <div className="space-y-2 text-xs text-gray-300">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-mono">225,00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping Cost</span>
                        <span className="font-mono">$25,00</span>
                    </div>


                    <div className="flex justify-between items-baseline pt-2 text-white">
                        <span className="font-bold text-sm">Total</span>
                        <span className="text-lg font-black font-mono">$250,00</span>
                    </div>
                </div>


                <button className="w-full mt-5 bg-white text-black text-xs font-bold py-3 rounded-xl uppercase tracking-widest hover:bg-gray-200 transition-colors cursor-pointer">
                    Checkout
                </button>
            </div>
        </>
    )
}

export default CartSummery