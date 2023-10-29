


function menu() {
    const menu = {
        background: 'blue',
        display: 'flex',
        justifyContent: 'center'
    }
    const link = {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '22px',
        color: '#fff',
        fontSize: '16px'
    }
    return (
        <>
            <nav style={menu}>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li><a href="/" style={link}>Inicio</a>  </li>
                    <li><a href="/avante" style={link}>TecEspace Avante</a>  </li>
                    <li><a href="/sobre"style={link} >Sobre</a>  </li>
                    <li><a href="/cep"style={link} >Contato</a>  </li>
                </ul>
            </nav>
        </>
    )

}
export default menu;