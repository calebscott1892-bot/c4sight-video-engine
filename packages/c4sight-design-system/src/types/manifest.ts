/**
 * Production asset manifest types
 * Based on the 36-asset catalog from Episode 1
 */

export type AssetFormat = "SVG" | "PNG" | "Lottie" | "PNG-seq" | "video";

export type AssetCategory =
  | "Characters"
  | "Props"
  | "Backgrounds"
  | "UI"
  | "Type"
  | "Transitions"
  | "Particles";

export interface ProductionAsset {
  id: string;
  name: string;
  category: AssetCategory;
  format: AssetFormat;
  size: string;
  animates: boolean;
  layers?: string[];
  notes: string;
  usedIn: string[]; // frame ids e.g. "F02", "F07"
}

export interface AssetManifest {
  version: string;
  episode: number;
  assets: ProductionAsset[];
  categories: AssetCategory[];
  formats: AssetFormat[];
}

export const EPISODE_1_MANIFEST: AssetManifest = {
  version: "1.0.0",
  episode: 1,
  assets: [], // Populated from full manifest
  categories: ["Characters", "Props", "Backgrounds", "UI", "Type", "Transitions", "Particles"],
  formats: ["SVG", "PNG", "Lottie", "PNG-seq", "video"],
};
