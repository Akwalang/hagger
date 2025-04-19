import { ThemeStyle, styles } from "./styles";
import { ThemeName } from "./enums";

export type ThemeItem = {
  name: ThemeName;
  label: string;
  styles: ThemeStyle;
};

export const themes: Record<ThemeName, ThemeItem> = {
  [ThemeName.BoldTech]: {
    name: ThemeName.BoldTech,
    label: "Bold Tech",
    styles: styles[ThemeName.BoldTech],
  },
  [ThemeName.Caffeine]: {
    name: ThemeName.Caffeine,
    label: "Caffeine",
    styles: styles[ThemeName.Caffeine],
  },
  [ThemeName.Candyland]: {
    name: ThemeName.Candyland,
    label: "Candyland",
    styles: styles[ThemeName.Candyland],
  },
  [ThemeName.Claude]: {
    name: ThemeName.Claude,
    label: "Claude",
    styles: styles[ThemeName.Claude],
  },
  [ThemeName.Claymorphism]: {
    name: ThemeName.Claymorphism,
    label: "Claymorphism",
    styles: styles[ThemeName.Claymorphism],
  },
  [ThemeName.CleanSlate]: {
    name: ThemeName.CleanSlate,
    label: "Clean Slate",
    styles: styles[ThemeName.CleanSlate],
  },
  [ThemeName.CosmicNight]: {
    name: ThemeName.CosmicNight,
    label: "Cosmic Night",
    styles: styles[ThemeName.CosmicNight],
  },
  [ThemeName.Cyberpunk]: {
    name: ThemeName.Cyberpunk,
    label: "Cyberpunk",
    styles: styles[ThemeName.Cyberpunk],
  },
  [ThemeName.ElegantLuxury]: {
    name: ThemeName.ElegantLuxury,
    label: "Elegant Luxury",
    styles: styles[ThemeName.ElegantLuxury],
  },
  [ThemeName.KodamaGrove]: {
    name: ThemeName.KodamaGrove,
    label: "Kodama Grove",
    styles: styles[ThemeName.KodamaGrove],
  },
  [ThemeName.MidnightBloom]: {
    name: ThemeName.MidnightBloom,
    label: "Midnight Bloom",
    styles: styles[ThemeName.MidnightBloom],
  },
  [ThemeName.ModernMinimal]: {
    name: ThemeName.ModernMinimal,
    label: "Modern Minimal",
    styles: styles[ThemeName.ModernMinimal],
  },
  [ThemeName.Nature]: {
    name: ThemeName.Nature,
    label: "Nature",
    styles: styles[ThemeName.Nature],
  },
  [ThemeName.NeoBrutalism]: {
    name: ThemeName.NeoBrutalism,
    label: "Neo Brutalism",
    styles: styles[ThemeName.NeoBrutalism],
  },
  [ThemeName.NorthernLights]: {
    name: ThemeName.NorthernLights,
    label: "Northern Lights",
    styles: styles[ThemeName.NorthernLights],
  },
  [ThemeName.OceanBreeze]: {
    name: ThemeName.OceanBreeze,
    label: "Ocean Breeze",
    styles: styles[ThemeName.OceanBreeze],
  },
  [ThemeName.PastelDreams]: {
    name: ThemeName.PastelDreams,
    label: "Pastel Dreams",
    styles: styles[ThemeName.PastelDreams],
  },
  [ThemeName.Perpetuity]: {
    name: ThemeName.Perpetuity,
    label: "Perpetuity",
    styles: styles[ThemeName.Perpetuity],
  },
  [ThemeName.QuantumRose]: {
    name: ThemeName.QuantumRose,
    label: "Quantum Rose",
    styles: styles[ThemeName.QuantumRose],
  },
  [ThemeName.RetroArcade]: {
    name: ThemeName.RetroArcade,
    label: "Retro Arcade",
    styles: styles[ThemeName.RetroArcade],
  },
  [ThemeName.SunsetHorizon]: {
    name: ThemeName.SunsetHorizon,
    label: "Sunset Horizon",
    styles: styles[ThemeName.SunsetHorizon],
  },
  [ThemeName.VintagePaper]: {
    name: ThemeName.VintagePaper,
    label: "Vintage Paper",
    styles: styles[ThemeName.VintagePaper],
  },
} as const;
