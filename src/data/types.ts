export interface Character {
  id: string;
  name: string;
  nameJP?: string;
  slug: string;
  village: string;
  rank: string;
  clan?: string;
  kekkeiGenkai?: string;
  dojutsu?: string;
  description: string;
  history: string;
  abilities: string[];
  image?: string;
  birthdate?: string;
  age?: string;
  status: "alive" | "dead" | "unknown";
  tags: string[];
}

export interface Village {
  id: string;
  name: string;
  nameJP?: string;
  slug: string;
  country: string;
  kage: string;
  symbol: string;
  description: string;
  history: string;
  notableNinja: string[];
  tags: string[];
}

export interface DojutsuAbility {
  name: string;
  description: string;
}

export interface Dojutsu {
  id: string;
  name: string;
  nameJP?: string;
  slug: string;
  clan: string;
  tier: "common" | "rare" | "legendary";
  description: string;
  history: string;
  abilities: DojutsuAbility[];
  users: string[];
  color: string;
  image?: string;
}

export interface Author {
  name: string;
  nameJP: string;
  birthdate: string;
  birthplace: string;
  description: string;
  biography: string[];
  works: string[];
  awards: string[];
}
