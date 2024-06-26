import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { SumComponent } from './components/sum/sum.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { ListCvComponent } from './cv/list-cv/list-cv.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';

import { TodoComponent } from './todo/todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './form/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './obervables/test-observable/test-observable.component';
import { TestHttpComponent } from './http/test-http/test-http.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwowayComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    SumComponent,
    CvComponent,
    ItemComponent,
    CvCardComponent,
    ListCvComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    DefaultImagePipe,
    HighlightDirective,
    RainbowDirective,
    TodoComponent,
    EmbaucheComponent,
    NavbarComponent,
    DetailsCvComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    TestHttpComponent,
    AddCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
