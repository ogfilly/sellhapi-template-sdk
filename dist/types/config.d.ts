export interface StorefrontConfig {
    primaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    surfaceColor: string;
    heroStyle: "minimal" | "cinematic" | "split" | "product-forward";
    gridColumns: 2 | 3 | 4;
    spacing: "tight" | "balanced" | "airy";
    fontStyle: "modern" | "elegant" | "bold" | "playful";
    fontScale: "compact" | "regular" | "large";
    borderRadius: "sharp" | "rounded" | "pill";
    buttonShape: "sharp" | "rounded" | "pill";
    heroImageryStyle: "photographic" | "illustrated" | "mixed";
    patternOverlay: "none" | "dots" | "grid" | "waves" | "confetti";
    patternOpacity: number;
    motionIntensity: "none" | "subtle" | "expressive";
    ctaStyle: "minimal" | "standard" | "bold";
    pinnedCategoryId?: string | null;
    heroProductId?: string | null;
    hideOutOfStock: boolean;
}
export declare const DEFAULT_CONFIG: StorefrontConfig;
//# sourceMappingURL=config.d.ts.map