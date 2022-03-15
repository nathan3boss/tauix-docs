// Dependencies
import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  github,
  dracula,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// Components
import { TauButton } from 'tauix/react';
import Header from '../../components/appbar';

// Styles
import { UsageAngularContainer } from '../../styles/angular.styles';

// Utils
import { APP } from '../../store/store';
import {
  angularConfig,
  angularDefineComponents,
  angularTheme,
  angularThemeTemplate,
} from '../../utils';

const UsageAngular = () => {
  const { theme } = useSelector((state: APP) => state);

  return (
    <UsageAngularContainer>
      <Header />

      <Head>
        <title>Tau UI | Usage in Angular</title>
      </Head>

      <main>
        <h1>Usage in Angular</h1>

        <div>
          <div>
            <h3>Configure the application</h3>

            <p>
              To use tauix within the Angular application, the application must
              be modified to define the custom elements
            </p>

            <SyntaxHighlighter
              language="javascript"
              style={theme == 'tau-light' ? github : dracula}
            >
              {angularConfig}
            </SyntaxHighlighter>

            <h3>Define components</h3>

            <p>
              Now set the custom elements in the window and import css themes
              file default{' '}
            </p>

            <SyntaxHighlighter
              language="vue"
              style={theme == 'tau-light' ? github : dracula}
            >
              {angularDefineComponents}
            </SyntaxHighlighter>

            <h3>Configure a theme</h3>

            <p>
              Now that you have configured the angular app, you need to
              configure the theme, in order to use the available components.
            </p>

            <SyntaxHighlighter
              language="vue"
              style={theme == 'tau-light' ? github : dracula}
            >
              {angularTheme}
            </SyntaxHighlighter>

            <SyntaxHighlighter
              language="vue"
              style={theme == 'tau-light' ? github : dracula}
            >
              {angularThemeTemplate}
            </SyntaxHighlighter>

            <Link href="/components">
              <TauButton size="small" variant="outline">
                Get Components
              </TauButton>
            </Link>
          </div>
        </div>
      </main>
    </UsageAngularContainer>
  );
};

export default UsageAngular;
