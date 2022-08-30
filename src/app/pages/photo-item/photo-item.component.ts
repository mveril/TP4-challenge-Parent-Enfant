import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Obj } from '@popperjs/core';
import { PicturesService } from 'src/app/core/services/pictures.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnChanges {
  @Input() collection!: Item[]
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.collection);
  }
}
