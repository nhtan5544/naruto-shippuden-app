export type LocalizedString = { vi: string; en: string };

export interface Character {
  id: string;
  name: string;
  nameJP?: string;
  slug: string;
  village: string;
  rank: LocalizedString;
  clan?: LocalizedString;
  kekkeiGenkai?: string;
  dojutsu?: LocalizedString;
  description: LocalizedString;
  history: LocalizedString;
  abilities: LocalizedString[];
  image?: string;
  birthdate?: string;
  age?: string;
  status: "alive" | "dead" | "unknown";
  tags: LocalizedString[];
}

export interface Village {
  id: string;
  name: LocalizedString;
  nameJP?: string;
  slug: string;
  country: LocalizedString;
  kage: string;
  symbol: LocalizedString;
  description: LocalizedString;
  history: LocalizedString;
  notableNinja: string[];
  tags: LocalizedString[];
}

export interface DojutsuAbility {
  name: LocalizedString;
  description: LocalizedString;
}

export interface Dojutsu {
  id: string;
  name: string;
  nameJP?: string;
  slug: string;
  clan: LocalizedString;
  tier: "common" | "rare" | "legendary";
  description: LocalizedString;
  history: LocalizedString;
  abilities: DojutsuAbility[];
  users: LocalizedString[];
  color: string;
  image?: string;
}

export interface Author {
  name: string;
  nameJP: string;
  birthdate: LocalizedString;
  birthplace: LocalizedString;
  description: LocalizedString;
  biography: LocalizedString[];
  works: LocalizedString[];
  awards: LocalizedString[];
}
