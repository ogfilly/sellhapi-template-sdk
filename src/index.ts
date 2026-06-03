// Types
export type {
  TemplateProps,
  TemplateDefinition,
  TemplateConstraints,
  StoreProduct,
  StoreProductVariant,
  StoreProductDetail,
  StorePagination,
  PageContext,
  StoreCategory,
  StoreCollection,
  StoreSection,
  AutoBlock,
  StoreAnnouncement,
  FooterLink,
  // Capability storefront types — SDK 0.5.0
  StorefrontTicketType,
  StorefrontEvent,
  StorefrontCampaign,
  StorefrontService,
  StorefrontMembershipTier,
} from "./types/template.js";

export type { StorefrontConfig } from "./types/config.js";

// Constants
export { DEFAULT_CONFIG } from "./types/config.js";

// Utilities
export { formatPrice, formatCount, truncate } from "./utils/format.js";
export { buildCssVariables, getCssVariableStyle } from "./utils/css.js";

// Mock data
export {
  MOCK_TEMPLATE_PROPS,
  createMockTemplateProps,
} from "./mock/data.js";

// Component metadata — for annotating template components
export type {
  ComponentMeta,
  ComponentCategory,
  PageContextType,
  ComponentImport,
} from "./types/component.js";

export { defineMeta } from "./types/component.js";

// Capability types — Phase 3
export type {
  CapabilityId,
  CapabilityBlock,
  CapabilityEvent,
  CapabilityTierLimit,
  CapabilityPlanLimits,
  CapabilityStorefrontPageType,
  CapabilityInfo,
} from "./types/capability.js";

export { KNOWN_CAPABILITY_IDS } from "./types/capability.js";

// SDK version — templates declare which version they were built against
export const SDK_VERSION = "0.6.0";
