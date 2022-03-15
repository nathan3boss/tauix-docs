// Dependencies
import { useState } from 'react';
import { useRouter } from 'next/router';
import { TauDrawer, TauFlex, TauIcon, TauRipple } from 'tauix/react';

// Components
import { useDispatch, useSelector } from 'react-redux';

// Styles
import { AppBarWrapper } from './styles';

// Utils
import { setTheme } from '../../store/actions/actions';
import { APP } from '../../store/store';

// Assets
import Tauix from '../../assets/tauix.svg';
import Discord from '../../assets/discord.svg';
import Github from '../../assets/github.svg';

const links = [
  {
    path: '/get-started',
    title: 'Get Started',
  },
  {
    path: '/components',
    title: 'Components',
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [drawer, setDrawer] = useState(false);

  const { theme } = useSelector((state: APP) => state);

  const toggleTheme = (e: string) => dispatch(setTheme(e));

  const toggleDrawer = () => setDrawer(!drawer);

  return (
    <AppBarWrapper>
      <Tauix onClick={() => router.push('/')} />

      <TauDrawer open={drawer} onTauClose={toggleDrawer}>
        <section></section>
      </TauDrawer>

      <TauFlex>
        {links.map(({ title, path }) => (
          <span
            key={path}
            onClick={() => router.push(path)}
            className={router.pathname.includes(path) ? 'active' : ''}
          >
            <span />

            {title}
          </span>
        ))}

        <TauRipple
          onClick={() =>
            toggleTheme(theme == 'tau-light' ? 'tau-dark' : 'tau-light')
          }
        >
          <div>
            <TauIcon
              fill="solid"
              name={theme == 'tau-light' ? 'moon' : 'sun'}
            />
          </div>
        </TauRipple>

        <TauRipple
          onClick={() => window.open('https://github.com/tauix-org/tauix')}
        >
          <div>
            <Github />
          </div>
        </TauRipple>

        <TauRipple onClick={() => window.open('https://discord.gg/yy8U7VQsch')}>
          <div>
            <Discord />
          </div>
        </TauRipple>

        <TauIcon onClick={toggleDrawer} fill="outline" name="menu-alt-3" />
      </TauFlex>
    </AppBarWrapper>
  );
};

export default Header;
