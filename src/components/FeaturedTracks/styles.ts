import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import { motion } from 'framer-motion';

export const Container = styled.div`
  > h1 {
    margin: 1.62rem 0 0.81rem 0;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const Scroll = styled(ScrollContainer)`
  overflow: hidden;
  display: flex;
`;
export const AnimationContainer = styled(motion.div)``;

export const Card = styled(motion.div)`
  cursor: grab;
  > strong {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 0.875rem;
  }

  > p {
    font-size: 0.625rem;
    line-height: 0.875rem;
    color: var(--blackWithOpacity);
    margin-top: 4px;
  }
  & + div {
    margin-left: 1.25rem;
  }
`;
