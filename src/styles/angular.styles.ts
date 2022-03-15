// Dependencies
import styled from 'styled-components';

// Components
import { TauPage } from 'tauix/react';

export const UsageAngularContainer = styled(TauPage)`
  padding-top: 120px;

  overflow-y: auto;

  a {
    display: block;
    width: fit-content;
  }

  main {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 17px 67px;

    @media (max-width: 600px) {
      padding: 17px 25px;
    }

    @media (max-width: 600px) {
      padding: 17px;
    }

    h1 {
      font-size: 1.3em;
      color: var(--tau-primary);
    }

    > p {
      font-size: 0.93em;
      color: var(--tau-text);
    }

    > div > div {
      padding: 30px 0px;

      &:not(:last-child) {
        padding-bottom: 0px;
      }

      h3 {
        font-size: 1.1em;

        color: var(--tau-text-2);
        margin-bottom: 10px;
      }

      p,
      a {
        font-size: 0.85em;
        color: var(--tau-text);
        margin-bottom: 6px;
      }

      pre {
        max-width: 900px;
        margin: 15px 0px;
        border-radius: 5px;

        & {
          font-size: 0.85em;
        }
      }

      tau-button {
        cursor: pointer;
      }
    }
  }
`;

