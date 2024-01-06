import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 掉落东西的插件 particles.vue3
import Particles from "@tsparticles/vue3";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";

const app = createApp(App);

app.use(ElementPlus).use(router).mount('#app')

app.use(Particles, {
    init: async (engine:any) => {
    //   await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
  });
