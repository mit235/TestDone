import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
setData(dataId:string,data:any){
  localStorage.setItem(dataId,JSON.stringify(data));
}
getData(dataId:string){
  if(localStorage.getItem(dataId)!==null){
    return localStorage.getItem(dataId);
  }
  else{
    return -1;
  }
}

}
