import styled from 'styled-components';
import logo from './assets/logo.png';
import perfil from './assets/perfil.png';

const CabecalhoEstilizado = styled.header`
    display:flex; //uma coisa do lado da outra
    align-items: center;  //se alinharem pelo centro
    justify-content: space-between;  //espaçamento igual entra cada um dos objetos
    padding: 2em 4em  //espaçamento interno e não colar nas janelas
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;   //div ocupe um espaço maior dentro do cabeçalho estilizado
`

const LinkEstilizado = styled.a`
 color: var(--azul-escuro);
 font-weight: 700;
`

function Cabecalho() {
    return (
        <CabecalhoEstilizado>
            <img src={logo} alt="logo da empresa Voll" />
            <Container>
                <img src={perfil} alt="imagem de perfil do usuário" />
                <LinkEstilizado href="#">Sair</LinkEstilizado>
            </Container>
        </CabecalhoEstilizado>
    )
}

export default Cabecalho;