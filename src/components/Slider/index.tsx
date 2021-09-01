import React from 'react';
import { PlayIcon, ShareIcon } from '../../assets/icons';

import { Container, Content, SliderButtons } from './styles';

export function Slider(): React.ReactElement {
  return (
    <Container>
      <Content>
        <span>TRENDING</span>

        <h1>
          Akcent Feat Lidia <br /> Bubble & DDY Nunes
        </h1>

        <p>- Kamelia</p>

        <div>
          <button type="button">
            <span>PLAY</span>
            <PlayIcon />
          </button>
          <button type="button">
            <ShareIcon />
          </button>
        </div>
      </Content>
      <SliderButtons>
        <div />
        <div />
        <div className="active" />
        <div />
      </SliderButtons>
    </Container>
  );
}
