import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { RodapeComponent } from './rodape/rodape.component'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
