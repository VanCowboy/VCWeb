import { Component } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

  images = [
    {
      text: 'Allie Girl',
      image: '../../assets/images/dogs/allie.jpg'
    },
    {
      text: 'Brocolli',
      image: '../../assets/images/dogs/Broc1.jpg'
    },
    {
      text: 'Charlie',
      image: '../../assets/images/dogs/charlie.jpg'
    },
    {
      text: 'Guinness',
      image: '../../assets/images/dogs/guiness.jpg'
    },
    {
      text: 'Pumpkin',
      image: '../../assets/images/dogs/pumpkin.jpg'
    },
    {
      text: 'Shylo',
      image: '../../assets/images/dogs/shylo.jpg'
    },
    {
      text: 'Zues',
      image: '../../assets/images/dogs/Broc1.jpg'
    }
  ];

  constructor() {}

  click(i) {
    alert(`${i}`);
  }
}
