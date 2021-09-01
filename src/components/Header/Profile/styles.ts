import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 1.43rem;

  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;

    > span {
      color: var(--purple);

      > svg {
        margin-right: 0.31rem;
      }
    }
  }
`;

export const ProfilePicture = styled.div`
  margin-right: 0.56rem;
  position: relative;

  > img {
    width: 2.5rem;
    height: 2.5rem;
  }

  > svg {
    position: absolute;

    bottom: 3px;
    right: -2px;
  }
`;
