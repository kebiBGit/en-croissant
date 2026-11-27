import { expect, test } from "vitest";
import { getRightClickSquareHighlights } from "../rightClickHighlight";

test("uses a circle's brush for a full-square highlight and ignores arrows", () => {
    const highlights = getRightClickSquareHighlights([
        { orig: "e4", brush: "red" },
        { orig: "e4", dest: "d5", brush: "green" },
    ]);

    expect(highlights).toEqual(new Map([["e4", "right-click-highlight-red"]]));
});
