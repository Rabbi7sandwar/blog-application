import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
  
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken='MTNmYTJjYzcwYmE4YzA4YTk3MmE1MDkyNTJjOTRhODE1Yjk0NTczNzFlMzYwNThmYmY1YjJmNWQ2MjUzYjgwNTc2MTcyMzQwM2ZiYmNkNTYwODM1ZTE2NTEyMTUwNjFkM2U3OTUxMzYzYzIzMGY0YmQ4YTQ0YjczZDA5Y2NkMjU2Yw=='


  constructor(private _http:HttpClient) {

    console.log("blog-http is called");

  }
  private handleError(err: HttpErrorResponse) {
    console.log("Handle Error");
    console.log(err.message);
    return Observable.throw(err.message);
  }
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+ this.authToken);
    return myResponse;



  }

  public getsingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl+'/view'+'/'+ currentBlogId+'?authToken='+'MTNmYTJjYzcwYmE4YzA4YTk3MmE1MDkyNTJjOTRhODE1Yjk0NTczNzFlMzYwNThmYmY1YjJmNWQ2MjUzYjgwNTc2MTcyMzQwM2ZiYmNkNTYwODM1ZTE2NTEyMTUwNjFkM2U3OTUxMzYzYzIzMGY0YmQ4YTQ0YjczZDA5Y2NkMjU2Yw==')
    console.log(myResponse);
    return myResponse;

  }
  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken,blogData);
    return myResponse;
  }

  public deleteBlog(blogId): any {
    let data ={}
    const newLocal = this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken;
    let myResponse = this._http.post(newLocal,data);
    return myResponse;
  }

  public editBlog(blogId,blogData): any {

    let myResponse = this._http.put(this.baseUrl+ '/' + blogId +'/edit'+'?authToken='+this.authToken,blogData);
    return myResponse;
  }
}
