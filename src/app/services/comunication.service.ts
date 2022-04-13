import { EventEmitter, Injectable, Output } from '@angular/core';
import { AES, MD5, SHA256, TripleDES} from "crypto-js";


@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  @Output() disparator: EventEmitter<any> = new EventEmitter();
  @Output() disparator2: EventEmitter<any> = new EventEmitter();

  constructor() { }

  // Functions that emit a string with the correct operations done.

  // String Functions
  upper(msg:string, operation: string){  
    console.log(msg);
    if(msg !== undefined){
      this.disparator.emit(msg.toUpperCase());
    }
    this.disparator2.emit(operation); 
  }

  lower(msg:string, operation: string) {
    if(msg !== undefined){
      this.disparator.emit(msg.toLowerCase());
    }
    this.disparator2.emit(operation); 
  }

  rever(msg:string, operation: string){
    if(msg !== undefined){
      this.disparator.emit(msg.split("").reverse().join(""));
    }
    this.disparator2.emit(operation); 
  }

  reset(msg:string, operation: string) {
    msg = "";
    this.disparator.emit(msg);
    this.disparator2.emit(operation); 
  }

  // Encryption Functions
  aesEncrypt(msg: string, operation: string) {
    var encrypted = AES.encrypt(msg, "keyEncrypt");
    msg = encrypted.toString();
    if(msg !== undefined){
      this.disparator.emit(msg);
    }
    this.disparator2.emit(operation);  
  }

  tripleDesEncrypt(msg: string, operation: string) {
    var encrypted = TripleDES.encrypt(msg, "keyEncrypt");
    msg = encrypted.toString();
    if(msg !== undefined){
      this.disparator.emit(msg); 
    }
    this.disparator2.emit(operation); 
  }

  md5Encrypt(msg: string, operation: string) {
    var encrypted = MD5(msg);
    msg = encrypted.toString();
    if(msg !== undefined){
      this.disparator.emit(msg); 
    }
    this.disparator2.emit(operation); 
  }

  sha256Encrypt(msg: string, operation: string) {
    var encrypted = SHA256(msg);
    msg = encrypted.toString();
    if(msg !== undefined){
      this.disparator.emit(msg);
    }
    this.disparator2.emit(operation); 
  }

  // Strings Counts

  charsCount(msg:string, operation: string) {
    if(msg===undefined){
      msg ="0";
      this.disparator.emit(msg);
    } else {
      let countChars = msg.length;
      if(countChars===undefined){
        msg = "0";
      } else {
        msg = countChars?.toString() + '';
      }
      if(msg !== undefined){
        this.disparator.emit(msg);
      } 
    }
    this.disparator2.emit(operation); 
  }
  
  vocalCount(msg: string, operation: string) {
    if(msg===undefined){
      msg ="0";
      this.disparator.emit(msg);
    } else {
      let count = msg.match(/[aeiouAEIOUáéíóúÁÉÍÓÚü]/gi);
      let vocals = count?.length;
      if(vocals===undefined){
        msg = "0";
      } else {
        msg = vocals?.toString() + '';
      }
      if(msg !== undefined){
        this.disparator.emit(msg); 
      }
      
    }
    this.disparator2.emit(operation); 
    
  }

  consonantCount(msg: string, operation: string) {
    if(msg===undefined){
      msg ="0";
      this.disparator.emit(msg);
    } else {
      let count = msg.match(/[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/gi);
      let consonant = count?.length;
      if(consonant===undefined){
        msg = "0";
      } else {
        msg = consonant?.toString() + '';
      }
      if(msg !== undefined){
        this.disparator.emit(msg); 
      }
    }
    this.disparator2.emit(operation); 
  }

  specialCharactersCount(msg: string, operation: string) {
    if(msg===undefined){
      msg ="0";
      this.disparator.emit(msg);
    } else {
      let count = msg.match(/[^A-Za-z0-9áéíóúÁÉÍÓÚü]/gi);
      let specialCharacters = count?.length;
      if(specialCharacters===undefined){
        msg = "0";
      } else {
        msg = specialCharacters?.toString() + '';
      }
      if(msg !== undefined){
        this.disparator.emit(msg); 
      }
    }
    this.disparator2.emit(operation); 
  }

}
