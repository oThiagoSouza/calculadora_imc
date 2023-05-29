import './cabecalho.css'

function Cabecalho() {
    const logoImc = './src/assets/IMC_logo.png'


    return (
        <>
            <header>
                <img className="header_logo" src={logoImc}/>
                <h1 className="header_title" >Calculadora de IMC</h1>
            </header>
        </>
    )

}

export default Cabecalho