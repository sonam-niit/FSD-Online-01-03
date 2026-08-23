import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
}
function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const json = await response.json();
            console.log(json);
            setProducts(json.products)
        }
        fetchData();
    }, [])
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-while shadow-sm">
                <div className="px-6 py-5 max-w-7xl mx-auto">
                    <div className="text-2xl font-bold text-gray-600">
                        Product Store
                    </div>
                </div>
            </header>
            <main className="px-6 py-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        products.map((item) => (
                            <div key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                                <img src={item.thumbnail} alt={item.title} className="w-full h-48" />
                                <div className="p-5">
                                    <p className="text-sm text-blue-600 font-medium">{item.category}</p>
                                    <p className="text-lg font-bold text-gray-800 mt-2">{item.title}</p>
                                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.description}</p>
                                    <div className="flex items-center justify-between mt-5">
                                        <span className="text-xl font-bold text-green-600">
                                            ${item.price}
                                        </span>

                                        <button className="bg-blue-600 text-white px-4 py-3 rounded-xl
                                        hover:bg-blue-700 transition">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

export default ProductList;