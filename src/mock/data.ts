import type { TemplateProps } from "../types/template.js";
import type { StorefrontConfig } from "../types/config.js";
import { DEFAULT_CONFIG } from "../types/config.js";

// Mock data for local template development.
// Use this to preview your template without a live SellHapi backend.
// import { MOCK_TEMPLATE_PROPS } from "@sellhapi/template-sdk/mock";

const MOCK_PRODUCTS = Array.from({ length: 12 }, (_, i) => ({
  id:           `product-${i + 1}`,
  name:         [
    "Linen Oversized Shirt",
    "High-Waist Cargo Trousers",
    "Ribbed Knit Midi Dress",
    "Classic White Sneakers",
    "Structured Tote Bag",
    "Gold Hoop Earrings",
    "Floral Wrap Skirt",
    "Cropped Blazer",
    "Printed Ankara Co-ord",
    "Leather Belt",
    "Platform Sandals",
    "Silk Slip Dress",
  ][i]!,
  slug:         `product-${i + 1}`,
  price:        [12500, 18000, 25000, 32000, 45000, 8500,
                 15000, 28000, 22000, 6500, 19500, 35000][i]!,
  comparePrice: i % 3 === 0
    ? [15000, 22000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0][i] ?? null
    : null,
  currency:     "NGN",
  imageUrl:     null,
  images:       [],
  isAvailable:  i !== 7,
  categoryId:   i < 4 ? "cat-tops" : i < 8 ? "cat-bottoms" : "cat-accessories",
}));

const MOCK_CATEGORIES = [
  { id: "cat-tops",         name: "Tops",         slug: "tops",
    imageUrl: null, position: 1 },
  { id: "cat-bottoms",      name: "Bottoms",       slug: "bottoms",
    imageUrl: null, position: 2 },
  { id: "cat-dresses",      name: "Dresses",       slug: "dresses",
    imageUrl: null, position: 3 },
  { id: "cat-accessories",  name: "Accessories",   slug: "accessories",
    imageUrl: null, position: 4 },
];

export function createMockTemplateProps(
  configOverrides: Partial<StorefrontConfig> = {}
): TemplateProps {
  return {
    vendor: {
      id:             "vendor-demo",
      storeSlug:      "demo-store",
      storeName:      "Amara Lagos",
      storeTagline:   "Effortless everyday style",
      description:    "Contemporary Nigerian fashion for the modern woman.",
      logoUrl:        null,
      bannerUrl:      null,
      email:          "hello@amaralagos.com",
      phone:          "+234 801 234 5678",
      address:        "Victoria Island, Lagos",
      activeTemplate: "default",
      socialLinks: {
        instagram: "https://instagram.com/amaralagos",
        twitter:   null,
        facebook:  null,
        tiktok:    "https://tiktok.com/@amaralagos",
        youtube:   null,
        whatsapp:  "2348012345678",
      },
      policies: {
        returns:  "Returns accepted within 14 days of delivery.",
        shipping: "Free delivery on orders above ₦30,000.",
        privacy:  null,
        terms:    null,
      },
    },

    config: { ...DEFAULT_CONFIG, ...configOverrides },

    homepage: {
      hasSections:    false,
      hasEnoughSales: true,
      sections:       [],
      autoBlocks: [
        {
          type:     "new_arrivals",
          title:    "New Arrivals",
          products: MOCK_PRODUCTS.slice(0, 8),
        },
        {
          type:     "top_sellers",
          title:    "Top Sellers",
          products: MOCK_PRODUCTS.slice(4, 12),
        },
      ],
      settings: {},
    },

    navigation: {
      categories:       MOCK_CATEGORIES,
      collections:      [],
      featuredCategory: MOCK_CATEGORIES[0]!,
    },

    announcements: [
      {
        id:       "ann-1",
        text:     "Free delivery on orders above ₦30,000 🎉",
        link:     null,
        isActive: true,
        bgColor:  null,
      },
    ],

    footer: {
      links: [
        { label: "About",    url: "/about"    },
        { label: "Contact",  url: "/contact"  },
        { label: "Shipping", url: "/shipping" },
      ],
      showPoweredBy: true,
    },
  };
}

// Default export — ready to use out of the box
export const MOCK_TEMPLATE_PROPS: TemplateProps =
  createMockTemplateProps();
