import { useQuery } from "@tanstack/react-query"
import ProductCard from "./ProductCard"

function ProductList() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['product'],
        queryFn: () => fetch('https://fakestoreapi.com/products').then(res => res.json())
    })

    //  console.log(data);

    return (
        <>
            {/* min-h-screen lagane se ye poori screen cover karega */}
            <div className="bg-gray-50 min-h-screen">
                <main className="max-w-7xl mx-auto p-6 pt-10"> {/* mt-4 ki jagah pt (padding-top) behtar alignment dega */}

                    {/* Heading grid ke bahar aur upar hi rahegi */}
                    <h2 className="text-xl font-bold mb-6 text-gray-800">Latest Products</h2>

                    {/* Grid container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Agar aapke paas products ka data hai, toh aise loop chalayein: */}
                        {/* {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))} */}

                        {/* Agar abhi data nahi hai aur sirf testing kar rahe hain, toh multiple cards aise likhein: */}
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                </main>
            </div>
        </>
    )
}

export default ProductList