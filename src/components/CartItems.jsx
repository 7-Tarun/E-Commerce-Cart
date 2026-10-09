function CartItem() {

    return (
        <>
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Your daily itemes</h3>
            <div className="space-y-3 mb-6">

                <div className="bg-[#3d1414] p-3 rounded-2xl flex items-center justify-between border border-[#4d1d1d]">
                    <div className="flex items-center space-x-3">

                        <div className="w-12 h-12 bg-[#521c1c] rounded-xl flex items-center justify-center text-xs">🎮</div>
                        <div>
                            <h4 className="text-xs font-bold tracking-wide">PS-VITA</h4>
                            <p className="text-[10px] text-gray-400">1026 6th Ave</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-[#280808] px-2 py-1 rounded-lg text-xs">
                        <button className="text-gray-400 hover:text-white px-1">-</button>
                        <span className="font-mono text-[11px]">01</span>
                        <button className="text-gray-400 hover:text-white px-1">+</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartItem