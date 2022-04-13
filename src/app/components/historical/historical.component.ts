import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  operations: string [] = [
    "No Operations",
  ];

  constructor(private serviceComunication: ComunicationService) { }

  ngOnInit(): void {
    this.serviceComunication.disparator2.subscribe(data =>{
      if(this.operations.includes("No Operations")){
        this.operations.pop();
      }
      this.operations.push(data);
    });
  }

  // Clear Historical Operations.
  clearHistorical():void{
    this.operations = [
      "No Operations",
    ]; 
  }

}
