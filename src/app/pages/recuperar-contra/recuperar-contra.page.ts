import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  correo : string = "";

  constructor(private alertcontroller: AlertController,private router : Router, private menuController: MenuController) { 
    
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')

  }

  async generarAlerta(){
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: 'Debe ingresar un correo',
      buttons:['OK']
    })
    await alerta.present();
  }

  ngOnInit() {
  }


  irCambiarContra(){
    if(!this.correo){
      this.generarAlerta()
    }else{
      this.router.navigate(['/cambiar-contra'])
    }
  }


}
