/* empty css                                   */
import { O as createAstro, Q as createComponent, $ as renderComponent, a6 as renderTemplate, Z as maybeRenderHead } from '../../chunks/astro/server_B-Hurx3O.mjs';
import 'kleur/colors';
import { a as apiClient } from '../../chunks/shared_vBvdt9Eh.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { $ as $$Layout } from '../../chunks/Layout_DL_lBRAM.mjs';
export { renderers } from '../../renderers.mjs';

async function getOrderById(id) {
  return await apiClient.orderApi(
    `#graphql
        query($id: ID!) {
          orders {
            get(id: $id) {
              id
              cart {
                name
                quantity
                price {
                  gross
                }
              }
              total {
                net
                gross
              }
            }
          }
        }  
    `,
    {
      id
    }
  );
}

const Order = ({ order }) => {
  const { total } = order;
  return /* @__PURE__ */ jsx("div", { className: "lg:w-auth lg:p-20 bg-background3 mx-auto mt-20 text-text w-full p-10", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-3xl mb-6", children: "Order Confirmation" }),
    /* @__PURE__ */ jsxs("p", { className: "mb-5", children: [
      "We have received your order #",
      order.id,
      "."
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      order?.cart.map((item, index) => {
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex justify-between mb-4",
            children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
                item.name,
                " x ",
                item.quantity
              ] }) }),
              /* @__PURE__ */ jsxs("p", { children: [
                "$",
                item.price.gross * item.quantity
              ] })
            ]
          },
          index
        );
      }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 border-t-2 pt-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("p", { children: "Subtotal" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "$",
            total.gross
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("p", { children: "Tax" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "$",
            total.net - total.gross
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Total" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "$",
            total.net
          ] })
        ] })
      ] })
    ] })
  ] }) });
};

const $$Astro = createAstro("https://dounut-astro.vercel.app");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const data = id ? await getOrderById(id) : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Order", "description": "Details of your dounut order." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:container mx-auto w-full lg:px-0 px-4"> ${data ? renderTemplate`${renderComponent($$result2, "Order", Order, { "order": data?.orders?.get })}` : renderTemplate`<h1>Oops! Order not found.</h1>`} </div> ` })}`;
}, "D:/e.keren/dounut-astro/src/pages/order/[id].astro", void 0);

const $$file = "D:/e.keren/dounut-astro/src/pages/order/[id].astro";
const $$url = "/order/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
