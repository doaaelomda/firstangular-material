import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './componenets/header/header.component';
import { NavlistComponent } from './componenets/navlist/navlist.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsServicesService } from './services/news-services.service';
import { UsersService } from './services/users.service';
import { UserstableComponent } from './componenets/userstable/userstable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItshareComponent } from './itshare/itshare.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavlistComponent,
    UserstableComponent,
    ItshareComponent
  ],
  imports: [
  RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [NewsServicesService,UsersService],
  bootstrap: [AppComponent],
  // entryComponent:[AdduserComponent]
})
export class AppModule { }
