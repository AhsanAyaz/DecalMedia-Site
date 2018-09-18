import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
//import { RouterModule, Routes } from '@angular/router';

//const appRoutes: Routes = [

//];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    //RouterModule.forRoot(
    //  appRoutes,
    //  { enableTracing: true }
    //)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
