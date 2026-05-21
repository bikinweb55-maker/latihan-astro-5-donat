import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CvBxsRPA.mjs';
import { manifest } from './manifest_BKDfxvLK.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/cart.astro.mjs');
const _page2 = () => import('./pages/checkout.astro.mjs');
const _page3 = () => import('./pages/order/create.astro.mjs');
const _page4 = () => import('./pages/order/_id_.astro.mjs');
const _page5 = () => import('./pages/shop/_product_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cart.astro", _page1],
    ["src/pages/checkout.astro", _page2],
    ["src/pages/order/create.ts", _page3],
    ["src/pages/order/[id].astro", _page4],
    ["src/pages/shop/[product].astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "353826df-5930-4ede-a920-fc4f231c8a78",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
