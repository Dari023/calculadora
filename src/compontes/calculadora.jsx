import { useState } from "react"
import { evaluate } from 'mathjs';
export const Calculadora = () => {
    const [resultado, setResultado] = useState("")
   
        const funciones = (numero) => {
            
            setResultado(resultado + numero)
            console.log(resultado );
        }

        const calcularResultado = () => {
            try {
             
              const resuladora = evaluate(resultado);
              setResultado(resuladora.toString());
            } catch (Error) {
              setResultado("Error");
              
            }
          };
        
        


        const limpiar = () => {
            setResultado("")
        }

        const limpiarUno = () => {
            setResultado((resultado) => resultado.slice(0, -1));
        };

       

    return(
        <div className="container">
            <div className="segunda">
                <h1>Calculadora basica</h1>
                <div className="input1">
                    <input  value={resultado}  placeholder="0"/>
                </div>
                <div className="numeros">
                    <div>
                        <button className="boton" onClick={() => funciones(1)}>1</button>
                        <button className="boton" onClick={() => funciones(2)}>2</button>
                        <button className="boton" onClick={() => funciones(3)}>3</button>
                        <button className="boton" onClick={() => funciones("/")}>÷</button>
                    </div>
                    <div>
                        <button className="boton" onClick={() => funciones(4)}>4</button>
                        <button className="boton" onClick={() => funciones(5)}>5</button>
                        <button className="boton" onClick={() => funciones(6)}>6</button>
                        <button className="boton" onClick={() => funciones("*")}>x</button>
                    </div>
                    <div>
                        <button className="boton" onClick={() => funciones(7)}>7</button>
                        <button className="boton" onClick={() => funciones(8)}>8</button>
                        <button className="boton" onClick={() => funciones(9)}>9</button>
                        <button className="boton" onClick={() => funciones("-")}>-</button>
                    </div>
                    <div>
                        <button className="boton" onClick={() => funciones(".")}>.</button>
                        <button className="boton cero" onClick={() => funciones(0)}>0</button>
                        <button className="boton" onClick={() => funciones("+")}>+</button>
                    </div>
                    <div>
                        <button className="boton" onClick={limpiar}>C</button>
                        <button className="boton" onClick={limpiarUno}><i class="bi bi-backspace-fill"></i></button>
                        <button className="boton igual" onClick={calcularResultado}>=</button>
                    </div>
                    
                </div>
            </div>
            
          
        </div>
    )
}