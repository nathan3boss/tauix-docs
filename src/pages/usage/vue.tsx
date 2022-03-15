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
import { UsageVueContainer } from '../../styles/vue.styles';

// Utils
import { APP } from '../../store/store';
import { vue2Usage, vue2UsageConfigure, vue3Usage } from '../../utils';

const UsageVue = () => {
  const { theme } = useSelector((state: APP) => state);

  return (
    <UsageVueContainer>
      <Header />

      <Head>
        <title>Tau UI | Usage in React</title>
      </Head>
      
      <main>
        <h1>Usage in Vue 2</h1>

        <div>
          <div>
            <h3>Define the components</h3>

            <p>
              To use tauix within the Vue application, the application must be
              modified to define the custom elements and tell the Vue compiler
              which elements to ignore during compilation.
            </p>

            <SyntaxHighlighter
              language="javascript"
              style={theme == 'tau-light' ? github : paraisoDark}
            >
              {vue2UsageConfigure}
            </SyntaxHighlighter>
          </div>

          <div>
            <h3>Configure a theme</h3>

            <p>
              Now that you have configured the vue app, you need to configure
              the theme, in order to use the available components.
            </p>

            <SyntaxHighlighter
              language="vue"
              style={theme == 'tau-light' ? github : paraisoDark}
            >
              {vue2Usage}
            </SyntaxHighlighter>
          </div>
        </div>

        <h1>Usage in Vue 3</h1>

        <div>
          <div>
            <h3>Configure a theme</h3>

            <p>
              Here you just need to configure the theme, and use the available
              components.
            </p>

            <SyntaxHighlighter
              language="vue"
              style={theme == 'tau-light' ? github : paraisoDark}
            >
              {vue3Usage}
            </SyntaxHighlighter>

            <Link href="/components">
              <TauButton size="small" variant="outline">
                Get Components
              </TauButton>
            </Link>
          </div>
        </div>
      </main>
    </UsageVueContainer>
  );
};

export default UsageVue;
