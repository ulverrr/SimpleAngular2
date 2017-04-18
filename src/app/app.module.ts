import { PreventUnsavedChangesGuard } from './helpers/prevent-unsaved-changes-guard.service';
import { UserFormComponent } from './users/user-form.component';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NotFoundComponent } from './helpers/not-found.component';
import { SpinnerComponent } from "./helpers/spinner.componnet";

import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from "./posts/posts.component";



@NgModule({
  declarations: [
    AppComponent,

    NotFoundComponent,
    SpinnerComponent,

    NavbarComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
