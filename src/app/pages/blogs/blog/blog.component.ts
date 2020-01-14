import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '@shared/models/Blog';

@Component({
  selector: 'migs-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog;

  constructor() { }

  ngOnInit() {
  }

}
