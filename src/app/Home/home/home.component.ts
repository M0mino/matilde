import { Component, OnInit } from '@angular/core';
import { DatiService } from '../../services/dati.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  pokedata:any;

  constructor(private service:DatiService){
    
  }
  ngOnInit(): void {
    
  }

}

