import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import darkLogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const StyledNav = styled.nav`
display: flex;
justify-content: space-between;
padding: 30px;
align-items: center;
`

const MenuContainer = styled.div`
margin-top: auto;
margin-bottom: auto;
`

const HomeImage = styled.img`
height: 70px`


function Header() {
    return (
        <StyledNav>
            <HomeImage src={darkLogo}  alt={'shiny-dark-logo'}/>
            <MenuContainer>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/freelances">Profils</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </MenuContainer>
        </StyledNav>
    )
}

export default Header