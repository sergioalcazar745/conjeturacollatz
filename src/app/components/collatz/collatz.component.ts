import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public lista: Array<number>
  public num!: number;

  constructor(private _activeRouted: ActivatedRoute) {
    this.lista = new Array<number>();
  }

  ngOnInit(): void {
    this._activeRouted.params.subscribe((params: Params) => {
      this.metodocollatz(parseInt(params['numero']))
    });
  }

  metodocollatz(num:number){
    var resultado = num
    for (let i = 0; i < 10; i++) {
      if(resultado % 2 == 0){
        console.log(num)
        resultado = num / 2;
        console.log(resultado)
        this.lista.push(resultado)
        if(resultado == 1){
          this.lista.push(resultado)
        }
        console.log(resultado)
      }else{
        resultado = (num * 3) + 1 
        this.lista.push(resultado)
      }      
    }
  }
}
