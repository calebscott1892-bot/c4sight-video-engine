/**
 * C4Sight Design System
 * Character components and styleframes for Codex/Remotion
 *
 * @packageDocumentation
 */

// Characters
export { Wizard } from "./characters/Wizard.js";
export type { WizardProps, WizardView, WizardExpression, WizardPose } from "./characters/Wizard";

export { Host } from "./characters/Host.js";
export type {
  HostExpression,
  HostPose,
  HostProps,
  HostVariant,
  HostView,
} from "./characters/Host";

// Palette
export { C4SIGHT_PALETTE, SKIN_VARIANTS } from "./palette.js";
export type { PaletteColor, SkinVariant } from "./palette";

// Asset manifest (types only for reference)
export type {
  AssetFormat,
  AssetCategory,
  ProductionAsset,
  AssetManifest,
} from "./types/manifest";
