/*jshint esversion: 8 */
/*jshint -W030 */

import $ from 'jquery';
window.$ = $;

// Foundation (NOTE: Adjust settings in _foundation-settings.scss)
import './foundation/foundation.js';
import "./foundation/foundation.scss";
import 'motion-ui';

// Application specific.
import App from './App.vue';
import router from './router';
import titleMixin from './mixins/titleMixin';
import verbageMixin from './mixins/verbageMixin';

import './utils/swipefix.js';

import { createApp } from 'vue';

const Vue = createApp(App);

Vue.use(router);
Vue.mixin(titleMixin);
Vue.mixin(verbageMixin);
Vue.mount('#app');
