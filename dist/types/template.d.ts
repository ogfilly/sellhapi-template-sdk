import type { StorefrontConfig } from "./config.js";
export interface StoreProduct {
    id: string;
    name: string;
    slug: string;
    price: number;
    comparePrice: number | null;
    currency: string;
    imageUrl: string | null;
    images: string[];
    isAvailable: boolean;
    categoryId: string | null;
}
export interface StoreCategory {
    id: string;
    name: string;
    slug: string;
    imageUrl: string | null;
    position: number;
}
export interface StoreCollection {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    imageUrl: string | null;
}
export interface StoreSection {
    id: string;
    title: string;
    type: string;
    products: StoreProduct[];
    position: number;
}
export interface AutoBlock {
    type: "new_arrivals" | "top_sellers";
    title: string;
    products: StoreProduct[];
}
export interface StoreAnnouncement {
    id: string;
    text: string;
    link: string | null;
    isActive: boolean;
    bgColor: string | null;
}
export interface FooterLink {
    label: string;
    url: string;
}
export interface TemplateProps {
    vendor: {
        id: string;
        storeSlug: string;
        storeName: string;
        storeTagline: string | null;
        description: string | null;
        logoUrl: string | null;
        bannerUrl: string | null;
        bannerPosition: "top" | "center" | "bottom";
        email: string | null;
        phone: string | null;
        address: string | null;
        activeTemplate: string;
        socialLinks: {
            instagram?: string | null;
            twitter?: string | null;
            facebook?: string | null;
            tiktok?: string | null;
            youtube?: string | null;
            whatsapp?: string | null;
        };
        policies: {
            returns?: string | null;
            shipping?: string | null;
            privacy?: string | null;
            terms?: string | null;
        };
    };
    config: StorefrontConfig;
    homepage: {
        hasSections: boolean;
        hasEnoughSales: boolean;
        sections: StoreSection[];
        autoBlocks: AutoBlock[];
        settings: Record<string, unknown>;
    };
    navigation: {
        categories: StoreCategory[];
        collections: StoreCollection[];
        featuredCategory: StoreCategory | null;
    };
    announcements: StoreAnnouncement[];
    footer: {
        links: FooterLink[];
        showPoweredBy: boolean;
    };
}
export interface TemplateConstraints {
    spacing?: {
        allowed: Array<StorefrontConfig["spacing"]>;
    };
    gridColumns?: {
        allowed: number[];
    };
    heroStyle?: {
        allowed: Array<StorefrontConfig["heroStyle"]>;
    };
    fontFamily?: {
        allowed: string[];
    };
    requires?: {
        banner?: boolean;
        logo?: boolean;
        minProducts?: number;
    };
}
export interface TemplateDefinition {
    id: string;
    name: string;
    description: string;
    previewImage: string;
    tags: string[];
    version: number;
    sdkVersion: string;
    constraints: TemplateConstraints;
}
//# sourceMappingURL=template.d.ts.map