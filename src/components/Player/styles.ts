import styled from 'styled-components';

export const Container = styled.div`
  background: var(--black);
  grid-area: PL;

  display: flex;
  align-items: center;
`;

export const SongInfo = styled.div`
  width: 10.5625rem;
  height: 3.8rem;
  background: var(--tertiary);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    position: absolute;
    right: 0.75rem;
    top: 0.5rem;
    background: 0;
    border: 0;
  }

  > div {
    margin-left: 0.5rem;

    > strong {
      color: var(--primary);
      line-height: 1rem;
    }

    > p {
      color: var(--pink);
      font-size: 0.625rem;
    }
  }
`;

export const PlayerOptions = styled.div`
  height: 100%;
  flex: 1;
  max-width: 53.6875rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 1.4375rem;

  > div {
    display: flex;
    align-items: center;

    > button {
      background: none;
      border: 0;

      & + button {
        margin-left: 1.9375rem;
      }
    }
  }
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.81rem;
  height: 2.81rem;

  border-radius: 50%;

  background: rgba(245, 30, 56, 0.3) !important;

  > span {
    width: 36px;
    height: 36px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(245, 30, 56, 0.3) !important;
  }
`;

export const Timer = styled.div`
  max-width: 400px;
  width: 100%;

  > time {
    color: var(--primary);
    opacity: 0.5;
  }
`;

export const ProgressBar = styled.div`
  max-width: 20.37rem;
  width: 100%;
  height: 4px;

  margin: 0 0.68rem;

  background: var(--primary);

  display: flex;
  align-items: center;

  &:after {
    content: '';
    width: 70%;
    height: 100%;

    display: block;

    background: var(--tertiary);
  }
`;
