import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{


  public allBlogs;


  constructor(public blogService:BlogService) { 
    console.log("home component construstor called")
  }

  ngOnInit() {

    console.log("home componenet OnInit callled");
    this.allBlogs = this.blogService.getAllBlogs();
    console.log(this.allBlogs);
  }

  ngOnDestroy() {
    console.log("home component Destroyed")


  }

}