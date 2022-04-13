import { Component, OnInit} from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';

@Component({
  selector: 'app-textarea1',
  templateUrl: './textarea1.component.html',
  styleUrls: ['./textarea1.component.css']
})
export class Textarea1Component implements OnInit {

  dataSend!: string;
  
  constructor(private serviceComunication: ComunicationService){
  }

  ngOnInit(): void {
    // Receive the data.
    this.serviceComunication.disparator.subscribe(data =>{
      if(data===""){
        this.dataSend = data;
      }
    });
  }
}
