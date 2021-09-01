import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-areas:
    'SB HE'
    'SB MA'
    'PL PL';

  grid-template-columns: 10.5625rem auto;
  grid-template-rows: 4.1875rem calc(100vh - 4.1875rem - 3.8125rem);
`;

export const Content = styled.div`
  grid-area: MA;
  width: 100%;
  height: 100%;

  overflow: hidden;
  background: var(--secondary);
`;
