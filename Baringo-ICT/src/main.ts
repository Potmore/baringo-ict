import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



// Create Vue app instance
const app = createApp(App);

// Use plugins
app.use(createPinia()); // Pinia for state management
app.use(router); // Vue Router for navigation

// Mount the app
app.mount("#app");
