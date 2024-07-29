import { useState } from "react"

export const Calculadora = () => {
    const [resultado, setResultado] = useState("")
   
        const funciones = (numero) => {
            
            setResultado(resultado + numero)
            console.log(resultado );
        }

        const calcularResultado = () => {
            try {
             
              const resuladora = operaciones(resultado);
              setResultado(resuladora.toString());
            } catch (Error) {
              setResultado("Error");
              
            }
          };
        
        const operaciones = (expresion) => {
            expresion = expresion.replace(/\s+/g, '')
            const operacion = expresion.split(/(\+|\-|\*|\/)/).filter(Boolean);

            let resulado  = parseFloat(operacion[0])

            for (let i = 1;  i < operacion.length; i +=2){
                const operador = operacion[i]
                const numerosiguente = parseFloat(operacion[i + 1])

                if (isNaN(numerosiguente)) {
                    throw new Error("exprecion invalida")
                }

                switch (operador) {
                    case "+":
                        resulado += numerosiguente;
                        break;
                    case "-":
                        resulado -= numerosiguente;
                        break;
                    case "*":
                        resulado *= numerosiguente;
                        break;
                    case "/":
                        if (numerosiguente === 0) {
                            throw new Error("dividido en cero")
                        }
                        resulado /= numerosiguente;
                        break
                
                    default:
                        throw new Error("Operador inválido");
                        
                }
                return resulado;
            } 

            
            }


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
                    <input type="numer" value={resultado}  placeholder="0"/>
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
                        <button className="boton" onClick={() => funciones("*")}>*</button>
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