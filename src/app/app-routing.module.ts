import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:'',redirectTo: 'login',pathMatch: 'full'},
  {path: 'cadastrar' ,component: CadastrarComponent},
  {path:'login',component: LoginComponent},

  {path:"inicio", component: InicioComponent},
  {path:"rodape", component: RodapeComponent},
  
  {path:"tema-edit/:id",component: TemaEditComponent},
  {path:"tema-delete/:id",component: TemaDeleteComponent},

  {path: "postagem-edit/:id", component: PostagemEditComponent},
  {path: "postagem-delete/:id", component: PostagemDeleteComponent},
  
  {path: "tema", component: TemaComponent},
  
  {path: "usuario-edit/:id", component: UsuarioEditComponent},

  {path:'sobrenos',component: SobrenosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
