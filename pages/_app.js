import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Styles } from "../src/PageStyle";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #D9E6F6;
  font-family: sans-serif;
}

#__next {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

${Styles}
`;

const theme = {
  colors: {
    primary: "#308bc5",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}