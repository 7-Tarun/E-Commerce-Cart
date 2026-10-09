
function Header() {
    return (
        <>
                <header class="bg-white shadow-sm p-4 sticky top-0 z-50">
                    <div class="max-w-7xl mx-auto flex justify-between items-center">
                        <h1 class="text-2xl font-extrabold tracking-tight">FakeStore</h1>


                        <button class="bg-gray-900 text-white px-5 py-2 rounded-lg relative cursor-pointer hover:bg-gray-800">
                            Cart
                            <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-white">
                                0
                            </span>
                        </button>
                    </div>
                </header>
        </>
    )
}

export default Header