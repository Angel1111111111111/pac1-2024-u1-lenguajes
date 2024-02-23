import React, { useState } from 'react';

function Calculadora2() {
  const [expresion, setExpresion] = useState('');
  const [historial, setHistorial] = useState([]);

  //Agrega al display todos los numeros y signos

  const agregarADisplay = (valor) => {
    setExpresion(expresion + valor);
  };

//limpia el display

  const limpiarDisplay = () => {
    setExpresion('');
  };

//Hace el calculo de todos los valores y lo suma al historial

  const calcular = () => {
    try {
      const resultado = eval(expresion);
      setHistorial([...historial, { expresion, resultado }]);
      limpiarDisplay();
    } catch (error) {
      limpiarDisplay();
      alert('Error en la expresión');
    }
  };

  return (
    <div className="container mx-auto py-10 px-10 rounded-none bg-gray-400 content-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <input
            id="display"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="0"
            value={expresion}
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[7, 8, 9, '/'].map((num) => (
            <button
              key={num}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => agregarADisplay(num)}
            >
              {num}
            </button>
          ))}
          {[4, 5, 6, '*'].map((num) => (
            <button
              key={num}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => agregarADisplay(num)}
            >
              {num}
            </button>
          ))}
          {[1, 2, 3, '-'].map((num) => (
            <button
              key={num}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => agregarADisplay(num)}
            >
              {num}
            </button>
          ))}
          {[0, '.', '+'].map((num) => (
            <button
              key={num}
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                num === 0 ? 'col-span-2' : ''
              }`}
              onClick={() => agregarADisplay(num)}
            >
              {num}
            </button>
          ))}
          <button
            className="col-span-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={calcular}
          >
            =
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline col-span-2"
            onClick={limpiarDisplay}
          >
            C
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-semibold mb-2">Historial</h2>
        <ul id="historial" className="list-disc pl-5">
          {historial.map((item, index) => (
            <li key={index}>
              {item.expresion} = {item.resultado}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculadora2;
