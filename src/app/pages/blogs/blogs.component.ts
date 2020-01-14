import { Component, OnInit } from '@angular/core';
import { Blog } from '@shared/models/Blog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'migs-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs$: Observable<Blog[]>;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.blogs$ = this.http.get<Blog[]>("http://localhost:8080/mock/blog");
  }
}
