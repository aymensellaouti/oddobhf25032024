import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { SumComponent } from './components/sum/sum.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { ListCvComponent } from './cv/list-cv/list-cv.component';

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
    ListCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
