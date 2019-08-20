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
      image: '../../assets/images/dogs/allie.jpg',
      anchor: 'Allie'
    },
    {
      text: 'Brocolli',
      image: '../../assets/images/dogs/Broc1.jpg',
      anchor: 'Brocolli'
    },
    {
      text: 'Charlie',
      image: '../../assets/images/dogs/charlie.jpg',
      anchor: 'Charlie'
    },
    {
      text: 'Guinness',
      image: '../../assets/images/dogs/guiness.jpg',
      anchor: 'Guinness'
    },
    {
      text: 'Pumpkin',
      image: '../../assets/images/dogs/pumpkin.jpg',
      anchor: 'Pumpkin'
    },
    {
      text: 'Shylo',
      image: '../../assets/images/dogs/shylo.jpg',
      anchor: 'Shylo'
    },
    {
      text: 'Zues',
      image: '../../assets/images/dogs/Broc1.jpg',
      anchor: 'Zues'
    }
  ];

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    const number = event.srcElement.scrollTop;
    console.log(event);
    console.log('I am scrolling ' + number);
  }

  constructor() {}

  click(i) {
    alert(`${i}`);
  }
}
