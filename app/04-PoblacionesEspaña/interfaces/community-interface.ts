export interface GeoPoint {
  lon: number;
  lat: number;
}

export interface MapData {
  province: string;
  data_type: 'community' | 'province' | 'municipality';
  name: string;
  geo_point_2d: GeoPoint;
  acom_name?: string;
  prov_name?: string;
  mun_name?: string;
}

export interface MunicipalityData {
  mun_name: string;
  geo_point_2d: GeoPoint;
}
