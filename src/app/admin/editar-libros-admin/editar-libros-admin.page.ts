import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-libros-admin',
  templateUrl: './editar-libros-admin.page.html',
  styleUrls: ['./editar-libros-admin.page.scss'],
})
export class EditarLibrosAdminPage implements OnInit {
  //variables
  nomLibro:string="Harry Potter"
  autorLibro:string="J.K rowling"
  categoriaLibro:string="Fantasia y magia"
  descripcionLibro:string="Trata de un pibe que le gusta la magia y usa lentes, ademas de tener una marca en la frente y nose que mas, no lo vi"

  constructor(private router: Router, private menuController: MenuController, private ToastController: ToastController) {

    // CONFIGURACIONES MENU
    this.menuController.enable(true, 'MenuAdministrador');
    this.menuController.enable(false, 'MenuPrincipal');
  }


  async generarToast(mensaje: string) {
    const toast = await this.ToastController.create({
      message: mensaje,
      duration: 4500,
      position: 'bottom',
    })
    await toast.present();
  }
  // Función para ejecutar
  EditarLibros() {
    if (!this.nomLibro||!this.autorLibro||!this.categoriaLibro||!this.descripcionLibro) {
      this.generarToast('No puede haber ningun campo vacio');
    } else {
      this.generarToast('Sus cambios se realizaron correctamente')
      this.router.navigate(['/editar-borrar-libro-admin']);

    }
  }

  ngOnInit() {
  }
}
