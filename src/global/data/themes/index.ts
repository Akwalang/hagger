import { styles as boldTech } from './styles/bold-tech.ts';
import { styles as caffeine } from './styles/caffeine.ts';
import { styles as candyland } from './styles/candyland.ts';
import { styles as claude } from './styles/claude.ts';
import { styles as claymorphism } from './styles/claymorphism.ts';
import { styles as cleanSlate } from './styles/clean-slate.ts';
import { styles as cosmicNight } from './styles/cosmic-night.ts';
import { styles as cyberpunk } from './styles/cyberpunk.ts';
import { styles as elegantLuxury } from './styles/elegant-luxury.ts';
import { styles as kodamaGrove } from './styles/kodama-grove.ts';
import { styles as midnightBloom } from './styles/midnight-bloom.ts';
import { styles as modernMinimal } from './styles/modern-minimal.ts';
import { styles as nature } from './styles/nature.ts';
import { styles as neoBrutalism } from './styles/neo-brutalism.ts';
import { styles as northernLights } from './styles/northern-lights.ts';
import { styles as oceanBreeze } from './styles/ocean-breeze.ts';
import { styles as pastelDreams } from './styles/pastel-dreams.ts';
import { styles as perpetuity } from './styles/perpetuity.ts';
import { styles as quantumRose } from './styles/quantum-rose.ts';
import { styles as retroArcade } from './styles/retro-arcade.ts';
import { styles as sunsetHorizon } from './styles/sunset-horizon.ts';
import { styles as vintagePaper } from './styles/vintage-paper.ts';

export type Theme = {
  name: string;
  label: string;
  css: string;
};

export const themes: Theme[] = [
  { name: 'bold_tech', label: 'Bold Tech', css: boldTech },
  { name: 'caffeine', label: 'Caffeine', css: caffeine },
  { name: 'candyland', label: 'Candyland', css: candyland },
  { name: 'claude', label: 'Claude', css: claude },
  { name: 'claymorphism', label: 'Claymorphism', css: claymorphism },
  { name: 'clean_slate', label: 'Clean Slate', css: cleanSlate },
  { name: 'cosmic_night', label: 'Cosmic Night', css: cosmicNight },
  { name: 'cyberpunk', label: 'Cyberpunk', css: cyberpunk },
  { name: 'elegant_luxury', label: 'Elegant Luxury', css: elegantLuxury },
  { name: 'kodama_grove', label: 'Kodama Grove', css: kodamaGrove },
  { name: 'midnight_bloom', label: 'Midnight Bloom', css: midnightBloom },
  { name: 'modern_minimal', label: 'Modern Minimal', css: modernMinimal },
  { name: 'nature', label: 'Nature', css: nature },
  { name: 'neo_brutalism', label: 'Neo Brutalism', css: neoBrutalism },
  { name: 'northern_lights', label: 'Northern Lights', css: northernLights },
  { name: 'ocean_breeze', label: 'Ocean Breeze', css: oceanBreeze },
  { name: 'pastel_dreams', label: 'Pastel Dreams', css: pastelDreams },
  { name: 'perpetuity', label: 'Perpetuity', css: perpetuity },
  { name: 'quantum_rose', label: 'Quantum Rose', css: quantumRose },
  { name: 'retro_arcade', label: 'Retro Arcade', css: retroArcade },
  { name: 'sunset_horizon', label: 'Sunset Horizon', css: sunsetHorizon },
  { name: 'vintage_paper', label: 'Vintage Paper', css: vintagePaper },
] as const;
