import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Catalogue } from "../models/catalogue";
import { CatalogueItem } from "../models/catalogue-item";
import { Provider } from "../models/provider";

@Injectable()
export class ProvidersService {
    baseUrl: string = 'http://localhost:5000/api';

    constructor(private httpClient: HttpClient) {}

    getAllProviders(includeCatalogueItems: boolean = false): Observable<Array<Provider>>{
        return this.httpClient.get<Array<Provider>>(`${this.baseUrl}/providers?includeCatalogueItems=${includeCatalogueItems}`);
    }

    getProviderById(providerId: number, includeCatalogueItems: boolean = true): Observable<Provider>{
        return this.httpClient.get<Provider>(`${this.baseUrl}/providers/${providerId}?includeCatalogueItems=${includeCatalogueItems}`);
    }

    getProviderCatalogueItems(providerId: number): Observable<Array<CatalogueItem>>{
        return this.httpClient.get<Array<CatalogueItem>>(`${this.baseUrl}/providers/${providerId}/menu`);
    }
}