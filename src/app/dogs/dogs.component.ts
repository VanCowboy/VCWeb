import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: [
      '<div class=\'fa fa-chevron-left\'></i>',
      '<div class=\'fa fa-chevron-right\'></div>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: true
      },
      1500: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  };

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
