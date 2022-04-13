import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';

@Component({
  selector: 'app-buttons-operations',
  templateUrl: './buttons-operations.component.html',
  styleUrls: ['./buttons-operations.component.css']
})
export class ButtonsOperationsComponent implements OnInit {

  @Input() dataReceive: any;

  constructor(private serviceComunication: ComunicationService) { 
  }

  ngOnInit(): void {
  }

  // Function that call to services functions with the data o Input Area.
  operation(msg: string){

    // Strings Operations
    if(msg==="uppercase"){
      this.serviceComunication.upper(this.dataReceive, msg);
    }

    if(msg==="lowercase"){
      this.serviceComunication.lower(this.dataReceive, msg);
    }

    if(msg==="reverse"){
      this.serviceComunication.rever(this.dataReceive, msg);
    }

    if(msg==="reset"){
      this.serviceComunication.reset(this.dataReceive, msg);
    }

    //Encryption Operations
    if(msg==="AES"){
      this.serviceComunication.aesEncrypt(this.dataReceive, msg);
    }

    if(msg==="TRIPLE-DES"){
      this.serviceComunication.tripleDesEncrypt(this.dataReceive, msg);
    }

    if(msg==="MD5"){
      this.serviceComunication.md5Encrypt(this.dataReceive, msg);
    }

    if(msg==="SHA256"){
      this.serviceComunication.sha256Encrypt(this.dataReceive, msg);
    }

    // Sring Counts
    if(msg==="chars"){
      this.serviceComunication.charsCount(this.dataReceive, msg);
    }

    if(msg==="vocals"){
      this.serviceComunication.vocalCount(this.dataReceive, msg);
    }
    
    if(msg==="consonant"){
      this.serviceComunication.consonantCount(this.dataReceive, msg);
    }
    
    if(msg==="specialCharacters"){
      this.serviceComunication.specialCharactersCount(this.dataReceive, msg);
    } 
  }

}
