import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/app-layout/layout/layout.component';
import { HeaderComponent } from './components/app-layout/header/header.component';
import { FooterComponent } from './components/app-layout/footer/footer.component';
import { SidebarComponent } from './components/app-layout/sidebar/sidebar.component';
import { ContentComponent } from './components/app-layout/content/content.component';
import { SignInComponent } from './components/reusable/sign-in/sign-in.component';
import { LogInComponent } from './components/reusable/log-in/log-in.component';
import { TimeLineComponent } from './components/reusable/time-line/time-line.component';
import { HttpClientModule } from "@angular/common/http";
import { UsersListComponent } from './components/reusable/users-list/users-list.component';
import { PostComponent } from './components/reusable/post/post.component';
import { NewPostComponent } from './components/reusable/new-post/new-post.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    SignInComponent,
    LogInComponent,
    TimeLineComponent,
    UsersListComponent,
    PostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})

export class AppModule {}
