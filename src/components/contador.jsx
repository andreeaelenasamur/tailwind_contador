import React, { useEffect, useState } from "react";
import "../App.css"

export const Contador = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return (
        <div className="imagen md:py-12">
            <section class="mt-80 pt-40">
                <div class="container mx-auto px-6 md:px-12 xl:px-32">
                    <div class="text-center text-gray-800">
                        <div class="shadow block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12">
                            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">You clicked {count} times</h1>
                            <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out mx-2"
                                onClick={() => setCount(count + 1)}>
                                +
                            </button>
                            <button type="button"
                                className={`inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ${count <= 0 && 'opacity-60'}`}
                                onClick={() => setCount(count - 1)}
                                disabled={count <= 0}
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contador;
