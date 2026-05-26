// ── Component metadata contract ───────────────────────────────────────────────
// Template developers annotate their components with a sidecar .meta.ts file
// that exports a ComponentMeta object defined via defineMeta().
//
// SellHapi's build pipeline reads these files to:
//   1. Build the component manifest served at /api/components
//   2. Populate the studio component browser
//   3. Validate snippet compatibility against the SDK version
//
// First-party (default template) components ship with metadata in
// sell_store/src/lib/components/registry.ts.
// Third-party components attach metadata when submitting for approval.
// Helper that returns its argument typed. Provides IDE autocomplete
// and compile-time validation when writing .meta.ts files.
export function defineMeta(meta) {
    return meta;
}
//# sourceMappingURL=component.js.map