import styled from 'styled-components';

import sliderImg from '../../assets/sliders/slider.svg';

export const Container = styled.div`
  width: 100%;
  height: 19.18rem;
  background: #e6152b url(${sliderImg}) no-repeat center center;
  background-size: cover;

  position: relative;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  margin-left: 3.81rem;
  max-height: 10.6rem;

  > span {
    color: var(--primary);
    font-size: 0.625rem;
    line-height: 0.875rem;
  }

  > h1 {
    font-size: 1.75rem;
    line-height: 1.875rem;
    color: var(--primary);

    margin: 0.43rem 0;
  }

  > p {
    color: var(--primary);
    font-size: 1rem;
    line-height: 0.875rem;
    font-weight: 400;
  }

  > div {
    display: flex;
    align-items: center;

    margin-top: 2.68rem;

    > button {
      width: 62px;
      height: 22px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--tertiary);

      box-shadow: 0px 2px 8px var(--tertiary);

      border-radius: 3px;
      border: 0;

      > span {
        margin-right: 4px;
      }

      & + button {
        width: 1.5rem;
        margin-left: 0.5rem;
      }
    }
  }
`;

export const SliderButtons = styled.div`
  display: flex;
  align-items: center;

  width: 79px;
  height: 6px;

  position: absolute;
  left: calc(50% - 79px);
  bottom: 7px;

  > div {
    width: 16px;
    height: 5px;

    background: var(--primary);

    transform: skew(-20deg);

    & + div {
      margin-left: 5px;
    }
  }

  .active {
    background: var(--purple);
  }
`;
