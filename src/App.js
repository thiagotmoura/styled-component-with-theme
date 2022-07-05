
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Wrapper from './components/Wrapper'
import Button from './components/Button'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
`
const App = () => {
  
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  const toTheme = theme.title === 'light' ? 'dark' : 'light'

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Title primary>
          Projeto Styled Components com Tema
        </Title>
        <Button onClick={toggleTheme}>
          Trocar para o Tema {toTheme}
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
