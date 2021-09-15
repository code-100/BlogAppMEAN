import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from 'src/app/shared/blog.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(public blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  // selectedBlog = this.blogService.selectedBlog;

  public id: string;

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
      // console.log(this.id);
  });
  this.getThisPost(this.id);
  }

  getThisPost(id: string) {
    this.blogService.getBlogWithId(id).subscribe((res) => {
      this.blogService.selectedBlog = res as Blog;
    });    
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this blog ?') == true) {
      this.blogService.deleteBlog(id).subscribe((res) => {
      });
    }
    this.router.navigate(["/"]);
  }

}
