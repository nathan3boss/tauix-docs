// Dependencies
import styled from 'styled-components';

// Components
import { TauPage } from 'tauix/react';

export const GetStartedContainer = styled(TauPage)`
  padding-top: 120px;

  overflow-y: auto;

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

      margin-bottom: 14px;
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
        margin-top: 15px;
        border-radius: 5px;
        max-width: 400px;

        & {
          font-size: 0.85em;
        }
      }

      a {
        width: fit-content;
        display: block;
        margin-top: 3px;
        word-break: break-all;
        transition: all 0.3s;

        &:first-child {
          margin-top: 15px;
        }

        &:hover {
          color: var(--tau-primary);
        }
      }
    }

    section {
      padding: 30px 0px;
      padding-top: 10px;

      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      --tau-ripple: var(--tau-primary);

      div {
        width: 130px;
        height: 100px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        gap: 10px;

        svg {
          width: 30px;
          height: 30px;
        }

        &::selection {
          background: transparent;
        }

        font-size: 0.875em;
        color: var(--tau-text-2);

        border: 1px solid var(--tau-border);
        border-radius: var(--tau-radius);
        transition: all 0.15s;

        &:hover {
          transition: all 0.3s;
          border-color: var(--tau-primary);
        }
      }
    }
  }
`;
