import { Component } from '@angular/core';
import {Kitten} from "../models/Kitten";

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
  kittens: Kitten[] = [
    {name: 'Felix', race: 'Abyssin', birthDate: new Date(2022, 0o1, 0o2), photo: 'https://placekitten.com/200/300'},
    {name: 'Chloe', race: 'Bengal', birthDate: new Date(2020, 0o3, 0o3), photo: 'https://placekitten.com/201/301'},
    {name: 'Whiskers', race: 'Maine Coon', birthDate: new Date(2021, 0o4,15), photo: 'https://placekitten.com/202/302'}
  ];

  onReceiveNewKitten(newKitten: Kitten) {
    this.kittens.push(newKitten);
  }
}
