import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBlogRoutingModule } from './create-blog-routing.module';
import { CreateBlogComponent } from './create-blog.component';


@NgModule({
  declarations: [CreateBlogComponent],
  imports: [
    CommonModule,
    CreateBlogRoutingModule
  ]
})
export class CreateBlogModule { }
