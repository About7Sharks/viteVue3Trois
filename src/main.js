import { createApp } from 'vue'
// Main Component
import Root from './App.vue'
import { TroisJSVuePlugin } from 'troisjs';
// New vue3 create app with root component
const app = createApp(Root)
// Add plugin
app.use(TroisJSVuePlugin);
// Mount app to #app div
app.mount('#app')
