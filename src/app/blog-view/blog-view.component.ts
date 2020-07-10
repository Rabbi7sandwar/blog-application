import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy{
  public currentBlog;

  

  constructor(private _route: ActivatedRoute, private router: Router, public blogService:BlogService ) {
    console.log("constructor is called");
  }

  ngOnInit() {
    console.log("ngOnInit is called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog=this.blogService.getsingleBlogInformation(myBlogId);
    console.log(this.currentBlog);
  }
  
  
  ngOnDestroy(){
    console.log("Blog view component destroyed")
  }
}
