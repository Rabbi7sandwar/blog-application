import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogViewComponent,
    BlogEditComponent,
    BlogCreateComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'**',component:NotfoundComponent}
    ]),
    AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
