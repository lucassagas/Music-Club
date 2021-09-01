import styled from 'styled-components';

export const Container = styled.header`
  grid-area: HE;
  background: var(--primary);

  border-bottom: 1px solid var(--gray);

  padding: 0 1.31rem 0 1.31rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    > input {
      background: inherit;
      border: 0;
      margin-left: 0.64rem;

      line-height: 1.125rem;

      width: 12.5rem;
    }

    & + div {
      margin-right: 6.93rem;

      > button {
        width: 5.25rem;
        height: 4.43rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: none;

        border: solid 1px var(--gray);
      }

      > button:not(:nth-child(3)) {
        border-right: none;
      }
    }
  }
`;
