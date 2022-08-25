import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nameUser: any;
  public nombre: string = '';
  public apellido: string = '';

  constructor(private router: Router, private activeroute: ActivatedRoute, public toastController: ToastController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.nameUser = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.nameUser);
      }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Su nombre es '+this.nombre +' '+ this.apellido,
      duration: 5000
    });
    toast.present();
  }
  
  limpiar() 
  {
    this.nombre = '';
    this.apellido = '';
  }


}
