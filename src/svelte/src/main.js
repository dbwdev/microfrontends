// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

// export default app;

import singleSpaSvelte from 'single-spa-svelte';
import myRootSvelteComponent from './app.svelte';

const svelteLifecycles = singleSpaSvelte({
  component: myRootSvelteComponent,
  domElementGetter: () => document.getElementById('svelte'),
  props: { someData: 'data' }
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
