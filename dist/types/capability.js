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
/**
 * Runtime-accessible array of known capability IDs.
 * Mirrors `CapabilityId` above — keep both in sync.
 * The API's `src/contracts/index.ts` `SDK_CAPABILITY_IDS` constant must match this list.
 */
export const KNOWN_CAPABILITY_IDS = [
    "appointments",
    "donations",
    "digital_products",
    "physical_products",
    "events",
    "memberships",
    "content",
    "events_tickets",
];
//# sourceMappingURL=capability.js.map