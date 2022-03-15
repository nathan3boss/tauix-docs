// Dependencies
import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github, paraisoDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// Components
import { TauButton } from 'tauix/react';
import Header from '../../components/appbar';

// Styles
import { UsageReactContainer } from '../../styles/react.styles';

// Utils
import { APP } from '../../store/store';
import { javascriptUsage, reactUsage, reactUsageStyles } from '../../utils';

const UsageReact = () => {
  const { theme } = useSelector((state: APP) => state);

  return (
    <UsageReactContainer>
      <Header />

      <Head>
        <title>Tau UI | Usage in JavaScript</title>
      </Head>

      <main>
        <h1>Usage in JavaScript</h1>

        <div>
          <div>
            <h3>Configure via cdn</h3>

            <p>
              ...simple
            </p>

            <SyntaxHighlighter
              language="html"
              style={theme == 'tau-light' ? github : paraisoDark}
            >
              {javascriptUsage}
            </SyntaxHighlighter>

            <Link href="/components">
              <TauButton size="small" variant="outline">
                Get Components
              </TauButton>
            </Link>
          </div>
        </div>
      </main>
    </UsageReactContainer>
  );
};

export default UsageReact;
