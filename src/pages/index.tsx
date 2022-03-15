// Dependencies
import Link from 'next/link';
import Head from 'next/head';

// Components
import { TauButton } from 'tauix/react';
import Header from '../components/appbar';

// Styles
import { IndexWrapper } from '../styles/index.styles';

// Assets
import Line from '../assets/grid.svg';

const Index = () => {
  return (
    <IndexWrapper>
      <Header />

      <Head>
        <title>Tau UI</title>
      </Head>

      <main>
        <h1>Tau UI</h1>

        <p>UI Web Components Library - Fast and Customizable</p>

        <Link href="/get-started">
          <TauButton bold="600">GET STARTED</TauButton>
        </Link>

        <Line />
      </main>
    </IndexWrapper>
  );
};

export default Index;
