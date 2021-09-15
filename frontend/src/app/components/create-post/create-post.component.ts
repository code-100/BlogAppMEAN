import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/shared/blog.service';
import { Blog } from 'src/app/shared/blog.model';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  providers: [BlogService]
})
export class CreatePostComponent implements OnInit {

  constructor(public blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
      console.log(form.value);
      
      this.blogService.postBlog(form.value).subscribe((res) => {
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
      this.router.navigate(["/"]);
  }

}
