function CartItem() {
    return (
        <>
            <h3 class="text-sm font-semibold text-gray-300 mb-4">Your daily itemes</h3>
            <div class="space-y-3 mb-6">
                <div class="bg-[#3d1414] p-3 rounded-2xl flex items-center justify-between border border-[#4d1d1d]">
                    <div class="flex items-center space-x-3">

                        <div class="w-12 h-12 bg-[#521c1c] rounded-xl flex items-center justify-center text-xs">🎮</div>
                        <div>
                            <h4 class="text-xs font-bold tracking-wide">PS-VITA</h4>
                            <p class="text-[10px] text-gray-400">1026 6th Ave</p>
                        </div>
                    </div>

                    <div class="flex items-center space-x-2 bg-[#280808] px-2 py-1 rounded-lg text-xs">
                        <button class="text-gray-400 hover:text-white px-1">-</button>
                        <span class="font-mono text-[11px]">01</span>
                        <button class="text-gray-400 hover:text-white px-1">+</button>
                    </div>
                </div>

                <div class="bg-[#3d1414] p-3 rounded-2xl flex items-center justify-between border border-[#4d1d1d]">
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 bg-[#521c1c] rounded-xl flex items-center justify-center text-xs">🕹️</div>
                        <div>
                            <h4 class="text-xs font-bold tracking-wide">SuperGame</h4>
                            <p class="text-[10px] text-gray-400">32 E 14th St</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 bg-[#280808] px-2 py-1 rounded-lg text-xs">
                        <button class="text-gray-400 hover:text-white px-1">-</button>
                        <span class="font-mono text-[11px]">01</span>
                        <button class="text-gray-400 hover:text-white px-1">+</button>
                    </div>
                </div>


                <div class="bg-[#3d1414] p-3 rounded-2xl flex items-center justify-between border border-[#4d1d1d]">
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 bg-[#521c1c] rounded-xl flex items-center justify-center text-xs">⚡</div>
                        <div>
                            <h4 class="text-xs font-bold tracking-wide">Trixi</h4>
                            <p class="text-[10px] text-gray-400">86 E 3rd St</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 bg-[#280808] px-2 py-1 rounded-lg text-xs">
                        <button class="text-gray-400 hover:text-white px-1">-</button>
                        <span class="font-mono text-[11px]">01</span>
                        <button class="text-gray-400 hover:text-white px-1">+</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartItem