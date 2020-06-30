import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
   {
      "blogId": "_BDY0jevz",
      "lastModified": "2020-06-06T16:57:17.004Z",
      "created": "2020-06-06T16:57:17.004Z",
      "tags": [],
      "author": "saurabh bharti",
      "category": "Health",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "dsfsdgasfadfqw4234234",
      "description": "sdgsdg2342342341",
      "title": "Web Component Fundamentalasasasasa"
    },
    {
      "blogId": "omCWSQUI8",
      "lastModified": "2020-06-07T02:43:35.290Z",
      "created": "2020-06-07T02:43:35.290Z",
      "tags": [],
      "author": "kalyan veenam",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "Heyyy",
      "description": "Desx",
      "title": "Test"
    }
  ]
  public currentBlog;
  
  constructor() {

    console.log("service constructor is called");
  }

  public getAllBlogs(): any {

    return this.getAllBlogs;

  }


  public  getsingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }

    }
    console.log(this.currentBlog);
    return this.currentBlog;

  }
} 
