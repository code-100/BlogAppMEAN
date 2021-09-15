import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from 'src/app/shared/blog.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  constructor(public blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  public id: string;

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
      console.log(this.id);
  });
  this.getThisPost(this.id);
  }

  getThisPost(id: string) {
    this.blogService.getBlogWithId(id).subscribe((res) => {
      this.blogService.selectedBlog = res as Blog;
    });
  }

  onUpdate(form: NgForm) {
    this.blogService.putBlog(form.value, this.id).subscribe((res) => {
      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
    this.router.navigate(["/"]);
  }

}
