import { type Theme, themes } from "@/global/data/themes";
import { ThemeMode } from "@/global/stores/theme/enums";

export const getStyles = (
  type: ThemeMode,
  name: string,
  fallback: string,
): string => {
  let theme: Theme | undefined;

  theme ||= themes.find((item) => item.name === name);
  theme ||= themes.find((item) => item.name === fallback);

  if (!theme) return '';

  return `:root {${theme.css[type as any]}}`;
}
