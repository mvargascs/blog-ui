import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'blogs',
    loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path: 'create-blog',
    loadChildren: () => import('./pages/create-blog/create-blog.module').then(m => m.CreateBlogModule)
  },
  {
    path: '',
    redirectTo: '/blogs',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/blogs',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
