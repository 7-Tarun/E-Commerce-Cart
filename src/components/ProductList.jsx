import { useQuery } from "@tanstack/react-query"
import ProductCard from "./ProductCard"

function ProductList() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['product'],
        queryFn: () => fetch('https://fakestoreapi.com/products').then(res => res.json())
    })

    if (isLoading) return <div className="catalog-message">Loading your finds...</div>
    if (error) return <div className="catalog-message">Error: {error}</div>

    return (
        <>
            <div className="catalog">
                <main className="catalog__inner">
                    <section className="catalog__intro">
                        <div>
                            <p className="catalog__eyebrow">Curated for everyday</p>
                            <h1 className="catalog__title">Good finds.<br /><span>Better living.</span></h1>
                        </div>
                        <p className="catalog__description">
                            Thoughtful picks, standout essentials, and little upgrades worth bringing home.
                        </p>
                    </section>
                    <div className="product-grid">
                        {/* Data ko loop kara aur ProductCard ko data as a prop bheja */}
                        {data.map((item) => (
                            <ProductCard key={item.id} product={item}/>
                        ))}
                    </div>

                </main>
            </div>
        </>
    )
}

export default ProductList