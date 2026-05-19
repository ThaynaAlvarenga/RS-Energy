interface SolarIconProps {
  variant?: "dark" | "light" | "green";
  size?: number;
}

export default function SolarIcon({ variant = "light", size = 32 }: SolarIconProps) {
  const petalColor =
    variant === "dark" ? "#FFFFFF" :
    variant === "green" ? "#0D1F3C" :
    "#00C972";

  const textColor =
    variant === "dark" ? "#FFFFFF" :
    variant === "green" ? "#0D1F3C" :
    "#0D1F3C";

  // Fixed petal positions (10 petals around circle)
  const petals = [
    { x: 32, y: 12 },      // top
    { x: 41.76, y: 14.47 },
    { x: 48.94, y: 22.47 },
    { x: 51.21, y: 32 },
    { x: 48.94, y: 41.53 },
    { x: 41.76, y: 49.53 },
    { x: 32, y: 52 },      // bottom
    { x: 22.24, y: 49.53 },
    { x: 15.06, y: 41.53 },
    { x: 12.79, y: 32 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin" 
      style={{ animationDuration: "20s" }}
    >
      {/* Central Circle */}
      <circle cx="32" cy="32" r="12" fill={petalColor} />

      {/* 10 Petals */}
      {petals.map((petal, i) => (
        <circle
          key={i}
          cx={petal.x}
          cy={petal.y}
          r="6"
          fill={petalColor}
          opacity="0.8"
        />
      ))}

      {/* Inner text indicator */}
      <text
        x="32"
        y="36"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill={textColor}
        opacity="0.6"
      >
        ☀
      </text>
    </svg>
  );
}
