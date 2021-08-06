import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamMembers= {
    name :'',
    designation:'',
    about:'',
    imageUrl:''
  }
  
  constructor( private http:HttpClient) { }

  
 getTeam() {
  return this.http.get("http://localhost:3000/about");
  
}
}
