import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Blog } from '@shared/models/Blog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'migs-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.blogForm = this.fb.group({
      title: [''],
      content: ['']
    });
  }

  createBlog(blog: Blog) {
    return this.http.post("http://localhost:8080/mock/blog", blog);
  }
}
