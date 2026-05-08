import type {CSSProperties, ReactNode} from 'react';
import {Img, staticFile} from 'remotion';
import {c4sightAssetAvailability} from '../c4sightAssetAvailability.generated';
import {
  c4sightAssetManifest,
  c4sightAssetManifestById,
  type C4SightAssetCategory,
  type C4SightAssetId,
} from '../c4sightAssetManifest';

export const isC4SightAssetReady = (assetId: C4SightAssetId) => {
  const asset = c4sightAssetManifestById[assetId];

  return Boolean(
    (c4sightAssetAvailability as Record<string, boolean>)[asset.filePath],
  );
};

export const getC4SightAssetReadiness = () => {
  const requiredAssets = c4sightAssetManifest.filter((asset) => asset.required);
  const readyRequiredAssets = requiredAssets.filter((asset) =>
    isC4SightAssetReady(asset.id),
  );

  return {
    allAssets: c4sightAssetManifest,
    requiredAssets,
    readyRequiredAssets,
    missingRequiredAssets: requiredAssets.filter(
      (asset) => !isC4SightAssetReady(asset.id),
    ),
    score:
      requiredAssets.length === 0
        ? 0
        : Math.round((readyRequiredAssets.length / requiredAssets.length) * 100),
  };
};

export const getC4SightCategoryReadiness = (category: C4SightAssetCategory) => {
  const assets = c4sightAssetManifest.filter(
    (asset) => asset.category === category,
  );
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

const publicPathForRemotion = (filePath: string) => filePath.replace(/^\//, '');

export const ManifestAssetPlaceholder = ({
  assetId,
  label,
  className,
  style,
  children,
}: {
  assetId: C4SightAssetId;
  label?: ReactNode;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) => {
  const asset = c4sightAssetManifestById[assetId];

  return (
    <div
      className={['c4-asset-placeholder', className].filter(Boolean).join(' ')}
      style={style}
    >
      <div className="c4-asset-placeholder__status">MISSING ASSET</div>
      <div className="c4-asset-placeholder__name">
        {label ?? asset.displayName}
      </div>
      <div className="c4-asset-placeholder__path">{asset.filePath}</div>
      {children}
    </div>
  );
};

export const ManifestAsset = ({
  assetId,
  className,
  style,
  width,
  height,
  fit = 'contain',
  placeholderLabel,
  children,
}: {
  assetId: C4SightAssetId;
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
  fit?: 'contain' | 'cover';
  placeholderLabel?: ReactNode;
  children?: ReactNode;
}) => {
  const asset = c4sightAssetManifestById[assetId];
  const isReady = isC4SightAssetReady(assetId);
  const sharedStyle = {
    width,
    height,
    ...style,
  };

  if (!isReady) {
    return (
      <ManifestAssetPlaceholder
        assetId={assetId}
        label={placeholderLabel}
        className={className}
        style={sharedStyle}
      >
        {children}
      </ManifestAssetPlaceholder>
    );
  }

  return (
    <div
      className={['c4-manifest-asset', className].filter(Boolean).join(' ')}
      style={sharedStyle}
    >
      <Img
        className="c4-manifest-asset__image"
        src={staticFile(publicPathForRemotion(asset.filePath))}
        style={{objectFit: fit}}
      />
      {children}
    </div>
  );
};
