/** Inline replacements for the icons8 bitmaps used in the design. */

type IconProps = { className?: string; size?: number };

export function ArrowRight({ className, size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="square"
      aria-hidden
      className={className}
    >
      <path d="M3 12h17M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className, size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="square"
      aria-hidden
      className={className}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ChevronRight({ className, size = 12 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="square"
      aria-hidden
      className={className}
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function ChevronDown({ className, size = 12 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="square"
      aria-hidden
      className={className}
    >
      <path d="m5 9 7 7 7-7" />
    </svg>
  );
}

export function Check({ className, size = 10 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="square"
      aria-hidden
      className={className}
    >
      <path d="m4 12 6 6L20 6" />
    </svg>
  );
}

export function Search({ className, size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="square"
      aria-hidden
      className={className}
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" />
    </svg>
  );
}

export function Close({ className, size = 12 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="square"
      aria-hidden
      className={className}
    >
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}
