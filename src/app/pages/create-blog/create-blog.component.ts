import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Blog } from '@shared/models/Blog';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '@shared/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'migs-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit, OnDestroy {
  blogForm: FormGroup;
  subs: Subscription = new Subscription();

  constructor(
    private config: ConfigService,
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.config.changeTitle('Create Blog');

    this.blogForm = this.fb.group({
      title: [''],
      content: ['']
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  createBlog() {
    const blog: Blog = {
      title: this.blogForm.value.title,
      content: this.blogForm.value.content
    }

    this.subs.add(
      this.http.post('http://localhost:8080/mock/blog', blog).subscribe()
    );
  }
}
