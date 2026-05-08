import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {ChalkFilters} from '../components/ChalkFilters';
import {
  getC4SightAssetReadiness,
  getC4SightCategoryReadiness,
  isC4SightAssetReady,
  ManifestAsset,
} from '../design-system/assets';
import {
  c4sightAssetManifest,
  type C4SightAssetCategory,
  type C4SightManifestAsset,
} from '../design-system/c4sightAssetManifest';
import {holdFrame} from '../design-system/animation';
import {videoLayout} from '../layout/blackboardLayout';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const c4SightAssetReadinessPreviewDurationSeconds = 20;

const categories: C4SightAssetCategory[] = [
  'character',
  'prop',
  'card',
  'icon',
  'effect',
  'texture',
  'scene-keyframe',
];

const categoryLabels: Record<C4SightAssetCategory, string> = {
  character: 'Characters',
  prop: 'Props',
  card: 'Cards',
  icon: 'Icons',
  effect: 'Effects',
  texture: 'Textures',
  'scene-keyframe': 'Scene keyframes',
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

const CategoryScore = ({category}: {category: C4SightAssetCategory}) => {
  const readiness = getC4SightCategoryReadiness(category);
  const readyCount = readiness.readyRequiredAssets.length;
  const requiredCount = readiness.requiredAssets.length;

  return (
    <div className="c4-readiness-category">
      <div className="c4-readiness-category__label">
        {categoryLabels[category]}
      </div>
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
        eyebrow="Asset intake"
        title="Episode 1 production is gated by real designed assets"
        subtitle="This preview reports what is present in /public/c4sight/assets and what is still missing."
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
        {categories.map((category) => (
          <CategoryScore key={category} category={category} />
        ))}
      </div>
      <div className="c4-readiness-note">
        Drop finished SVG/PNG files into the manifest paths, run `npm run assets:scan`, then render this preview again.
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
      eyebrow="Characters, props, cards"
      title="Real art assets replace coded placeholders"
      subtitle="If an asset is missing, Remotion now says so plainly instead of pretending the placeholder is final."
      filter={(asset) =>
        asset.category === 'character' ||
        asset.category === 'prop' ||
        asset.category === 'card'
      }
    />
    <GalleryPanel
      start={sec(10)}
      end={sec(15)}
      eyebrow="Icons, effects, textures, keyframes"
      title="Supporting assets are tracked by the same manifest"
      subtitle="Scene keyframes and textures are first-class production inputs, not hidden one-off files."
      filter={(asset) =>
        asset.category === 'icon' ||
        asset.category === 'effect' ||
        asset.category === 'texture' ||
        asset.category === 'scene-keyframe'
      }
    />
    <MissingPanel />
  </AbsoluteFill>
);
