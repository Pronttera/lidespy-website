import { Fragment, type ReactNode } from "react";

/**
 * The design emphasises fragments inside body copy with `<strong>`. Content is
 * stored with `**markers**` so it stays readable in the data files.
 */
export function Bold({ text }: { text: string }): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
