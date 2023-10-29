import styled from "styled-components";


export const lightTheme = {
    corFundo: 'honeydew',
    corTexto: 'darkblue',
    corTitulo: 'red'
}

export const darkTheme = {
    corFundo: '#2a0a0a',
    corTexto: 'white',
    corTitulo: '#fffdd0'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`

// Criando um botão
export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #4c63af;
    color: white;
    margin: 10px;
`

// Criando um título
export const TitlePage = styled.h1`
    color: #975757;
    font-size: 25px;
`

export const InformacoesCep = styled.div`
    margin: 22px;
    display: flex;
    flex-direction: column;
`

// Criando uma div para formulários
export const DivForm = styled.div`
    display: inline;
    background-color: #FFF;
`