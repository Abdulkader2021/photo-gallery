require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp, Link, Head, Form } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from "@/Shared/Layout";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${appName} - ${title}`,
    resolve: async name => {
      let page = (await require(`./Pages/${name}`)).default;
      page.layout ??= Layout;
      return page;
    },

    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
