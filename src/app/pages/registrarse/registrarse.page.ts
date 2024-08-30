import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  passwordR: string | undefined;


    // el alertcontroller es para las pantallaz de errores emergentes, bueno no necesariamente de errores
  constructor(private router:Router, private alertcontroller: AlertController, private menuController: MenuController) {
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
   }

  async MostrarAlerta(message: string){
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alerta.present();
  }

  ngOnInit() {
  }


  validarCorreo(email: string){
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email)
  }

  validacionDatosCorreo(){
    if(!this.username || !this.password || !this.email || !this.passwordR){
      this.MostrarAlerta('Se deben añadir todos los datos den los cuadros')
    }else if(!this.validarCorreo(this.email)){
      this.MostrarAlerta('Ingrese un correo valido')
    }else if(this.password.length < 8 ){
      this.MostrarAlerta('La contraseña debe ser de mas de 8 caracteres')
    }else if(this.password !== this.passwordR){
      this.MostrarAlerta('Las contraseñas son diferentes');
    }else{
     this.Registrarse();
    }
  }



  Registrarse(){
    let navigationextras: NavigationExtras = {
      state:{
        username : this.username,
        password :  this.password,
        email : this.email
      }
    }

    this.router.navigate(['/login'],navigationextras);

  }

  

}
