import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const webName = "Markets LCC";

export const getInitials = (name: string | null | undefined) =>
  (name || "UE")
    .split(" ")
    .slice(0, 2)
    .map((value) => value.charAt(0).toUpperCase())
    .join(".");

   export  function formatLocalCurrency(
  value: number|null|undefined,
  currency: string = "UGX",
  locale: string = "en-UG"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value||0);
}


export function getGradientWithTextColor(usersName: string|null|undefined): {
  background: string;
  textColor: string;
  boxShadow: string;
} {
  const name = usersName||'UE'
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue1 = Math.abs(hash) % 360;
  const hue2 = (hue1 + 60) % 360;

  const background = `linear-gradient(135deg, hsl(${hue1}, 70%, 50%), hsl(${hue2}, 70%, 50%))`;

  // Estimate midpoint color (average hue)
  const midHue = (hue1 + hue2) / 2;
  const midLightness = 50; // same as above

  // Decide text color based on lightness: light BG → dark text, dark BG → light text
  const isLight = midLightness > 55;
  const textColor = isLight ? "#000000" : "#FFFFFF";

  const boxShadow =  `0 0 4px hsl(${midHue}, 70%, 40%)`;

  return { background, textColor, boxShadow };
}
