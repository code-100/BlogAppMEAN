import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  selectedBlog: Blog;
  blogs: Blog[];

  readonly baseURL = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) { }

  postBlog(blog: Blog) {
    return this.http.post(this.baseURL, blog);
  }

  getBlogList() {
    return this.http.get(this.baseURL);
  }


  // This one with particular ID
  getBlogWithId(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putBlog(blog: Blog, id: string) {
    return this.http.put(this.baseURL + `/${id}`, blog);
  }

  deleteBlog(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
