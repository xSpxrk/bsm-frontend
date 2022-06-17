import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router.js';
import components from '@/components/UI';
import VueSweetalert2 from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import titleMixin from '@/mixins/titleMixin';
import VueTheMask from 'vue-the-mask'
import vSelect from "vue-select";
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});
app.component("v-select", vSelect)
app.use(VueTheMask)
app.mixin(titleMixin)
app.use(router).mount('#app')
