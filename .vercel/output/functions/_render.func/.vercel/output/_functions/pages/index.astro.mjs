/* empty css                                */
import { O as createAstro, Q as createComponent, $ as renderComponent, a6 as renderTemplate, Z as maybeRenderHead } from '../chunks/astro/server_B-Hurx3O.mjs';
import 'kleur/colors';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Image, GridRenderer, GridRenderingType } from '@crystallize/reactjs-components';
import { $ as $$Layout } from '../chunks/Layout_C7GbpmgE.mjs';
import { a as apiClient } from '../chunks/shared_vBvdt9Eh.mjs';
export { renderers } from '../renderers.mjs';

const TopicsDisplayer = ({
  topics
}) => {
  return /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: topics?.map((topic) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "text-sm bg-grey px-3 py-1 rounded-xl",
      children: topic.name
    },
    topic.name
  )) });
};

const GridItem = ({ cell }) => {
  return cell.layout.colspan === 3 ? /* @__PURE__ */ jsx("a", { href: cell.item?.path, children: /* @__PURE__ */ jsxs("div", { className: "flex relative lg:flex-row flex-col", children: [
    /* @__PURE__ */ jsx(
      Image,
      {
        ...cell.item?.variants?.[0]?.images?.[0],
        sizes: "(max-width: 700px) 300px, 500px",
        className: "lg:absolute lg:top-0 bottom-0 lg:right-0 lg:w-8/12 overflow-hidden rounded-r-xl"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-evenly lg:w-128 px-5 bg-background1 h-80 p-5 rounded-xl w-full lg:items-start items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-60 lg:text-left text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: cell.item?.name }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
          "$",
          cell.item?.variants[0]?.price
        ] })
      ] }),
      /* @__PURE__ */ jsx(TopicsDisplayer, { topics: cell.item?.topics })
    ] })
  ] }) }) : /* @__PURE__ */ jsx("a", { href: cell.item.path, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-background3 px-5 py-7 rounded-xl xl:h-[600px] p-5  w-full h-auto min-h-[400px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsx(TopicsDisplayer, { topics: cell.item.topics }),
      /* @__PURE__ */ jsxs("p", { className: "self-end", children: [
        "$",
        cell.item.variants[0]?.price
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Image,
      {
        ...cell.item?.variants?.[0]?.images?.[0],
        sizes: "(max-width: 700px) 200px, 300px",
        loading: "lazy",
        className: "mx-auto"
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-center w-40 m-auto", children: cell.item.name })
  ] }) });
};

const Grid = ({ grid }) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    GridRenderer,
    {
      grid: grid?.content?.grids?.[0],
      type: GridRenderingType.Div,
      cellComponent: ({ cell, index }) => {
        return /* @__PURE__ */ jsx(GridItem, { cell }, index);
      },
      style: {
        gridGap: "1rem"
      }
    }
  ) });
};

const ProductCard = ({ product }) => {
  const isBundle = product?.bundle?.content?.value;
  const priceVariant = {
    price: product?.defaultVariant.priceVariant.price,
    currency: product?.defaultVariant.priceVariant.currency
  };
  const image = product?.defaultVariant.firstImage;
  return /* @__PURE__ */ jsx(Fragment, { children: !isBundle && /* @__PURE__ */ jsx(
    "a",
    {
      href: product?.path,
      className: "flex flex-col lg:bg-primary rounded-xl lg:h-96 p-5 lg:w-[300px] bg-background2 w-full",
      children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsx(TopicsDisplayer, { topics: product?.topics }),
          /* @__PURE__ */ jsxs("p", { className: "self-end", children: [
            priceVariant?.currency === "USD" ? "$" : priceVariant?.currency,
            priceVariant?.price
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Image,
          {
            ...image,
            sizes: "(max-width: 700px) 200px, 300px",
            loading: "lazy",
            className: "mx-auto"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-center m-auto w-40", children: product?.name })
      ] })
    }
  ) });
};

const Products = ({
  donuts
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "mt-20", children: [
    /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold mb-10", children: "Our do(u)nuts" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-5", children: donuts?.children?.map((donut, index) => /* @__PURE__ */ jsx(ProductCard, { product: donut }, index)) })
  ] });
};

async function fetchFrontPage(path, version) {
  try {
    return await apiClient.catalogueApi(
      `
               #graphql
                query($path: String!, $version: VersionLabel) {
                    catalogue(path: $path, language: "en", version: $version) {
                      meta: component(id: "meta") {
                        content {
                          ... on ContentChunkContent {
                            chunks {
                              content {
                                ... on SingleLineContent {
                                  text
                                }
                                ... on RichTextContent {
                                  plainText
                                }
                                ... on ImageContent {
                                  firstImage {
                                    variants {
                                      url
                                      key
                                      width
                                      height
                                    }
                                    altText
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      grid: component(id: "grid") {
                        content {
                          ... on GridRelationsContent {
                            grids {
                              rows {
                                columns {
                                  layout {
                                    rowspan
                                    colspan
                                  }
                                  item {
                                    name
                                    path
                                    topics {
                                      name
                                    }
                                    ... on Product {
                                      variants {
                                        images {
                                          variants {
                                            url
                                            key
                                            width
                                            height
                                          }
                                          altText
                                        }
                                        price
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    donuts: catalogue(path: "/shop", language: "en") {
                      children {
                        id
                        topics {
                          name
                        }
                        bundle: component(id: "bundle") {
                          content {
                            ... on BooleanContent {
                              value
                            }
                          }
                        }
                        ... on Product {
                          __typename
                          name
                          path
                          topics {
                            name
                          }
                          defaultVariant {
                            firstImage {
                              variants {
                                url
                                key
                                width
                                height
                              }
                              altText
                            }
                            priceVariant(identifier: "default") {
                              price
                              currency
                            }
                          }
                        }
                      }
                    }
                  }
                  
            `,
      {
        path,
        version
      }
    );
  } catch (error) {
    throw error;
  }
}

const $$Astro = createAstro("https://dounut-astro.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const data = await fetchFrontPage("/frontpage", "published");
  const { catalogue, donuts } = data;
  const { grid } = catalogue;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dounot", "description": "Dounut is a minimal boilerplate built using AstroJS that helps you get started with Crystallize." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-10 lg:container mx-auto w-full md:px-0 px-3"> ${renderComponent($$result2, "Grid", Grid, { "grid": grid })} ${renderComponent($$result2, "Products", Products, { "donuts": donuts })} </div> ` })}`;
}, "D:/e.keren/dounut-astro/src/pages/index.astro", void 0);

const $$file = "D:/e.keren/dounut-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
