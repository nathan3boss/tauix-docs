// Dependencies
import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github, dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// Components
import { TauButton } from 'tauix/react';
import Header from '../../components/appbar';

// Styles
import { UsageReactContainer } from '../../styles/react.styles';

// Utils
import { APP } from '../../store/store';
import { reactUsage, reactUsageStyles } from '../../utils';

const UsageReact = () => {
  const { theme } = useSelector((state: APP) => state);

  return (
    <UsageReactContainer>
      <Header />

      <Head>
        <title>Tau UI | Usage in React</title>
      </Head>

      <main>
        <h1>Usage in React</h1>

        <div>
          <div>
            <h3>Configure a theme</h3>

            <p>
              Now that you have installed the library, you need to configure the
              theme, in order to use the available components.
            </p>

            <SyntaxHighlighter
              language="javascript"
              style={theme == 'tau-light' ? github : dracula}
            >
              {reactUsage}
            </SyntaxHighlighter>

            <p>
              And finally we import the style files with the default theme, but
              you configure your own theme.
            </p>

            <SyntaxHighlighter
              language="javascript"
              style={theme == 'tau-light' ? github : dracula}
            >
              {reactUsageStyles}
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
