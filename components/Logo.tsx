type Props = { width?: number; height?: number; variant?: "ink" | "gold" | "neon" };

// Djaya brand mark — gold arch framing a stacked-stones cairn (vector of the real neon logo).
export default function Logo({ width = 26, height = 32, variant = "ink" }: Props) {
  const stroke = variant === "ink" ? "#c2974b" : variant === "gold" ? "#c2974b" : "#d4af61";
  const fillA = variant === "ink" ? "#2a1c12" : variant === "gold" ? "#c2974b" : "#d4af61";
  const fillB = variant === "ink" ? "#2a1c12" : variant === "gold" ? "#c2974b" : "#e6c987";
  return (
    <svg width={width} height={height} viewBox="0 0 64 80" fill="none" aria-hidden="true">
      <ellipse cx="32" cy="33" rx="25" ry="31" fill="none" stroke={stroke} strokeWidth="2.4" />
      <ellipse cx="32" cy="58" rx="17" ry="6.4" fill={fillA} />
      <ellipse cx="32" cy="48" rx="14" ry="6" fill={fillB} />
      <ellipse cx="32" cy="39.5" rx="11.2" ry="5.6" fill={fillA} />
      <ellipse cx="32" cy="31.5" rx="8.4" ry="5" fill={fillB} />
      <ellipse cx="32" cy="24.5" rx="5.6" ry="4.2" fill={fillA} />
    </svg>
  );
}
