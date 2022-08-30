import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  private collection$!: Observable<Item[]>
  constructor(private http: HttpClient) {
    this.Collection=this.http.get<Item[]>('https://jsonplaceholder.typicode.com/photos');

  }

  public get Collection() {
    return this.collection$;
  }

  public set Collection(value) {
    this.collection$ = value;
    console.log(value,"Observable initialized");
  }
}
