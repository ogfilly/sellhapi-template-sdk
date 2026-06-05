import type { StorefrontConfig } from "./config.js";
import type { CapabilityId } from "./capability.js";
export interface StorefrontTicketType {
    id: string;
    name: string;
    priceKobo: number;
    capacity: number;
    soldCount: number;
}
export interface StorefrontEvent {
    id: string;
    title: string;
    description: string | null;
    startsAt: string;
    endsAt: string | null;
    location: string | null;
    imageUrl: string | null;
    ticketTypes: StorefrontTicketType[];
}
export interface StorefrontCampaign {
    id: string;
    title: string;
    description: string | null;
    coverImageUrl: string | null;
    goalAmountKobo: number | null;
    raisedAmountKobo: number;
    donorCount: number;
    minDonationKobo: number;
    showGoalProgress: boolean;
    showDonorCount: boolean;
    endsAt: string | null;
}
export interface StorefrontService {
    id: string;
    name: string;
    description: string | null;
    durationMinutes: number;
    priceKobo: number;
    imageUrl: string | null;
}
export interface StorefrontMembershipTier {
    id: string;
    name: string;
    description: string | null;
    priceKobo: number;
    billingPeriod: "monthly" | "annual" | "one_time";
    benefits: string[] | null;
    maxMembers: number | null;
    memberCount: number;
    imageUrl: string | null;
}
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
    /** Product type — "physical" or "digital". Added in SDK 0.5.0. */
    type?: "physical" | "digital";
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
export interface StoreProductVariant {
    id: string;
    price: number;
    stock: number;
    options: {
        field: string;
        value: string;
    }[];
}
export interface StoreProductDetail extends StoreProduct {
    description: string | null;
    variants: StoreProductVariant[];
}
export interface StorePagination {
    page: number;
    totalPages: number;
    total: number;
}
export type PageContext = {
    type: "home";
} | {
    type: "category";
    slug: string;
    name: string;
    image: string | null;
    products: StoreProduct[];
    pagination: StorePagination | null;
} | {
    type: "all-products";
    products: StoreProduct[];
    pagination: StorePagination | null;
} | {
    type: "sale";
    products: StoreProduct[];
    pagination: StorePagination | null;
} | {
    type: "collection";
    collection: StoreCollection;
    products: StoreProduct[];
} | {
    type: "section";
    section: StoreSection;
} | {
    type: "product";
    product: StoreProductDetail;
} | {
    type: "event-list";
    events: StorefrontEvent[];
} | {
    type: "event-detail";
    event: StorefrontEvent;
} | {
    type: "campaign";
    campaign: StorefrontCampaign;
} | {
    type: "service-list";
    services: StorefrontService[];
} | {
    type: "service-detail";
    service: StorefrontService;
};
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
        /**
         * Active capability data for the homepage — present when capabilities
         * are active on the workspace and storefront data has been fetched.
         * Added in SDK 0.5.0.
         */
        capabilities?: {
            events?: StorefrontEvent[];
            campaigns?: StorefrontCampaign[];
            services?: StorefrontService[];
            memberships?: StorefrontMembershipTier[];
        };
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
    /**
     * Current page context. Switch on `page.type` to render the right layout.
     * Optional for backwards compatibility with templates built on SDK < 0.5.0.
     */
    page?: PageContext;
    /**
     * Capability IDs that are active on this workspace.
     * Use this to conditionally render capability-specific UI blocks.
     *
     * @example
     *   const hasAppointments = props.activeCapabilities.includes("appointments");
     */
    activeCapabilities: Array<CapabilityId | string>;
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
    /**
     * Capability IDs this template is designed to support.
     * Studio uses this to match templates to stores with the relevant capabilities active.
     * Added in SDK 0.5.0.
     */
    capabilities?: CapabilityId[];
}
//# sourceMappingURL=template.d.ts.map