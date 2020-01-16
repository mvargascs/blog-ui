import { Component, OnInit } from '@angular/core';
import { Blog } from '@shared/models/Blog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '@shared/services/config.service';

@Component({
  selector: 'migs-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs$: Observable<Blog[]>;

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.config.changeTitle('Blogs');

    this.blogs$ = this.http.get<Blog[]>('http://localhost:8080/mock/blog');
  }
}
