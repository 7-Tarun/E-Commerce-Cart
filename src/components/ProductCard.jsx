import { useCart } from "../contexts/CartContext"

function ProductCard({ product }) {

    const {addToCart} = useCart();

    return (
        <>
            <article className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
                <div className="w-full h-56 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-400 p-2">
                    <img className="max-w-full max-h-full object-contain" src={product.image} alt="" />
                </div>


                <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{product.title}</h3>
                <p className="text-gray-500 text-sm mt-1 mb-4 line-clamp-2">{product.description}</p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                    <span className="text-2xl font-black text-gray-900">${product.price}</span>

                    
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer"
                    onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </article>
        </>
    )
}

export default ProductCard