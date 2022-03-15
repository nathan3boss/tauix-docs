export const components = [
  {
    name: 'button',
  },

  {
    name: 'checkbox',
  },
  {
    name: 'switch',
  },
  {
    name: 'accordion',
  },
  {
    name: 'accordion',
  },
];

export const reactUsage = `// App.tsx\n
import React, { useState } from 'react';\n
import { TauTheme, TauButton } from 'tauix/react';\n

const App = () => {
  const [theme, setTheme] = useState('tau-light');
 
  const toggleTheme = (e: CustomEvent) => setTheme(e.detail.current));

  return(
     <TauTheme theme={theme} onTauLimn={toggleTheme}>
        <TauButton type="button">General</TauButton>
     </TauTheme>
  );
}

export default App;
  `;

export const reactUsageStyles = `// App.tsx\n
import 'tauix/core/themes/themes.css';
`;

export const vue2UsageConfigure = `// main.ts

import Vue from 'vue';

import App from './App.vue';

import { applyPolyfills, defineCustomElements } from 'tauix/stencil/loader';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/tau-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window, {
    ce: (eventName: string, opts: any) => {
      return new CustomEvent(
        eventName
          .split('')
          .map(e => (e == e.toUpperCase() ? '-' + e.toLocaleLowerCase() : e))
          .join(''),
        opts
      );
    },
  } as any);
});

new Vue({
  render: h => h(App)
}).$mount('#app');

`;

export const vue2Usage = `// App.vue

<template>
  <tau-theme v-bind:theme="theme" @tau-limn="toggleTheme">
    <tau-button>Entrar</tau-button>
  </tau-theme>
</template>

<script>
export default {
  data() {
    return {
      theme: "tau-light",
    };
  },
  methods: {
    toggleTheme(e) {
      this.theme = e.detail.current;
    },
  },
};
</script>

<style lang="scss">
@import "~tauix/core/themes/themes.css";
</style>
`;

export const vue3Usage = `// App.vue


<template>
  <TauTheme :theme="theme" @tau-limn="toggleTheme">
    <TauButton>Entrar</TauButton>
  </TauTheme>
</template>

<script>
import { TauTheme, TauButton } from "tauix/vue";

import "tauix/core/themes/themes.css";

export default {
  data() {
    return {
      theme: "tau-light",
    };
  },
  components: {
    TauTheme,
    TauButton,
  },
  methods: {
    toggleTheme(e) {
      this.theme = e.detail.current;
    },
  },
};
</script>
`;

export const angularConfig = `
// app.module.ts

import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
`;

export const angularTheme = `
// app.component.ts

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  theme: string = "tau-light";

  toggleTheme(e: CustomEvent) {
    this.theme = e.detail.current;
  }
}
`;

export const angularThemeTemplate = `
// app.component.html

<tau-theme theme="{{theme}}" (tauLimn)="toggleTheme($event)">
  <tau-button>Angular</tau-button>
</tau-theme>

`;

export const javascriptUsage = `
<html>
  <head>
    <link rel=¨stylesheet¨ type=¨text/css¨ href="https://cdn.jsdelivr.net/npm/tauix/core/themes/themes.css"/>

    <script type="module">
      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/tauix/stencil/loader/index.es2017.js';
      defineCustomElements();
    </script>
  </head>
  <body>
    <tau-theme>
      <tau-button>OOHHHH</tau-button>
    </tau-theme>
  </body>
</html>
`;

export const angularDefineComponents = `
// main.ts

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { applyPolyfills, defineCustomElements } from 'tauix/stencil/loader';

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

// CSS Themes
import "tauix/core/themes/themes.css";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

applyPolyfills().then(() => {
  defineCustomElements();
});

`;
