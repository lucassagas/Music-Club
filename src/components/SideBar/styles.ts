import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
  grid-area: SB;

  border-right: 1px solid var(--gray);

  padding: 1.37rem;

  > nav {
    margin-top: 2.68rem;

    ul {
      list-style: none;
    }
  }
`;

export const CategoryTitle = styled.strong`
  display: block;
  margin: 1.43rem 0 1rem 0;

  line-height: 1rem;
  font-weight: 600;
`;
