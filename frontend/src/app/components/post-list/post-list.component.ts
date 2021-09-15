import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from 'src/app/shared/blog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [BlogService]
})
export class PostListComponent implements OnInit {

  constructor(public blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.getBlogList();
  }

  getBlogList() {
    this.blogService.getBlogList().subscribe((res) => {
      this.blogService.blogs = res as Blog[];
    });
  }

}
