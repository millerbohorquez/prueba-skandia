import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiResponse, CardItem } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
private url = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) {}

  getCards(): Observable<CardItem[]> {
    return this.http.get<ApiResponse>(this.url).pipe(
      map(res => res?.listCard ?? [])
    );
  }
}
