import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from "rxjs/operators";

@Injectable()
export class AppService {
 constructor(@Inject("SERVICE_A")
  private readonly clientServerA: ClientProxy){}

  pingServiceA(){
    const startTs = Date.now();
    const pattern = {cmd :"ping"};
    const payload = {};
    return this.clientServerA
    .send<string>(pattern,payload)
    .pipe(map((message: string)=> 
      ({message,duration : Date.now()-startTs})));
  }
  sendServiceA(msg){
    const startTs = Date.now();
    const pattern = {cmd: "message"};
    const payload = {msg};
    console.log(msg);
    return this.clientServerA
    .send<string>(pattern,payload);
  }
  
}

