import React from 'react';
import Calculadora from "./components/Calculadora"
import Calculadora2 from "./components/Calculadora"
import Header from "./components/Header"

function App() {
    return (
        <div className="container mx-auto mt-8 ">
            <Header />

            <div className="container mx-auto mt-8 bg-gray-700">
                <Calculadora2 />
            </div>
        </div>
      
    )
}

export default App