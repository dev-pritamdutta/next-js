"use client"

const ProductAddForm = () => {
    const handleSubmit = async(e)  =>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const productDescription = form.productDescription.value;
        const payload = {name: productName, price: productPrice, description: productDescription};

        const res  = await fetch("http://localhost:3000/api/items", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();
        console.log(result);
        if (res.ok) {
            alert("Product added successfully!");
        } else {
            alert("Failed to add product.");
        }
        form.reset();

        // console.log(productName, productPrice, productDescription);

    }
return (
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-white text-black p-8 rounded-lg shadow-lg w-1/2'>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='block text-gray-700' htmlFor="productName">Product Name:</label>
                    <input className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" id="productName" name="productName"/>
                </div>
                <div>
                    <label className='block text-gray-700' htmlFor="productPrice">Product Price:</label>
                    <input className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" id="productPrice" name="productPrice"/>
                </div>
                <div>
                    <label className='block text-gray-700' htmlFor="productDescription">Product Description:</label>
                    <textarea className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' id="productDescription" name="productDescription"></textarea>
                </div>
                <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600' type="submit">Add Product</button>
            </form>
        </div>
    </div>
)
}

export default ProductAddForm