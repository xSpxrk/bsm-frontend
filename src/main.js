import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router.js';
import components from '@/components/UI';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});
app.use(VueSweetalert2);
app.use(router).mount('#app')
