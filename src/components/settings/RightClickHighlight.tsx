import { Button, Group } from "@mantine/core";
import { useAtom } from "jotai";
import { rightClickHighlightAtom } from "@/state/atoms";

export default function RightClickHighlight() {
  const [highlightStyle, setHighlightStyle] = useAtom(rightClickHighlightAtom);

  return (
    <Group gap="xs">
      <Button
        size="xs"
        variant={highlightStyle === "circle" ? "filled" : "default"}
        onClick={() => setHighlightStyle("circle")}
      >
        Circular
      </Button>
      <Button
        size="xs"
        variant={highlightStyle === "square" ? "filled" : "default"}
        onClick={() => setHighlightStyle("square")}
      >
        Square
      </Button>
    </Group>
  );
}
