import React from 'react';
import { PlayerPic } from '../../assets/albums';
import {
  ListIcon,
  LoadingIcon,
  OptionsIcon,
  BackwardIcon,
  PauseIcon,
  ForwardIcon,
  LouderIcon,
  WindowIcon,
} from '../../assets/icons';

import {
  Container,
  SongInfo,
  PlayerOptions,
  PlayButton,
  Timer,
  ProgressBar,
} from './styles';

export function Player(): React.ReactElement {
  return (
    <Container>
      <SongInfo>
        <PlayerPic />
        <div>
          <strong>Kamelia</strong>
          <p>
            Akcent ft Lidia <br /> Bubble&DDY Nunes
          </p>
        </div>

        <button type="button">
          <ListIcon />
        </button>
      </SongInfo>
      <PlayerOptions>
        <div>
          <button type="button">
            <LoadingIcon />
          </button>

          <button type="button">
            <OptionsIcon />
          </button>
        </div>

        <div>
          <button type="button">
            <BackwardIcon />
          </button>

          <PlayButton type="button">
            <span>
              <PauseIcon />
            </span>
          </PlayButton>

          <button type="button">
            <ForwardIcon />
          </button>
        </div>

        <Timer>
          <time>02:53</time>
          <ProgressBar />
          <time>03:29</time>
        </Timer>

        <div>
          <button type="button">
            <LouderIcon />
          </button>

          <button type="button">
            <WindowIcon />
          </button>
        </div>
      </PlayerOptions>
    </Container>
  );
}
