import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRateResponse } from './payload/exchange-rate-response';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) { }
  getRates(base: string): Observable<ExchangeRateResponse>{
   return this.http.get<ExchangeRateResponse>('https://api.exchangeratesapi.io/latest?base=${base}')
  }
}
