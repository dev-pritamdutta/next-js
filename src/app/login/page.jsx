import React from 'react'

export default function Login() {
return (
    <div className="flex justify-center items-center min-h-screen">
        <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h3 className='text-center text-4xl font-bold py-5'>Login here</h3>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                <input type="text" id="username" name="username" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <input type="password" id="password" name="password" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            </div>
        </form>
    </div>
)
}
