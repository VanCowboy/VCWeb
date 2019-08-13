import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nola2019',
  templateUrl: './nola2019.component.html',
  styleUrls: ['./nola2019.component.css']
})
export class Nola2019Component {

  images = [1, 2, 3].map(() => `.\pictures\?random&t=${Math.random()}`);

  constructor() { }

}
