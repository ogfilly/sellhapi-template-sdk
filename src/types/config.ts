export interface StorefrontConfig {
  // Colors
  primaryColor:     string;
  accentColor:      string;
  backgroundColor:  string;
  textColor:        string;
  surfaceColor:     string;

  // Layout
  heroStyle:        "minimal" | "cinematic" | "split" | "product-forward";
  gridColumns:      2 | 3 | 4;
  spacing:          "tight" | "balanced" | "airy";

  // Typography
  fontStyle:        "modern" | "elegant" | "bold" | "playful";
  fontScale:        "compact" | "regular" | "large";

  // Shape
  borderRadius:     "sharp" | "rounded" | "pill";
  buttonShape:      "sharp" | "rounded" | "pill";

  // Visual
  heroImageryStyle: "photographic" | "illustrated" | "mixed";
  patternOverlay:   "none" | "dots" | "grid" | "waves" | "confetti";
  patternOpacity:   number;

  // Motion
  motionIntensity:  "none" | "subtle" | "expressive";
  ctaStyle:         "minimal" | "standard" | "bold";

  // Merchandising
  pinnedCategoryId?: string | null;
  heroProductId?:    string | null;
  hideOutOfStock:    boolean;
}

export const DEFAULT_CONFIG: StorefrontConfig = {
  primaryColor:     "#9355A6",
  accentColor:      "#7B3F9A",
  backgroundColor:  "#FFFFFF",
  textColor:        "#1A1A1A",
  surfaceColor:     "#F8F8F8",
  heroStyle:        "minimal",
  gridColumns:      2,
  spacing:          "balanced",
  fontStyle:        "modern",
  fontScale:        "regular",
  borderRadius:     "rounded",
  buttonShape:      "rounded",
  heroImageryStyle: "photographic",
  patternOverlay:   "none",
  patternOpacity:   0.04,
  motionIntensity:  "subtle",
  ctaStyle:         "standard",
  pinnedCategoryId: null,
  heroProductId:    null,
  hideOutOfStock:   false,
};
