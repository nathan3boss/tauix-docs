// Dependencies
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppProps } from 'next/app';

// Components
import { TauTheme } from 'tauix/react';

// Utils
import wrapper, { APP } from '../store/store';
import { setTheme } from '../store/actions/actions';

// Styles
import { GlobalStyle } from '../global';
import { Themes } from '../global/themes';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: APP) => state);

  const toggleTheme = (e: CustomEvent) => dispatch(setTheme(e.detail.current));

  return (
    <TauTheme theme={theme} onTauLimn={toggleTheme}>
      <Component {...pageProps} />

      <Themes />

      <GlobalStyle />
    </TauTheme>
  );
};

export default wrapper.withRedux(App);
