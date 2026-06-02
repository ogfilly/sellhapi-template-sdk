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

/** Known capability IDs as of SDK 0.2.0. */
export type CapabilityId =
  | "appointments"
  | "donations"
  | "digital_products"
  | "physical_products";

/** Block metadata as returned by the capabilities API. */
export interface CapabilityBlock {
  id:            string;
  description:   string;
  renderTargets: Array<"storefront" | "vendor-dashboard">;
  emits:         string[];
  subscribes:    string[];
}

/** Event definition as returned by the capabilities API. */
export interface CapabilityEvent {
  type:          string;
  description:   string;
  payloadSchema: Record<string, string>;
}

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
 * Full capability response from GET /api/developers/capabilities/:id.
 * Use CapabilityId for known IDs; id is string to allow future capabilities.
 */
export interface CapabilityInfo {
  id:          CapabilityId | string;
  displayName: string;
  description: string;
  blocks:      CapabilityBlock[];
  events:      CapabilityEvent[];
  usageEvents: string[];
  planLimits:  CapabilityPlanLimits;
}
