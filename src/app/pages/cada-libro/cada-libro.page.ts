import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cada-libro',
  templateUrl: './cada-libro.page.html',
  styleUrls: ['./cada-libro.page.scss'],
})
export class CadaLibroPage implements OnInit {

 libro : any = { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling',paginas: 333 ,imagen: 'assets/img/librohp1.webp'}

  constructor(private menuController : MenuController, private ToastController:ToastController){

    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }

  async generarToast(mensaje : string){
    const toast=await this.ToastController.create({
      message:mensaje,
      duration:2000,
      position:'bottom',
    })
    await toast.present();
  }
  
  //mostrar anuncio
  AnadiraFavoritos(){
    this.generarToast('Añadido con exito');
  }

  MarcarLeido(){
    this.generarToast('Marcado como leido')
  }

  ngOnInit() {
  }

}
