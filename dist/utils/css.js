const FONT_FAMILY_MAP = {
    modern: "'Inter', system-ui, sans-serif",
    elegant: "'Cormorant Garamond', 'Playfair Display', serif",
    bold: "'Syne', 'Space Grotesk', sans-serif",
    playful: "'Nunito', 'Poppins', sans-serif",
};
const FONT_SCALE_MAP = {
    compact: { base: "14px", h1: "28px", h2: "20px", h3: "16px", small: "11px" },
    regular: { base: "15px", h1: "36px", h2: "24px", h3: "18px", small: "12px" },
    large: { base: "17px", h1: "48px", h2: "32px", h3: "22px", small: "13px" },
};
const SPACING_MAP = {
    tight: { section: "24px", card: "12px", gap: "8px" },
    balanced: { section: "40px", card: "16px", gap: "12px" },
    airy: { section: "64px", card: "24px", gap: "20px" },
};
const RADIUS_MAP = {
    sharp: "0px",
    rounded: "10px",
    pill: "999px",
};
const BUTTON_RADIUS_MAP = {
    sharp: "4px",
    rounded: "10px",
    pill: "999px",
};
// Builds all CSS custom properties from a StorefrontConfig.
// Inject this into a <style> tag at the root of your template.
// Every visual decision in your template should reference these variables.
export function buildCssVariables(config) {
    const scale = FONT_SCALE_MAP[config.fontScale];
    const spacing = SPACING_MAP[config.spacing];
    const vars = {
        "--color-primary": config.primaryColor,
        "--color-accent": config.accentColor,
        "--color-bg": config.backgroundColor,
        "--color-text": config.textColor,
        "--color-surface": config.surfaceColor,
        "--font-family": FONT_FAMILY_MAP[config.fontStyle],
        "--font-size-base": scale.base,
        "--font-size-h1": scale.h1,
        "--font-size-h2": scale.h2,
        "--font-size-h3": scale.h3,
        "--font-size-small": scale.small,
        "--radius-card": RADIUS_MAP[config.borderRadius],
        "--radius-button": BUTTON_RADIUS_MAP[config.buttonShape],
        "--spacing-section": spacing.section,
        "--spacing-card": spacing.card,
        "--spacing-gap": spacing.gap,
        "--motion-duration": config.motionIntensity === "none" ? "0ms" :
            config.motionIntensity === "subtle" ? "200ms" : "400ms",
        "--motion-easing": config.motionIntensity === "expressive"
            ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
            : "ease",
    };
    return Object.entries(vars)
        .map(([k, v]) => `${k}: ${v}`)
        .join("; ");
}
// Returns an inline style object — useful when you need
// to pass CSS vars as React style props to a wrapper element.
export function getCssVariableStyle(config) {
    const raw = buildCssVariables(config);
    return Object.fromEntries(raw.split(";")
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => {
        const idx = s.indexOf(":");
        return [s.slice(0, idx).trim(), s.slice(idx + 1).trim()];
    }));
}
//# sourceMappingURL=css.js.map