import styled from 'styled-components';

export const Container = styled.li`
  a {
    color: var(--blackWithOpacity);
    text-decoration: none;
    line-height: 1rem;

    display: flex;
    align-items: center;
    > svg {
      margin-right: 0.93rem;
    }
  }

  & + li {
    margin-top: 1.12rem;
  }

  .active {
    color: var(--purple);

    svg {
      stroke: var(--purple);
    }
  }
`;
