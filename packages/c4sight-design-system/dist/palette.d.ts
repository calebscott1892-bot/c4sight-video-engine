/**
 * C4Sight locked six-colour palette
 * Show Bible v1.0 — mandatory for all assets
 */
export declare const C4SIGHT_PALETTE: {
    /** Warm paper background with grain (#EFE7D6) */
    readonly PAPER: "#EFE7D6";
    /** Chalk white for text, highlights, wand tip (#F4EDE0) */
    readonly CHALK: "#F4EDE0";
    /** Slate for blackboards, hat, dark surfaces (#1A1F1C) */
    readonly SLATE: "#1A1F1C";
    /** Ink black for linework, type, outlines (#221F1F) */
    readonly INK: "#221F1F";
    /** Lavender for wizard body, accent (#B9A8C7) */
    readonly LAVENDER: "#B9A8C7";
    /** Lavender shadow for depth (#9D8AAE) */
    readonly LAVENDER_SHADOW: "#9D8AAE";
    /** Verify red for emphasis, warnings (#D7382C) */
    readonly RED: "#D7382C";
};
export type PaletteColor = keyof typeof C4SIGHT_PALETTE;
export declare const SKIN_VARIANTS: {
    /** Default — warm mid skin, dark hair, oatmeal henley, charcoal trousers */
    readonly a: {
        readonly skin: "#D9B392";
        readonly skinShadow: "#B98E6E";
        readonly hair: "#2A1F1A";
        readonly shirt: "#E6DCC4";
        readonly shirtShadow: "#C8BB9A";
        readonly trousers: "#3A3531";
    };
    /** Variant — cooler skin, lighter auburn hair, slate-blue button-down, olive trousers */
    readonly b: {
        readonly skin: "#E8C9AE";
        readonly skinShadow: "#C7A487";
        readonly hair: "#7A3A22";
        readonly shirt: "#A9B1A8";
        readonly shirtShadow: "#7E867D";
        readonly trousers: "#4A4A36";
    };
};
export type SkinVariant = keyof typeof SKIN_VARIANTS;
//# sourceMappingURL=palette.d.ts.map