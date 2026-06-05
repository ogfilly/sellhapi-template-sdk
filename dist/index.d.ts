export type { TemplateProps, TemplateDefinition, TemplateConstraints, StoreProduct, StoreProductVariant, StoreProductDetail, StorePagination, PageContext, StoreCategory, StoreCollection, StoreSection, AutoBlock, StoreAnnouncement, FooterLink, StorefrontTicketType, StorefrontEvent, StorefrontCampaign, StorefrontService, StorefrontMembershipTier, } from "./types/template.js";
export type { StorefrontConfig } from "./types/config.js";
export { DEFAULT_CONFIG } from "./types/config.js";
export { formatPrice, formatCount, truncate } from "./utils/format.js";
export { buildCssVariables, getCssVariableStyle } from "./utils/css.js";
export { MOCK_TEMPLATE_PROPS, createMockTemplateProps, } from "./mock/data.js";
export type { ComponentMeta, ComponentCategory, PageContextType, ComponentImport, } from "./types/component.js";
export { defineMeta } from "./types/component.js";
export type { CapabilityId, CapabilityBlock, CapabilityEvent, CapabilityTierLimit, CapabilityPlanLimits, CapabilityStorefrontPageType, CapabilityInfo, } from "./types/capability.js";
export { KNOWN_CAPABILITY_IDS } from "./types/capability.js";
export declare const SDK_VERSION = "0.6.0";
//# sourceMappingURL=index.d.ts.map