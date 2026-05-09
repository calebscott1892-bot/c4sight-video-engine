/**
 * Production asset manifest types
 * Based on the 36-asset catalog from Episode 1
 */
export type AssetFormat = "SVG" | "PNG" | "Lottie" | "PNG-seq" | "video";
export type AssetCategory = "Characters" | "Props" | "Backgrounds" | "UI" | "Type" | "Transitions" | "Particles";
export interface ProductionAsset {
    id: string;
    name: string;
    category: AssetCategory;
    format: AssetFormat;
    size: string;
    animates: boolean;
    layers?: string[];
    notes: string;
    usedIn: string[];
}
export interface AssetManifest {
    version: string;
    episode: number;
    assets: ProductionAsset[];
    categories: AssetCategory[];
    formats: AssetFormat[];
}
export declare const EPISODE_1_MANIFEST: AssetManifest;
//# sourceMappingURL=manifest.d.ts.map