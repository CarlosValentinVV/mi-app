import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface AnimalDestacado {
 nombre: string;
 especie: string;
 edad: string;
}
@Component({
 selector: 'app-home',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './home.html',
 styleUrl: './home.css'
})
export class Home {
 animalesDestacados: AnimalDestacado[] = [
 { nombre: 'Luna', especie: 'Perro', edad: '2 años' },
 { nombre: 'Simba', especie: 'Gato', edad: '1 año' },
 { nombre: 'Kiwi', especie: 'Ave', edad: '6 meses' },
 { nombre: 'Coco', especie: 'Conejo', edad: '8 meses' }
 ];
}