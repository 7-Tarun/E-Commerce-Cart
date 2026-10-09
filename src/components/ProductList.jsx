import ProductCard from "./ProductCard"

function ProductList() {
    return (
        <>
            <div className="m-5 min-h-screen bg-gray-50">
                <main class="max-w-7xl mx-auto p-6 mt-4">
                    <h2 class="text-xl font-bold mb-6 text-gray-800">Latest Products</h2>
                    <ProductCard />
                </main>
            </div>
        </>
    )
}