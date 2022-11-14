import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-collatz',
  templateUrl: './menu-collatz.component.html',
  styleUrls: ['./menu-collatz.component.css']
})
export class MenuCollatzComponent implements OnInit {
  public randoms: Array<number>;

  constructor() {
    this.randoms = new Array<number>();
  }

  ngOnInit(): void {
    this.getRandoms();
  }

  getRandoms(){
    for (let i = 0; i < 5; i++) {
      this.randoms.push(Math.floor(Math.random() * 100 + 1))
    }
  }
}
