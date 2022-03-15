// Dependencies
import { createGlobalStyle } from 'styled-components';

export const Themes = createGlobalStyle`
  .tau-light {
    --tau-primary: #f48f3d;
    --tau-hover: #f48f3d;
    --tau-focus: #f48f3d;
    --tau-text: #707070;
    --tau-text-2: #3b3d4c;
    --tau-border: #cac9c9;
    --tau-placeholder: #999a9e;
    --tau-background: #ffffff;
    --tau-foreground: #ffeee3;
    --tau-header: rgb(249, 249, 249, 0.81);
    --tau-page: #fff;
    --tau-font-family: 'Ubuntu Mono', sans-serif;
    --tau-letter-spacing: 0.4px;
    --tau-font-size: 110%;
    --tau-radius: 5px;
  }

  .tau-dark {
    --tau-primary: #b26cf6;
    --tau-hover: #b26cf6;
    --tau-focus: #b26cf6;
    --tau-text: #e6e8f7;
    --tau-text-2: #f4f4f4;
    --tau-border: #3b3d4c;
    --tau-placeholder: #888cb0;
    --tau-header: rgba(20, 20, 33, 0.603);
    --tau-background: #1a1a22;
    --tau-foreground: #1f222f;
    --tau-page: #12121c;
    --tau-font-family: 'Ubuntu Mono', sans-serif;
    --tau-letter-spacing: 0.4px;
    --tau-font-size: 110%;
    --tau-radius: 5px;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--tau-placeholder);
  }
`;
