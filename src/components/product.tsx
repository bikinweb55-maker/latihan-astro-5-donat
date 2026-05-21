import { useEffect, useState } from "react";

function formatPrice(currency = "EUR", price = 0) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price);
}

function getDefaultPrice(priceVariants: any[] = []) {
  return priceVariants.find((v) => v?.identifier === "default");
}

function mapCartItem(product: any) {
  const price = getDefaultPrice(product?.priceVariants ?? []);

  return {
    sku: product?.sku,
    name: product?.name,
    quantity: 1,
    price: price?.price ?? 0,
    image: product?.images?.[0]?.url,
    attributes: product?.attributes ?? [],
  };
}

/*
FIX UTAMA
menghindari:
Cannot read properties of null (reading 'forEach')
*/
function reduceAttributes(variants: any[] = []) {
  return variants.reduce((acc, variant) => {
    const attrs = variant?.attributes ?? [];

    attrs.forEach((item: any) => {
      if (!item) return;

      const key = item.attribute;
      const value = item.value;

      if (!key) return;

      if (!acc[key]) {
        acc[key] = [value];
      } else if (!acc[key].includes(value)) {
        acc[key].push(value);
      }
    });

    return acc;
  }, {} as Record<string, string[]>);
}

function getSelectedAttributes(variant: any) {
  const attrs = variant?.attributes ?? [];

  return Object.assign(
    {},
    ...attrs.map((x: any) => ({
      [x.attribute]: x.value,
    }))
  );
}

function VariantSelector({
  variants = [],
  selectedVariant,
  onVariantChange,
}: any) {
  const attributes = reduceAttributes(variants);

  function change(attribute: string, value: string) {
    const current = getSelectedAttributes(selectedVariant);

    current[attribute] = value;

    const found = variants.find((v: any) => {
      const vAttrs = getSelectedAttributes(v);

      return JSON.stringify(vAttrs) === JSON.stringify(current);
    });

    if (found) {
      onVariantChange(found);
    }
  }

  return (
    <div>
      {Object.keys(attributes).map((key) => {
        const values = attributes[key];

        return (
          <div key={key} className="mb-4">
            <p className="font-semibold mb-2">{key}</p>

            <div className="flex gap-2 flex-wrap">
              {values.map((value) => (
                <button
                  key={value}
                  type="button"
                  className="px-3 py-2 border rounded"
                  onClick={() => change(key, value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const Product = ({ product }: any) => {
  const variants = product?.variants ?? [];

  const [selected, setSelected] = useState(
    variants?.[0] ?? {}
  );

  const [cart, setCart] = useState<any[]>([]);

  const price = getDefaultPrice(
    selected?.priceVariants ?? []
  );

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");

      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );
    } catch {}
  }, [cart]);

  function addToCart() {
    setCart((old) => [
      ...old,
      mapCartItem(selected),
    ]);
  }

  return (
    <div className="mt-10">

      <h1 className="text-5xl font-bold mb-5">
        {product?.name}
      </h1>

      <VariantSelector
        variants={variants}
        selectedVariant={selected}
        onVariantChange={setSelected}
      />

      <div className="mt-10">
        <p className="font-bold">
          {formatPrice(
            price?.currency,
            price?.price
          )}
        </p>

        <button
          onClick={addToCart}
          className="mt-4 px-5 py-3 rounded bg-black text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};