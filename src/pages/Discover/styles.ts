import styled from 'styled-components';

export const Container = styled.div`
  background: var(--secondary);

  max-height: calc(100vh - 4.1875rem - 3.8125rem);

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  padding-left: 1.37rem;
`;
