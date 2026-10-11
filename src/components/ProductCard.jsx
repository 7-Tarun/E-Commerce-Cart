import { useCart } from "../contexts/CartContext"

function ProductCard({ product }) {

    const { addToCart, cart, decreaseQuantity } = useCart();
    const cartItem = cart.find(item => item.id === product.id);

    return (
        <>
            <article className="product-card">
                <div className="product-card__image">
                    <img src={product.image} alt={product.title} />
                </div>


                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__description">{product.description}</p>
                <div className="product-card__footer">
                    <span className="product-card__price">${product.price}</span>

                    {!cartItem ? (
                        <button className="button-primary"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="quantity-control">
                            <button aria-label="Decrease quantity"
                                onClick={() => decreaseQuantity(product.id)}
                            >-</button>
                            <span>{cartItem.quantity}</span>
                            <button aria-label="Increase quantity"
                                onClick={() => addToCart(product)}
                            >+</button>
                        </div>
                    )}


                </div>
            </article>
        </>
    )
}

export default ProductCard