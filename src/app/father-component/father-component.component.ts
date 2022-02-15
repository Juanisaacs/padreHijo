import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss']
})
export class FatherComponentComponent implements OnInit {

public inputText: string= '';
public sonMessage: string= '';

public keyUp(letra: string): void{
  this.inputText= letra;
}
public setMessage( mesaage: string): void{
  this.sonMessage= mesaage;
}
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
