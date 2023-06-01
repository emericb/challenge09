import {Component, EventEmitter, Output} from '@angular/core';
import {Kitten} from "../models/Kitten";

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
  newKitten: Kitten = new Kitten('', '', new Date(), '');

  @Output() sendKittenToParent = new EventEmitter<Kitten>();

  createKitten() {
    this.sendKittenToParent.emit(this.newKitten);
    this.newKitten = new Kitten('', '', new Date(), '');
  }
}
