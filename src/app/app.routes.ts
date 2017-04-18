import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from "./posts/posts.component";
import { UserFormComponent } from "./users/user-form.component";
import { PreventUnsavedChangesGuard } from "./helpers/prevent-unsaved-changes-guard.service";
import { NotFoundComponent } from "./helpers/not-found.component";


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent  },
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: UserFormComponent},
  { path: 'users/:id', component: UserFormComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'home' }
];