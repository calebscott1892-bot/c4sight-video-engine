import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {ChalkFilters} from '../components/ChalkFilters';
import {
  getC4SightAssetReadiness,
  isC4SightAssetReady,
  ManifestAsset,
} from '../design-system/assets';
import {
  c4sightAssetManifest,
  type C4SightManifestAsset,
} from '../design-system/c4sightAssetManifest';
import {holdFrame} from '../design-system/animation';
import {videoLayout} from '../layout/blackboardLayout';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const c4SightAssetReadinessPreviewDurationSeconds = 20;

const readinessGroups = [
  {
    label: 'Main Animated World',
    filter: (asset: C4SightManifestAsset) =>
      asset.category === 'main_world' || asset.category === 'host',
  },
  {
    label: 'Blackboard Teaching Mode',
    filter: (asset: C4SightManifestAsset) =>
      asset.category === 'blackboard_mode' ||
      asset.category === 'transitions' ||
      asset.category === 'audio_identity',
  },
  {
    label: 'Interface / Tool Mode',
    filter: (asset: C4SightManifestAsset) => asset.category === 'interface_mode',
  },
  {
    label: 'Human Judgement / Real-World Mode',
    filter: (asset: C4SightManifestAsset) =>
      asset.category === 'human_judgement_mode',
  },
  {
    label: 'Recurring Devices',
    filter: (asset: C4SightManifestAsset) =>
      asset.category === 'recurring_devices' ||
      asset.category === 'mascot_wizard',
  },
  {
    label: 'Episode 1 Minimum Required Assets',
    filter: (asset: C4SightManifestAsset) =>
      'episode1Minimum' in asset && asset.episode1Minimum === true,
  },
] as const;

const getGroupReadiness = (
  filter: (asset: C4SightManifestAsset) => boolean,
) => {
  const assets = c4sightAssetManifest.filter(filter);
  const requiredAssets = assets.filter((asset) => asset.required);
  const readyRequiredAssets = requiredAssets.filter((asset) =>
    isC4SightAssetReady(asset.id),
  );

  return {
    assets,
    requiredAssets,
    readyRequiredAssets,
    score:
      requiredAssets.length === 0
        ? 0
        : Math.round((readyRequiredAssets.length / requiredAssets.length) * 100),
  };
};

const Header = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <>
    <div className="c4-readiness-eyebrow">{eyebrow}</div>
    <div className="c4-readiness-title">{title}</div>
    <div className="c4-readiness-subtitle">{subtitle}</div>
  </>
);

const StatusDot = ({ready}: {ready: boolean}) => (
  <span
    className={[
      'c4-readiness-dot',
      ready ? 'c4-readiness-dot--ready' : 'c4-readiness-dot--missing',
    ].join(' ')}
  />
);

const AssetRow = ({asset}: {asset: C4SightManifestAsset}) => {
  const ready = isC4SightAssetReady(asset.id);

  return (
    <div className="c4-readiness-row">
      <StatusDot ready={ready} />
      <span className="c4-readiness-row__name">{asset.displayName}</span>
      <span className="c4-readiness-row__path">{asset.filePath}</span>
      <span className="c4-readiness-row__required">
        {asset.required ? 'required' : 'optional'}
      </span>
    </div>
  );
};

const CategoryScore = ({
  label,
  filter,
}: {
  label: string;
  filter: (asset: C4SightManifestAsset) => boolean;
}) => {
  const readiness = getGroupReadiness(filter);
  const readyCount = readiness.readyRequiredAssets.length;
  const requiredCount = readiness.requiredAssets.length;

  return (
    <div className="c4-readiness-category">
      <div className="c4-readiness-category__label">{label}</div>
      <div className="c4-readiness-category__score">
        {readyCount}/{requiredCount}
      </div>
      <div className="c4-readiness-category__bar">
        <div
          className="c4-readiness-category__bar-fill"
          style={{width: `${readiness.score}%`}}
        />
      </div>
    </div>
  );
};

