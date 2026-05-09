/**
 * Remotion Configuration for C4Sight
 * Example config for integrating with Remotion
 */

import { Config } from '@remotion/cli/config';

Config.setConcurrency(2);
Config.setCodec('h264');
Config.setVideoImageFormat('jpeg');
Config.setQuality(90);

// Output settings for 1920×1080 @ 30fps
Config.setDimension(1920, 1080);
Config.setFrameRate(30);

// Enable multi-process rendering
Config.setMaxTimelineTracks(10);

export default Config;
