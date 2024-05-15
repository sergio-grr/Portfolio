export interface CountryData {
  name: Name;
  flags: { svg: string };
  capital: string;
  population: number;
  region: string;
  currencies:  {
    [code: string]: {
      name: string;
      symbol: string;
    }
  };
  languages: {
    [code: string]: string;
  }

}


export interface Name {
  common: string
}
export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export interface Aed {
  name:   string;
  symbol: string;
}

export interface Currencies {
  MDL?: Aed;
  USD?: Aed;
  EUR?: Aed;
  AUD?: Aed;
  MZN?: Aed;
  BRL?: Aed;
  CVE?: Aed;
  XAF?: Aed;
  ALL?: Aed;
  NZD?: Aed;
  NGN?: Aed;
  GMD?: Aed;
  SOS?: Aed;
  YER?: Aed;
  MYR?: Aed;
  XCD?: Aed;
  GBP?: Aed;
  MGA?: Aed;
  DZD?: Aed;
  MAD?: Aed;
  MRU?: Aed;
  PYG?: Aed;
  LKR?: Aed;
  ZAR?: Aed;
  KWD?: Aed;
  SLL?: Aed;
  RWF?: Aed;
  SYP?: Aed;
  HNL?: Aed;
  JOD?: Aed;
  TVD?: Aed;
  NPR?: Aed;
  LRD?: Aed;
  GGP?: Aed;
  DJF?: Aed;
  FJD?: Aed;
  NOK?: Aed;
  FKP?: Aed;
  KZT?: Aed;
  TMT?: Aed;
  BGN?: Aed;
  XPF?: Aed;
  BBD?: Aed;
  STN?: Aed;
  BND?: Aed;
  SGD?: Aed;
  BTN?: Aed;
  INR?: Aed;
  ARS?: Aed;
  AZN?: Aed;
  MXN?: Aed;
  GTQ?: Aed;
  KES?: Aed;
  CZK?: Aed;
  GIP?: Aed;
  AWG?: Aed;
  AED?: Aed;
  SSP?: Aed;
  XOF?: Aed;
  SHP?: Aed;
  BWP?: Aed;
  UZS?: Aed;
  TND?: Aed;
  HKD?: Aed;
  MKD?: Aed;
  SRD?: Aed;
  SBD?: Aed;
  UAH?: Aed;
  BAM?: Aed;
  IRR?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  ERN?: Aed;
  TRY?: Aed;
  PHP?: Aed;
  VUV?: Aed;
  BOB?: Aed;
  RON?: Aed;
  KHR?: Aed;
  ZWL?: Aed;
  JEP?: Aed;
  KGS?: Aed;
  GYD?: Aed;
  AMD?: Aed;
  LBP?: Aed;
  DKK?: Aed;
  PGK?: Aed;
  ZMW?: Aed;
  TTD?: Aed;
  PEN?: Aed;
  SEK?: Aed;
  SDG?: Aed;
  OMR?: Aed;
  TWD?: Aed;
  MNT?: Aed;
  TZS?: Aed;
  CAD?: Aed;
  CRC?: Aed;
  CNY?: Aed;
  COP?: Aed;
  MMK?: Aed;
  RUB?: Aed;
  KPW?: Aed;
  KYD?: Aed;
  BYN?: Aed;
  SZL?: Aed;
  PLN?: Aed;
  CHF?: Aed;
  VES?: Aed;
  PAB?: Aed;
  WST?: Aed;
  FOK?: Aed;
  THB?: Aed;
  BSD?: Aed;
  TOP?: Aed;
  BIF?: Aed;
  BHD?: Aed;
  IMP?: Aed;
  HTG?: Aed;
  AFN?: Aed;
  ILS?: Aed;
  LYD?: Aed;
  UYU?: Aed;
  NIO?: Aed;
  CKD?: Aed;
  LAK?: Aed;
  KID?: Aed;
  ANG?: Aed;
  JMD?: Aed;
  EGP?: Aed;
  CLP?: Aed;
  LSL?: Aed;
  GHS?: Aed;
  SCR?: Aed;
  AOA?: Aed;
  BMD?: Aed;
  PKR?: Aed;
  SAR?: Aed;
  KRW?: Aed;
  ETB?: Aed;
  BDT?: Aed;
  KMF?: Aed;
  BZD?: Aed;
  UGX?: Aed;
  HUF?: Aed;
  ISK?: Aed;
  TJS?: Aed;
  NAD?: Aed;
  RSD?: Aed;
  MUR?: Aed;
  MOP?: Aed;
  MVR?: Aed;
  IDR?: Aed;
  CDF?: Aed;
  VND?: Aed;
  GNF?: Aed;
  GEL?: Aed;
  MWK?: Aed;
  IQD?: Aed;
  JPY?: Aed;
  DOP?: Aed;
  QAR?: Aed;
}

