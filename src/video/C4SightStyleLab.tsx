import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {Caption} from '../components/Caption';
import {ChalkFilters} from '../components/ChalkFilters';
import {ChalkText} from '../components/ChalkText';
import {
  ChalkChecklist,
  ChalkCircleHighlight,
  ChalkComparison,
  ChalkCrossOut,
  ChalkDustPuff,
  ChalkEraserWipe,
  ChalkFormula,
  ChalkIcon,
  ChalkSideNote,
  ChalkUnderline,
} from '../components/ChalkAnnotations';
import {ChalkArrow, ChalkBox, ChalkCircle, ChalkLine} from '../components/ChalkShapes';
import {c4SightBrand} from '../data/brand';
import {boardZones, videoLayout} from '../layout/blackboardLayout';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

const main = boardZones.main;
const title = boardZones.title;
const side = boardZones.sideNote;
const comparison = boardZones.comparison;

const boxY = main.y + 92;
const inputBox = {x: main.x + 10, y: boxY, width: 260, height: 108};
const patternBox = {x: main.x + 420, y: boxY, width: 320, height: 108};
const outputBox = {x: main.x + 880, y: boxY, width: 280, height: 108};

export const styleLabDurationSeconds = 27;

export const C4SightStyleLab = () => {
  return (
    <AbsoluteFill>
      <ChalkFilters />
      <BlackboardBackground />

      <div className="style-lab">
        <div
          className="style-lab__watermark"
          style={{
            left: boardZones.logo.x,
            top: boardZones.logo.y,
            width: boardZones.logo.width,
            height: boardZones.logo.height,
          }}
        >
          <Img src={staticFile(c4SightBrand.logoAsset ?? '')} />
          <span>C4Sight</span>
        </div>

        <div
          className="style-lab__title"
          style={{left: title.x, top: title.y, width: title.width}}
        >
          <ChalkText startFrame={sec(0.35)} durationFrames={sec(1.8)}>
            C4Sight Style Lab
          </ChalkText>
        </div>

        <ChalkUnderline
          x={title.x + 14}
          y={title.y + 112}
          width={650}
          startFrame={sec(2.15)}
          durationFrames={sec(0.75)}
        />

        <Sequence from={sec(3.0)} durationInFrames={sec(8.5)}>
          <svg className="chalk-overlay" viewBox="0 0 1920 1080" aria-hidden="true">
            <ChalkBox
              {...inputBox}
              startFrame={sec(0.2)}
              durationFrames={sec(0.8)}
              seed={1}
            />
            <ChalkBox
              {...patternBox}
              startFrame={sec(1.3)}
              durationFrames={sec(0.8)}
              seed={2}
            />
            <ChalkBox
              {...outputBox}
              startFrame={sec(2.4)}
              durationFrames={sec(0.8)}
              seed={3}
            />
            <ChalkArrow
              from={{x: inputBox.x + inputBox.width + 32, y: boxY + 54}}
              to={{x: patternBox.x - 30, y: boxY + 54}}
              startFrame={sec(3.3)}
              durationFrames={sec(0.85)}
              bend={-10}
            />
            <ChalkArrow
              from={{x: patternBox.x + patternBox.width + 34, y: boxY + 54}}
              to={{x: outputBox.x - 32, y: boxY + 54}}
              startFrame={sec(4.25)}
              durationFrames={sec(0.85)}
              bend={8}
            />
            <ChalkCircle
              cx={patternBox.x + patternBox.width / 2}
              cy={patternBox.y + patternBox.height / 2}
              rx={patternBox.width / 2 + 32}
              ry={patternBox.height / 2 + 34}
              startFrame={sec(5.3)}
              durationFrames={sec(0.9)}
              tone="accent"
              strokeWidth={5}
              seed={8}
            />
            <ChalkLine
              d={`M ${main.x + 30} ${main.y + 272} C ${main.x + 240} ${
                main.y + 286
              }, ${main.x + 420} ${main.y + 258}, ${main.x + 640} ${
                main.y + 276
              }`}
              startFrame={sec(6.4)}
              durationFrames={sec(0.85)}
              tone="muted"
              strokeWidth={4}
            />
          </svg>

          <ChalkText
            className="style-lab__node-label"
            startFrame={sec(0.95)}
            durationFrames={sec(0.55)}
            style={{
              left: inputBox.x,
              top: inputBox.y,
              width: inputBox.width,
              height: inputBox.height,
            }}
          >
            Input
          </ChalkText>
          <ChalkText
            className="style-lab__node-label"
            startFrame={sec(2.05)}
            durationFrames={sec(0.7)}
            style={{
              left: patternBox.x,
              top: patternBox.y,
              width: patternBox.width,
              height: patternBox.height,
            }}
          >
            Pattern
          </ChalkText>
          <ChalkText
            className="style-lab__node-label"
            startFrame={sec(3.15)}
            durationFrames={sec(0.65)}
            style={{
              left: outputBox.x,
              top: outputBox.y,
              width: outputBox.width,
              height: outputBox.height,
            }}
          >
            Useful Output
          </ChalkText>
        </Sequence>

        <Sequence from={sec(7.2)} durationInFrames={sec(7.1)}>
          <ChalkSideNote
            x={side.x}
            y={side.y}
            width={side.width}
            height={side.height}
            startFrame={sec(0.15)}
            title="Side note"
          >
            Keep the board quiet. Make the idea do the work.
          </ChalkSideNote>

          <ChalkIcon
            x={main.x + 920}
            y={main.y + 8}
            startFrame={sec(2.0)}
          />

          <ChalkFormula
            x={main.x + 36}
            y={main.y + 298}
            startFrame={sec(2.25)}
            text="data + context -> useful prediction"
          />

          <ChalkChecklist
            x={main.x + 700}
            y={main.y + 284}
            startFrame={sec(3.1)}
            items={['plain language', 'practical example', 'one clear idea']}
          />
        </Sequence>

        <Sequence from={sec(12.25)} durationInFrames={sec(4.0)}>
          <div
            className="style-lab__erase-demo"
            style={{left: main.x + 48, top: main.y + 26}}
          >
            <ChalkText startFrame={sec(0.05)} durationFrames={sec(0.7)}>
              AI = magic?
            </ChalkText>
          </div>
          <ChalkCircleHighlight
            cx={main.x + 245}
            cy={main.y + 92}
            rx={206}
            ry={62}
            startFrame={sec(0.9)}
            durationFrames={sec(0.65)}
          />
          <ChalkCrossOut
            x={main.x + 68}
            y={main.y + 42}
            width={348}
            height={96}
            startFrame={sec(1.55)}
            durationFrames={sec(0.55)}
          />
          <ChalkDustPuff
            x={main.x + 420}
            y={main.y + 104}
            startFrame={sec(2.1)}
            durationFrames={sec(0.8)}
          />
          <ChalkEraserWipe
            x={main.x + 20}
            y={main.y + 10}
            width={620}
            height={168}
            startFrame={sec(2.25)}
            durationFrames={sec(0.95)}
          />
        </Sequence>

        <Sequence from={sec(16.2)} durationInFrames={sec(8.3)}>
          <ChalkComparison
            x={comparison.x}
            y={comparison.y}
            width={comparison.width}
            height={comparison.height}
            startFrame={sec(0.15)}
          />
        </Sequence>

        <Sequence from={sec(2.9)} durationInFrames={sec(7.4)}>
          <Caption
            cue={{
              id: 'style-lab-caption-1',
              start: 0,
              duration: 7.4,
              text: 'The motion language should feel drawn, not designed by a template.',
            }}
          />
        </Sequence>

        <Sequence from={sec(17.4)} durationInFrames={sec(8.0)}>
          <Caption
            cue={{
              id: 'style-lab-caption-2',
              start: 0,
              duration: 8.0,
              text: 'Premium chalk animation stays simple, legible, and deliberately human.',
            }}
          />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
