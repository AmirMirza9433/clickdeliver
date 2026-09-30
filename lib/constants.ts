import { APP_CONFIG, NAV_ITEMS } from '@/data/siteConfig';
import { BENTO_FEATURES } from '@/data/features';
import { HOW_IT_WORKS_STEPS as STEPS_DATA } from '@/data/howItWorks';
import { STATS_DATA } from '@/data/stats';
import { ROLES_DATA } from '@/data/roles';

export const APP_INFO = {
  name: APP_CONFIG.name,
  slogan: APP_CONFIG.tagline,
  email: APP_CONFIG.email,
  phone: APP_CONFIG.phone,
  phoneDisplay: APP_CONFIG.phoneDisplay,
  location: APP_CONFIG.location,
  playStoreUrl: APP_CONFIG.playStoreUrl,
  appStoreUrl: APP_CONFIG.appStoreUrl,
};

export const SOCIAL_LINKS = APP_CONFIG.socials;

export const NAV_LINKS = NAV_ITEMS;

export const FEATURES = BENTO_FEATURES.map((f) => ({
  icon: f.iconName,
  title: f.title,
  description: f.description,
  badge: f.badge,
}));

export const HOW_IT_WORKS_STEPS = STEPS_DATA.map((s) => ({
  number: s.number,
  title: s.title,
  description: s.description,
  icon: s.iconName,
}));

export const STATS = STATS_DATA.map((s) => ({
  value: s.value,
  suffix: s.suffix,
  label: s.label,
}));

export const USER_TYPES = ROLES_DATA.map((r) => ({
  title: r.title,
  icon: r.iconName,
  features: r.benefits.map((b) => b.title),
}));
