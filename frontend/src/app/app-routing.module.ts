import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: ':id', component: PostDetailComponent},
  {path: 'edit/:id', component: EditBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }