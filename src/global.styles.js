import { createGlobalStyle } from 'styled-components'
import { colors } from './shared/colors'
// import DesktopDrawer from "../shared/components/DesktopDrawer/DesktopDrawer";
// import { MobileDrawer } from "../shared/components/MobileDrawer/mobile-drawer";

const GlobalStyle = createGlobalStyle`

html {
    height:100%;
}

  body {
    font-family: Tahoma, sans-serif;
    margin: 0;
    height: 100%;
  }
  * {
        margin: 0;
        padding: 0;
        font-family:Tahoma, sans-serif;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 500;
        @media screen and (max-width: 960px) {
        font-size: 2rem;
        }
    }
    h4 {
        font-size: 2rem;
        @media screen and (max-width: 960px) {
        font-size: 1.5rem;
        }
    }
    h5 {
        font-size: 1.5rem;
        color: ${colors.primary};
        @media screen and (max-width: 960px) {
        font-size: 1rem;
        }
    }
    h6 {
        font-size: 2rem;
        font-weight: 400;
        @media screen and (max-width: 960px) {
        font-size: 1.5rem;
        }
    }
    #root {
        height: 100%;
        background-color: white;
    }
`

export default GlobalStyle
