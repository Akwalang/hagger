import { styles as boldTech } from "./styles/bold-tech.ts";
import { styles as caffeine } from "./styles/caffeine.ts";
import { styles as candyland } from "./styles/candyland.ts";
import { styles as claude } from "./styles/claude.ts";
import { styles as claymorphism } from "./styles/claymorphism.ts";
import { styles as cleanSlate } from "./styles/clean-slate.ts";
import { styles as cosmicNight } from "./styles/cosmic-night.ts";
import { styles as cyberpunk } from "./styles/cyberpunk.ts";
import { styles as elegantLuxury } from "./styles/elegant-luxury.ts";
import { styles as kodamaGrove } from "./styles/kodama-grove.ts";
import { styles as midnightBloom } from "./styles/midnight-bloom.ts";
import { styles as modernMinimal } from "./styles/modern-minimal.ts";
import { styles as nature } from "./styles/nature.ts";
import { styles as neoBrutalism } from "./styles/neo-brutalism.ts";
import { styles as northernLights } from "./styles/northern-lights.ts";
import { styles as oceanBreeze } from "./styles/ocean-breeze.ts";
import { styles as pastelDreams } from "./styles/pastel-dreams.ts";
import { styles as perpetuity } from "./styles/perpetuity.ts";
import { styles as quantumRose } from "./styles/quantum-rose.ts";
import { styles as retroArcade } from "./styles/retro-arcade.ts";
import { styles as sunsetHorizon } from "./styles/sunset-horizon.ts";
import { styles as vintagePaper } from "./styles/vintage-paper.ts";

import { ThemeName } from "./enums";

export type ThemeStyle = { light: string, dark: string };

export const styles: Record<ThemeName, ThemeStyle> = {
  [ThemeName.BoldTech]: boldTech,
  [ThemeName.Caffeine]: caffeine,
  [ThemeName.Candyland]: candyland,
  [ThemeName.Claude]: claude,
  [ThemeName.Claymorphism]: claymorphism,
  [ThemeName.CleanSlate]: cleanSlate,
  [ThemeName.CosmicNight]: cosmicNight,
  [ThemeName.Cyberpunk]: cyberpunk,
  [ThemeName.ElegantLuxury]: elegantLuxury,
  [ThemeName.KodamaGrove]: kodamaGrove,
  [ThemeName.MidnightBloom]: midnightBloom,
  [ThemeName.ModernMinimal]: modernMinimal,
  [ThemeName.Nature]: nature,
  [ThemeName.NeoBrutalism]: neoBrutalism,
  [ThemeName.NorthernLights]: northernLights,
  [ThemeName.OceanBreeze]: oceanBreeze,
  [ThemeName.PastelDreams]: pastelDreams,
  [ThemeName.Perpetuity]: perpetuity,
  [ThemeName.QuantumRose]: quantumRose,
  [ThemeName.RetroArcade]: retroArcade,
  [ThemeName.SunsetHorizon]: sunsetHorizon,
  [ThemeName.VintagePaper]: vintagePaper,
};
