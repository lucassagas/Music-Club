import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }

  @media(max-width: 720px) {
    font-size: 87.5%;
  }

  @media(max-width: 430px) {
    font-size: 81.25%
  }
}

body {
  background: var(---primary);
  color: var(---blackWithOpacity);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

}

body, input, textarea, button, p {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(---blackWithOpacity);
}

button {
  cursor: pointer;
}

h1, h2, h3, h4, h5 {
  color: var(---black);
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed
}

:root {
  --primary: #FFFFFF;
  --secondary: linear-gradient(180deg, rgba(244, 249, 255, 0.0001) 0%, #F4F9FF 26.23%);
  --tertiary: #F51E38;
  --pink: #F79DA8 ;
  --black: #0F1E36;
  --blackWithOpacity: rgba(15,30,54, 0.5);
  --gray: #EEEEEE;
  --purple: #3E2AD1;
}
`;
