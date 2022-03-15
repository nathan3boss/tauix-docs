// Dependencies
import styled from 'styled-components';

// Components
import { TauPage } from 'tauix/react';

export const IndexWrapper = styled(TauPage)`
  position: relative;

  @media (max-width: 600px) {
    padding: 17px 20px;
  }

  padding-top: 120px;

  main {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    h1 {
      font-size: 2.3em;
      color: var(--tau-primary);

      margin-bottom: 25px;
    }

    p {
      color: var(--tau-text);
      font-size: 0.89em;
      margin-bottom: 20px;
      text-align: center;
    }

    svg {
      width: 100vw;
      height: 100vh;

      position: absolute;
      top: 0px;
      left: 0px;

      pointer-events: none;
      color: var(--tau-primary);

      opacity: 0.06;
    }

    a {
      text-decoration: none;
    }

    svg {
      cursor: pointer;
    }

    tau-button {
      cursor: pointer;
    }
  }
`;
