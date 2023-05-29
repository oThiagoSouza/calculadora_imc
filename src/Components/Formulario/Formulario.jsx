import { useState } from 'react'
import './formulario.css'

function Formulario(){
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [result, setResult] = useState(0)

    const calculaImc = () => {
        const imc = peso / (altura * altura)
        const imcFormatado = imc.toFixed(2)
        setResult(`seu IMC é de ${imcFormatado}`)
    }

    return (
        <>
            <div className="container">
                <form className="form_imc">
                    <input onChange={ e => setPeso(+e.target.value) } value={peso} type="number" placeholder='informe seu peso' />
                    <input onChange={ e => setAltura(+e.target.value) } value={altura} type="number" placeholder='informe sua altura' />
                    <button onClick={calculaImc} type='button'>Calcular</button>
                    <p>{result}</p>
                </form>

                <ul className='lista_imc'>
                    <li className='lista_imc_item'>
                        Menor que 18,5 ------- Magreza
                    </li>
                    <li className='lista_imc_item'>
                        Entre 18,5 e 24,9 ------- Normal
                    </li>
                    <li className='lista_imc_item'>
                        Entre 25 e 29,9 -------- Sobrepeso
                    </li>
                    <li className='lista_imc_item'>
                        Entre 30 e 39,9 -------- Obesidade
                    </li>
                    <li className='lista_imc_item'>
                        Maior que 40 -------- Obesidade Grave
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Formulario