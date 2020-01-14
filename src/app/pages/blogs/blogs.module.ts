import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogComponent } from './blog/blog.component';
import { MaterialModule } from '@shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class BlogsModule { }
