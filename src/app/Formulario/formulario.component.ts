import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
   // Define las propiedades para los campos del formulario
   nombre: string='';
   email: string='';
   falla: string='';
   pais: string='';
 
   // Método que manejará la lógica del formulario al ser enviado
   onSubmit() {
    const mensaje = `Formulario enviado:
    Nombre: ${this.nombre}
    Correo Electrónico: ${this.email}
    Falla: ${this.falla}
    País: ${this.pais}`;

  alert(mensaje);
   }

}
