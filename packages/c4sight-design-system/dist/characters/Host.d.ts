type View = "front" | "blackboard" | "desk";
type Expression = "dry" | "raised-brow" | "smile" | "exasperated" | "curious";
type Pose = "gesture" | "two-tap-ready" | "brushing-dust" | "arms-crossed" | null;
type Variant = "a" | "b";
interface HostProps {
    view?: View;
    expression?: Expression;
    pose?: Pose;
    variant?: Variant;
    size?: number;
    glasses?: boolean;
    showChalk?: boolean;
    showNotebook?: boolean;
}
export declare function Host({ view, expression, pose, variant, size, glasses, showChalk, showNotebook, }: HostProps): import("react/jsx-runtime").JSX.Element;
export declare const hostVariants: Record<Variant, {
    skin: string;
    skinShadow: string;
    hair: string;
    shirt: string;
    shirtShadow: string;
    trousers: string;
}>;
export type { View as HostView, Expression as HostExpression, Pose as HostPose, Variant as HostVariant, HostProps };
//# sourceMappingURL=Host.d.ts.map