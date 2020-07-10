import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
//import {catch} from'rxjs/add/operator';
//import {do} from'rxjs/add/operator';


@Injectable()
  
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  //private authToken='MTNmYTJjYzcwYmE4YzA4YTk3MmE1MDkyNTJjOTRhODE1Yjk0NTczNzFlMzYwNThmYmY1YjJmNWQ2MjUzYjgwNTc2MTcyMzQwM2ZiYmNkNTYwODM1ZTE2NTEyMTUwNjFkM2U3OTUxMzYzYzIzMGY0YmQ4YTQ0YjczZDA5Y2NkMjU2Yw=='


  constructor(private _http:HttpClient) {

    console.log("blog-http is called");

  }
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=MTNmYTJjYzcwYmE4YzA4YTk3MmE1MDkyNTJjOTRhODE1Yjk0NTczNzFlMzYwNThmYmY1YjJmNWQ2MjUzYjgwNTc2MTcyMzQwM2ZiYmNkNTYwODM1ZTE2NTEyMTUwNjFkM2U3OTUxMzYzYzIzMGY0YmQ4YTQ0YjczZDA5Y2NkMjU2Yw==');
    console.log(myResponse);
    return myResponse;



  }
  
  

  public getsingleBlogInformation(currentBlogId): any {

    
}
}