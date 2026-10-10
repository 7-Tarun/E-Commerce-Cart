import { useQuery } from "@tanstack/react-query"
import ProductCard from "./ProductCard"

function ProductList() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['product'],
        queryFn: () => fetch('https://fakestoreapi.com/products').then(res => res.json())
    })

    if (isLoading) return <div className="text-center mt-10">Loading...</div>
    if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>

    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <main className="max-w-7xl mx-auto p-6 pt-10">

                    <h2 className="text-xl font-bold mb-6 text-gray-800">Latest Products</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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