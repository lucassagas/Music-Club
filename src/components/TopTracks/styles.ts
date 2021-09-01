import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  > h1 {
    margin: 1.62rem 0 0.81rem 0;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const Table = styled(motion.table)`
  width: 100%;

  tr {
    text-align: left;
  }

  .active {
    background: #ffffff;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  th {
    :first-child {
      padding-left: 1rem;
    }
  }

  td {
    color: var(--blackWithOpacity);
    height: 40px;

    :first-child {
      padding-left: 1rem;

      svg {
        margin-left: 2.56rem;
      }
    }

    :last-child {
      max-width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;
