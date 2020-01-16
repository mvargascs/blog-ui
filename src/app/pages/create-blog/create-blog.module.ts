import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBlogRoutingModule } from './create-blog-routing.module';
import { CreateBlogComponent } from './create-blog.component';
import { MaterialModule } from '@shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateBlogComponent],
  imports: [
    CommonModule,
    CreateBlogRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class CreateBlogModule { }
