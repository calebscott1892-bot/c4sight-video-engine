import {C4SceneShell} from '../../components/C4SightSceneLayouts';
import {ManifestAsset} from '../assets';
import type {C4SightAssetId} from '../c4sightAssetManifest';

type SceneProps = {
  startFrame: number;
  endFrame: number;
};

const AssetBackedScene = ({
  startFrame,
  endFrame,
  assetId,
  label,
}: SceneProps & {assetId: C4SightAssetId; label: string}) => (
  <C4SceneShell
    startFrame={startFrame}
    endFrame={endFrame}
    className="c4-ds-scene c4-ds-scene--asset-backed"
  >
    <ManifestAsset
      assetId={assetId}
      width={1920}
      height={1080}
      fit="cover"
      placeholderLabel={`Scene keyframe: ${label}`}
    />
  </C4SceneShell>
);

export const HookQuestionScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.cold-open-hook"
    label="Hook question"
  />
);

export const ControlledChaosScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.magic-chaos"
    label="Controlled chaos"
  />
);

export const CorrectionScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.not-magic-correction"
    label="Correction"
  />
);

export const WalkOffGagScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.walk-off-gag"
    label="Walk-off gag"
  />
);

export const ReturnRevealScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.return-reveal"
    label="Return reveal"
  />
);

export const OverwhelmScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.overwhelm"
    label="Capability overwhelm"
  />
);

export const SlowDownResetScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.slow-down-reset"
    label="Slow down reset"
  />
);

export const TeachingDiagramScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.teaching-diagram"
    label="Teaching diagram"
  />
);

export const MythRealityScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.myth-reality"
    label="Myth vs reality"
  />
);

export const WarningScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.warning"
    label="Warning"
  />
);

export const RoadmapScene = (props: SceneProps) => (
  <AssetBackedScene
    {...props}
    assetId="scene.roadmap"
    label="Roadmap"
  />
);

export const OutroScene = (props: SceneProps) => (
  <AssetBackedScene {...props} assetId="scene.outro" label="Outro" />
);
