import { O as createAstro, Q as createComponent, B as addAttribute, a6 as renderTemplate, $ as renderComponent, a1 as renderHead, a4 as renderSlot } from './astro/server_B-Hurx3O.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */
import { jsxs, jsx } from 'react/jsx-runtime';

const $$Astro$1 = createAstro("https://dounut-astro.vercel.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/e.keren/dounut-astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const Background = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 2035 3000",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "w-full h-full",
      children: [
        /* @__PURE__ */ jsx("rect", { y: "1017", width: "2035", height: "100%", fill: "#FEE8F0" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2034.81 1017.41C2034.81 747.573 1927.62 488.792 1736.82 297.991C1546.02 107.191 1287.24 2.03718e-05 1017.41 0C747.573 -2.03718e-05 488.792 107.191 297.991 297.991C107.191 488.792 4.07436e-05 747.573 0 1017.41L1017.41 1017.41H2034.81Z",
            fill: "#FEE8F0"
          }
        )
      ]
    }
  );
};

const CrystallizeLogo = "data:image/svg+xml,%3csvg%20width='15'%20height='23'%20viewBox='0%200%2015%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1613_149)'%3e%3cpath%20d='M11.9496%209.78688L8.70777%2022.3362L4.52246%2019.6662L7.76465%200L12.4946%207.68281L11.9496%209.78688Z'%20fill='%23BFF6F8'/%3e%3cpath%20d='M2.98219%2010.1663L1.86531%2017.9688L1.23656%2017.5685L0%208.49414L2.98219%2010.1663Z'%20fill='%23DFFAFB'/%3e%3cpath%20d='M6.52409%204.97727L4.14315%2019.4232L2.24878%2018.2141L4.57284%201.97852L6.52409%204.97727Z'%20fill='%23CFF8FA'/%3e%3cpath%20d='M15.0535%209.22314L12.371%2019.5616L10.5938%2021.0328L9.17725%2022.1769L12.2057%2010.4535L15.0535%209.22314Z'%20fill='%23ACF3F6'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1613_149'%3e%3crect%20width='15'%20height='22.1875'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const $$Astro = createAstro("https://dounut-astro.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative text-text bg-primary"> ${renderComponent($$result, "Header", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/e.keren/dounut-astro/src/components/header", "client:component-export": "Header" })} ${renderSlot($$result, $$slots["default"])} ${pathname === "/cart" || pathname === "/checkout" || pathname.startsWith("/order") ? null : renderTemplate`<div class="absolute inset-0 bg-fixed -z-10"> ${renderComponent($$result, "Background", Background, {})} </div>`} <footer class="container mt-40 mx-auto pb-10"> <div class="flex mt-10  w-full text-center justify-end"> <div class="flex items-center gap-1 mt-10"> <img${addAttribute(CrystallizeLogo, "src")} alt="Crystallize" class="w-5">
Powered by <a href="https://crystallize.com" class="underline">
Crystallize</a> + <a href="https://astro.build" class="underline">Astro</a> </div> </div> </footer>  </body> </html>`;
}, "D:/e.keren/dounut-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
