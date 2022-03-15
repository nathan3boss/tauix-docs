// Dependencies
import styled from 'styled-components';

// Components
import { TauFlex } from 'tauix/react';

export const AppBarWrapper = styled(TauFlex)`
  width: 100%;
  min-height: 60px;
  padding: 17px 55px;

  background-color: var(--tau-header);
  backdrop-filter: saturate(180%) blur(20px);

  justify-content: space-between;
  position: fixed;
  top: 0px;
  right: 0px;

  z-index: 10;

  @media (max-width: 600px) {
    padding: 17px 25px;
  }

  @media (max-width: 600px) {
    padding: 17px;
  }

  > svg {
    width: 50px;
    height: 50px;

    color: var(--tau-primary);

    cursor: pointer;
  }

  tau-drawer {
    section {
      width: 300px;
    }
  }

  tau-flex {
    tau-ripple {
      --tau-ripple: var(--tau-primary);

      &:not(:last-child) {
        margin-right: 15px;
      }

      @media (max-width: 426px) {
        display: none;
      }
    }

    span {
      display: block;

      font-size: 0.875em;
      font-weight: 500;
      cursor: pointer;
      color: var(--tau-text);

      position: relative;

      span {
        width: 8px;
        height: 8px;

        position: absolute;
        top: 0px;
        left: -15px;
        border-radius: 100%;

        background: transparent;

        transition: all 0.3s;
      }

      &.active {
        color: var(--tau-primary);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }

      &:hover {
        span {
          background: var(--tau-primary);
        }
      }

      @media (max-width: 600px) {
        display: none;
      }
    }

    div:first-child {
      display: grid;
      place-items: center;

      width: 34px;
      height: 34px;

      background: transparent;
      border: 1px solid var(--tau-border);
      border-radius: 5px;
      transition: all 0.15s;
      cursor: pointer;

      tau-icon, svg {
        color: var(--tau-text);
      }

      svg {
        width: 20px;
        height: 20px;
      }

      &:hover {
        border-color: var(--tau-primary);
      }
    }

    > tau-icon {
      width: 27px;
      height: 27px;

      color: var(--tau-text);
      cursor: pointer;

      display: none;

      @media (max-width: 600px) {
        display: block;
      }
    }
  }
`;
