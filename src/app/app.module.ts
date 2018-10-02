import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TugasComponent } from './tugas/tugas.component';
import { Tugas03Component } from './tugas03/tugas03.component';
import { PegawaiComponent } from './pegawai/pegawai.component';
import { Kuis1Component } from './kuis1/kuis1.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TugasComponent,
    Tugas03Component,
    PegawaiComponent,
    Kuis1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
