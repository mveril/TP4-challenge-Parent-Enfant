import { Component } from '@angular/core';
import { PicturesService } from './core/services/pictures.service';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collection!: Item[]
  title : String ="Appli photo"
  constructor(private pictureService:PicturesService){
    pictureService.collection.subscribe((data)=>{
      this.collection=data;
      console.log(this.collection,"Collection")
    })
  }
}