const OverviewPanel = () => {
  const frame = useCurrentFrame();
  const readiness = getC4SightAssetReadiness();

  return (
    <section className="c4-readiness-panel" style={holdFrame(frame, 0, sec(5))}>
      <Header
        eyebrow="Show Bible asset intake"
        title="Animation is gated by real designed assets"
        subtitle="C4Sight now tracks readiness by visual mode and Episode 1 minimum production needs."
      />
      <div className="c4-readiness-score-card">
        <div className="c4-readiness-score-card__number">{readiness.score}%</div>
        <div className="c4-readiness-score-card__label">
          required asset readiness
        </div>
        <div className="c4-readiness-score-card__detail">
          {readiness.readyRequiredAssets.length}/{readiness.requiredAssets.length} required assets present
        </div>
      </div>
      <div className="c4-readiness-category-grid">
        {readinessGroups.map((group) => (
          <CategoryScore
            key={group.label}
            label={group.label}
            filter={group.filter}
          />
        ))}
      </div>
      <div className="c4-readiness-note">
        Drop approved Show Bible assets into the manifest paths, run `npm run assets:scan`, then review this preview again.
      </div>
    </section>
  );
};

const GalleryPanel = ({
  start,
  end,
  eyebrow,
  title,
  subtitle,
  filter,
}: {
  start: number;
  end: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  filter: (asset: C4SightManifestAsset) => boolean;
}) => {
  const frame = useCurrentFrame();
  const assets = c4sightAssetManifest.filter(filter);

  return (
    <section className="c4-readiness-panel" style={holdFrame(frame, start, end)}>
      <Header eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="c4-readiness-gallery">
        {assets.slice(0, 24).map((asset) => (
          <div className="c4-readiness-asset-card" key={asset.id}>
            <ManifestAsset
              assetId={asset.id}
              width="100%"
              height={92}
              placeholderLabel={asset.displayName}
            />
            <div className="c4-readiness-asset-card__meta">
              <StatusDot ready={isC4SightAssetReady(asset.id)} />
              <span>{asset.displayName}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MissingPanel = () => {
  const frame = useCurrentFrame();
  const readiness = getC4SightAssetReadiness();

  return (
    <section className="c4-readiness-panel" style={holdFrame(frame, sec(15), sec(20))}>
      <Header
        eyebrow="Missing required assets"
        title="Episode 1 should not move forward until this list is resolved"
        subtitle="These are the first files production needs from Figma, Canva, or another design tool."
      />
      <div className="c4-readiness-missing-list">
        {readiness.missingRequiredAssets.slice(0, 22).map((asset) => (
          <AssetRow key={asset.id} asset={asset} />
        ))}
      </div>
      <div className="c4-readiness-note c4-readiness-note--bottom">
        Showing first 22 missing required assets. Full source of truth: `src/design-system/c4sightAssetManifest.ts`.
      </div>
    </section>
  );
};

export const C4SightAssetReadinessPreview = () => (
  <AbsoluteFill>
    <ChalkFilters />
    <BlackboardBackground />
    <OverviewPanel />
    <GalleryPanel
      start={sec(5)}
      end={sec(10)}
      eyebrow="Modes and recurring devices"
      title="The Show Bible defines the production language"
      subtitle="Main world, host, Tiny Alien Wizard, and recurring devices must come from approved assets."
      filter={(asset) =>
        asset.category === 'main_world' ||
        asset.category === 'host' ||
        asset.category === 'recurring_devices' ||
        asset.category === 'mascot_wizard'
      }
    />
    <GalleryPanel
      start={sec(10)}
      end={sec(15)}
      eyebrow="Teaching, tools, judgement"
      title="Blackboard is one mode, not the whole show"
      subtitle="Interface, human judgement, board ritual transitions, and audio identity are all tracked before animation resumes."
      filter={(asset) =>
        asset.category === 'blackboard_mode' ||
        asset.category === 'interface_mode' ||
        asset.category === 'human_judgement_mode' ||
        asset.category === 'transitions' ||
        asset.category === 'audio_identity'
      }
    />
    <MissingPanel />
  </AbsoluteFill>
);
