/**
 * Capability types — @sellhapi/template-sdk
 *
 * Known capability IDs and API response shapes for the capabilities registry.
 * Returned by GET /api/developers/capabilities on the SellHapi API.
 *
 * Template developers use CapabilityId to type-check activeCapabilities
 * received in TemplateProps and conditionally render capability-specific blocks.
 *
 * @example
 *   const hasAppointments = props.activeCapabilities.includes("appointments");
 */

/** Known capability IDs as of SDK 0.6.0. */
export type CapabilityId =
  | "appointments"
  | "donations"
  | "digital_products"
  | "physical_products"
  | "events"
  | "memberships"
  | "content"
  | "events_tickets"
  | "forms";

/**
 * Runtime-accessible array of known capability IDs.
 * Mirrors `CapabilityId` above — keep both in sync.
 * The API's `src/contracts/index.ts` `SDK_CAPABILITY_IDS` constant must match this list.
 */
export const KNOWN_CAPABILITY_IDS: readonly CapabilityId[] = [
  "appointments",
  "donations",
  "digital_products",
  "physical_products",
  "events",
  "memberships",
  "content",
  "events_tickets",
  "forms",
] as const;

/** Plan limits for a single tier. null means no limit applies. */
export interface CapabilityTierLimit {
  monthlyLimit: number | null;
  warnAtPercent?: number;
}

/** Plan limits across all tiers, as returned by the capabilities API. */
export interface CapabilityPlanLimits {
  starter: CapabilityTierLimit | null;
  growth:  CapabilityTierLimit | null;
  scale:   CapabilityTierLimit | null;
}

/**
 * Storefront page type entry as returned by the capabilities API.
 * Studio uses this to build page-type tabs and live preview contexts.
 */
export interface CapabilityStorefrontPageType {
  id:             string;
  label:          string;
  previewContext: Record<string, unknown>;
}

/**
 * Full capability response from GET /api/developers/capabilities/:id.
 * Use CapabilityId for known IDs; id is string to allow future capabilities.
 */
export interface CapabilityInfo {
  id:              CapabilityId | string;
  version:         string;
  contractVersion: string;
  displayName:     string;
  description:     string;
  owns:            string[];
  events:          string[];
  contracts: {
    entities:    string[];
    queries:     string[];
    actions:     string[];
    constraints: string[];
    blocks:      string[];
  };
  dependencies:    string[];
  billing: {
    classification: "included" | "tiered" | "additive";
    usageEvents:    string[];
  };
  planLimits:          CapabilityPlanLimits;
  storefrontPageTypes?: CapabilityStorefrontPageType[];
}

// ── Legacy types — kept for backwards compatibility with older consumers ───────

/** @deprecated Use CapabilityInfo.events (string[]) instead. */
export interface CapabilityEvent {
  type:          string;
  description:   string;
  payloadSchema: Record<string, string>;
}

/** @deprecated Use CapabilityInfo.contracts.blocks instead. */
export interface CapabilityBlock {
  id:            string;
  description:   string;
  renderTargets: Array<"storefront" | "vendor-dashboard">;
  emits:         string[];
  subscribes:    string[];
}
