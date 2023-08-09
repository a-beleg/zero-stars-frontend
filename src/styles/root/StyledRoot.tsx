import styled, {createGlobalStyle} from "styled-components";
import PixeloidSansWoff2 from "../fonts/PixeloidSans.woff2";

export const theme = {
    white: "#FFF7F7",
    black: "black"
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pixeloid Sans";
    src: url(${PixeloidSansWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  body, html, pre {
    margin: 0;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "Pixeloid Sans", sans-serif;
    color: ${theme.white};
    line-height: 1.18;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  input, textarea {
    border: none;
    outline: none;
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    resize: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

export const RootContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${theme.black};
  overflow-y: auto;
  overflow-X: hidden;
  scroll-snap-type: y mandatory;
`;
