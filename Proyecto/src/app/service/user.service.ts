import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { AuthService } from './auth.service';
import { userInterface } from '../models/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private authservice: AuthService) { }

  headers: HttpHeaders = new HttpHeaders ({
    'content-type': 'aplication/json',
    Authorization: this.authservice.getToken()
  });

// //get
//   findPreferencesById(){

//   }
//   //get email
//   getCountByEmail(email:string){
//     const url_api = "http://ec2-52-15-148-17.us-east-2.compute.amazonaws.com:3001/users/:email/countbyemail";
//     return this.http.get<userInterface>(url_api,{headers: this.headers})
//     .pipe(map(data => data));
//   }

//     //get usename
//   getCountByUsername(username:string){
//     const url_api = "http://ec2-52-15-148-17.us-east-2.compute.amazonaws.com:3001/users/:username/countbyusername";
//     return this.http.get<userInterface>(url_api,{headers: this.headers})
//     .pipe(map(data => data));
//   }

// //post 

//   //register user
//   RegisterUser( username:string, name:string, lastname:string, email:string, password:string, phone:number){
//     const url_api = "http://ec2-52-15-148-17.us-east-2.compute.amazonaws.com:3001/users";
//     return this.http.post<userInterface>(url_api,{username, name, lastname, email, password, phone},
//       {headers: this.headers})
//       .pipe(map(data => data));
//   }

// //put

//   //confir User
//   ConfirUser(challengecode:string){
//     const url_api = "http://ec2-52-15-148-17.us-east-2.compute.amazonaws.com:3001/users/confirm";
//     return this.http.put(url_api, challengecode,{headers: this.headers})
//     .pipe(map(data => data));
//   }
//   //actualizar user
//   updateUser(id: string, username:string, name:string, lastname:string, phone:number){
//     let token = this.authservice.getToken();
//     const url_api = "http://ec2-52-15-148-17.us-east-2.compute.amazonaws.com:3001/users/:id?acces_token=${token}";
//     return this.http.put<userInterface>(url_api, {username, name, lastname, phone}, {headers: this.headers})
//     .pipe(map(data => data));
//   }  
//   //RECOVERING THE USER PASSWORD
//   recPassword(id:string, newpassword:string, newpasswordconf:string){
//     let token = this.authservice.getToken();
//     const url_api = "http://ec2-52-15-148-17.us-east-2.compute.amazonaws.com:3001/users/:id/recpassword?acces_token=${token}";
//     return this.http.put(url_api,{newpassword, newpasswordconf}, {headers: this.headers})
//     .pipe(map(data => data));
//   }

}
