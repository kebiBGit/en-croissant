import type { DrawShape } from "@lichess-org/chessground/draw";

export const RIGHT_CLICK_BRUSHES = ["green", "red", "blue", "yellow"] as const;
const rightClickBrushSet = new Set<string>(RIGHT_CLICK_BRUSHES);

export function getRightClickSquareHighlights(shapes: DrawShape[]): Map<DrawShape["orig"], string> {
    const highlights = new Map<DrawShape["orig"], string>();

    for (const shape of shapes) {
        if (shape.dest !== undefined || !shape.brush || !rightClickBrushSet.has(shape.brush)) {
            continue;
        }
        highlights.set(shape.orig, `right-click-highlight-${shape.brush}`);
    }

    return highlights;
}
