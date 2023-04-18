import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  aprobado: string;
}
@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {

estudiantes: Estudiante[] = [
{
  id: 1,
  nombre: 'Ricardo',
  apellido: 'Perez',
  aprobado: 'Si'
  },

  {
    id: 2,
    nombre: 'Manuel',
    apellido: 'Martinez',
    aprobado: 'No'
  },
    {
      id: 1,
      nombre: 'Mauro',
      apellido: 'Ramirez',
      aprobado: 'No'
    },

    {
      id: 1,
      nombre: 'Lautaro',
      apellido: 'Dominguez',
      aprobado: 'Si'
    },

    {
      id: 1,
      nombre: 'Javier',
      apellido: 'Mendez',
      aprobado: 'No'
    },
    {
      id: 1,
      nombre: 'Lucio',
      apellido: 'Alancay',
      aprobado: 'Si'
    },
];

dataSource= new MatTableDataSource(this.estudiantes)
displayedColumns: string[] = ['id', 'nombre','apellido', 'aprobado',]


aplicarFiltros(ev: Event): void {
  const inputValue = (ev.target as HTMLInputElement)?.value;
  this.dataSource.filter = inputValue?.trim()?.toLowerCase();

}}
