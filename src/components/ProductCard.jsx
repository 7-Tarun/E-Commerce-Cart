function ProductCard() {
    return (
        <>
            <article className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
                <div className="w-full h-56 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-400">
                    [Product Image 200x200]
                </div>
                <h3 className="font-bold text-lg text-gray-900 line-clamp-1">Fjallraven - Foldsack No. 1 Backpack</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4 line-clamp-2">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.</p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                    <span className="text-2xl font-black text-gray-900">$109.95</span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer">
                        Add to Cart
                    </button>
                </div>
            </article>
        </>
    )
}

export default ProductCard