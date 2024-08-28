import { NgModule } from '@angular/core';
import{ BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { UserComponent } from './app/user/user.component';
import { SharedModules } from './app/shared/card/shared.module';
import { TasksModule } from './app/tasks/tasks.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent, 
        UserComponent,
      
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModules,TasksModule],
    })
    export class AppModule {
 
}