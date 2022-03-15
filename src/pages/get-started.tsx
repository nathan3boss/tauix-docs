// Dependencies
import { useRouter } from 'next/router';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useSelector } from 'react-redux';
import {
  github,
  paraisoDark,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// Components
import { TauIcon, TauRipple } from 'tauix/react';
import Header from '../components/appbar';

// Styles
import { GetStartedContainer } from '../styles/get-started.styles';

// Utils
import { APP } from '../store/store';

// Assets
import JavaScript from '../assets/js.svg';
import React from '../assets/react.svg';
import Angular from '../assets/angular.svg';
import Vue from '../assets/vue.svg';
import Head from 'next/head';

const GetStarted = () => {
  const router = useRouter();

  const { theme } = useSelector((state: APP) => state);

  const techs = [
    {
      title: 'JavaScript',
      icon: <JavaScript />,
    },
    {
      title: 'React',
      icon: <React />,
    },
    {
      title: 'Angular',
      icon: <Angular />,
    },
    {
      title: 'Vue',
      icon: <Vue />,
    },
  ];

  return (
    <GetStartedContainer>
      <Head>
        <title>Tau UI | Get Started</title>
      </Head>

      <Header />

      <main>
        <h1>Installation</h1>

        <p>Tau UI is available for installation on npm and via cdn</p>

        <div>
          <div>
            <h3>NPM</h3>

            <p>To install and save in your package.json dependencies, run:</p>

            <SyntaxHighlighter
              language="bash"
              style={theme == 'tau-light' ? github : paraisoDark}
            >
              {`// with npm\n\nnpm install tauix\n\n// with yarn\n\nyarn add tauix`}
            </SyntaxHighlighter>
          </div>

          <div>
            <h3>CDN</h3>
            <p>Below is the cdns for installation:</p>

            <div>
              <a
                href="https://cdn.jsdelivr.net/npm/tauix/stencil/loader/index.es2017.js"
                target="_blank"
              >
                https://cdn.jsdelivr.net/npm/tauix/stencil/loader/index.es2017.js
              </a>
              <a
                href="https://cdn.jsdelivr.net/npm/tauix/core/themes/themes.css"
                target="_blank"
              >
                https://cdn.jsdelivr.net/npm/tauix/core/themes/themes.css
              </a>
            </div>
          </div>
        </div>

        <h1>Usage in</h1>

        <section>
          {techs.map(({ icon, title }) => (
            <TauRipple
              key={title}
              onClick={() => router.push(`/usage/${title.toLocaleLowerCase()}`)}
            >
              <div>
                {icon}

                {title}
              </div>
            </TauRipple>
          ))}
        </section>
      </main>
    </GetStartedContainer>
  );
};

export default GetStarted;
