import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CorpoComponent } from './components/corpo/corpo.component';
import { TopoComponent } from './components/topo/topo.component';
import { TopoUsuarioComponent } from './components/topo-usuario/topo-usuario.component';
import { TopoMenuComponent } from './components/topo-menu/topo-menu.component';
import { TopoMarcaComponent } from './components/topo-marca/topo-marca.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { ConteudoLateralComponent } from './components/conteudo-lateral/conteudo-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    CorpoComponent,
    TopoComponent,
    TopoUsuarioComponent,
    TopoMenuComponent,
    TopoMarcaComponent,
    ConteudoComponent,
    ConteudoLateralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    //BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
