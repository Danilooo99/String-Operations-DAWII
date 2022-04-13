import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';

@Component({
  selector: 'app-textarea2',
  templateUrl: './textarea2.component.html',
  styleUrls: ['./textarea2.component.css']
})
export class Textarea2Component implements OnInit {

  msg!: string;

  constructor(private serviceComunication: ComunicationService){}

  ngOnInit(): void {
    this.serviceComunication.disparator.subscribe(data =>{
      this.msg = data
    });
  }
}
