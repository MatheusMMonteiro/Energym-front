import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

import { PostagemService } from '../service/postagem.service';

import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[] 


  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  id = environment.id


  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  ecoTreino: number



  
  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authh: AuthService
  ) {}



  ngOnInit(){

    window.scroll(0,0)
    if(environment.token == ""){
      alert("Sua sessão expirou, faça o login novamente")
      this.router.navigate(["/login"])
    }

    this.authh.refreshToken()
    this.getAllTemas()
    this.getAllPostagens()

  }

  getAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp
    })

  }

  getTemaById(){
    this.temaService.getTemaById(this.idTema).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      console.log(resp)
      this.listaPostagens = resp
    })
  }

  findByIdUsuario(){
    this.authh.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) =>{
      console.log(environment.id)
      this.usuario = resp
    })
  }

  publicar(){
    
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.idUsuario = this.idUsuario
    this.postagem.usuario = this.usuario
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
      this.router.navigate(['/inicio'])
    })
  }

  calculaEco(ecoantes: number, minut:number){
    this.postagem.texto = " "+ecoantes*minut   

  }


}


