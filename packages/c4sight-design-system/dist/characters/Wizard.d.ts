type View = "front" | "three-quarter-left" | "three-quarter-right" | "side";
type Expression = "neutral" | "sulking" | "panicked" | "smug" | "disappointed" | "shrug";
type Pose = "credit" | "debunked" | "stealing" | null;
interface WizardProps {
    view?: View;
    expression?: Expression;
    pose?: Pose;
    size?: number;
    showWand?: boolean;
    /** rotate hat slightly forward (e.g. for the 'NO.' beat) */
    hatTilt?: number;
    /** translate hat downward (hat-fallen-forward) */
    hatDrop?: number;
}
export declare function Wizard({ view, expression, pose, size, showWand, hatTilt, hatDrop, }: WizardProps): import("react/jsx-runtime").JSX.Element;
export type { View as WizardView, Expression as WizardExpression, Pose as WizardPose, WizardProps };
export declare const wizardPalette: {
    LAVENDER: string;
    LAVENDER_SHADOW: string;
    SLATE: string;
    INK: string;
    CHALK: string;
    RED: string;
};
//# sourceMappingURL=Wizard.d.ts.map