/**
 * C4Sight Design System
 * Character components and styleframes for Codex/Remotion
 *
 * @packageDocumentation
 */

// Characters
export { Wizard } from "./characters/Wizard";
export type { WizardProps, WizardView, WizardExpression, WizardPose } from "./characters/Wizard";

export { Host } from "./characters/Host";
export type { HostProps } from "./characters/Host";

// Palette
export { C4SIGHT_PALETTE, SKIN_VARIANTS } from "./palette";
export type { PaletteColor, SkinVariant } from "./palette";

// Asset manifest (types only for reference)
export type {
  AssetFormat,
  AssetCategory,
  ProductionAsset,
  AssetManifest,
} from "./types/manifest";
