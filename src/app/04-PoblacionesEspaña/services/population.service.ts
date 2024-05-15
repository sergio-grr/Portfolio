import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapData } from '../interfaces/community-interface';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  constructor(private http: HttpClient) { }

  private API_COMMUNITY = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-comunidad-autonoma/records';
  private API_PROVINCE = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-provincia/records';
  private API_CITY = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-municipio/records';

  // Obtener comunidades autónomas
  getCommunity(): Observable<MapData[]> {
    return this.http.get<MapData[]>(`${this.API_COMMUNITY}?select=acom_name&limit=100`);
  }

  // Obtener provincias para una comunidad autónoma dada
  getProvincesByCommunity(communityName: string): Observable<MapData[]> {
    return this.http.get<MapData[]>(`${this.API_PROVINCE}?select=prov_name,acom_name&where=acom_name='${encodeURIComponent(communityName)}'&limit=100`);
  }

  // Obtener municipios para una provincia dada
  getMunicipality(provinceName: string): Observable<MapData[]> {
    return this.http.get<MapData[]>(`${this.API_CITY}?select=mun_name,geo_point_2d&where=prov_name='${encodeURIComponent(provinceName)}'&limit=100`);
  }
}

