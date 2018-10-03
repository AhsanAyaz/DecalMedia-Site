import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
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
    HttpClientModule
    //RouterModule.forRoot(
    //  appRoutes,
    //  { enableTracing: true }
    //)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
