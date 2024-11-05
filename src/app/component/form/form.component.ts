import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      fechaNacimiento: ['', [Validators.required, this.fechaValida]],
      genero: ['', Validators.required],
      terminos: [false, Validators.requiredTrue],
    });
  }

  fechaValida(control: { value: string | number | Date; }) {
    const fecha = new Date(control.value);
    const hoy = new Date();
    return fecha < hoy ? null : { fechaInvalida: true };
  }

  get nombre() { return this.myForm.get('nombre'); }
  get email() { return this.myForm.get('email'); }
  get edad() { return this.myForm.get('edad'); }
  get fechaNacimiento() { return this.myForm.get('fechaNacimiento'); }
  get genero() { return this.myForm.get('genero'); }
  get terminos() { return this.myForm.get('terminos'); }
}
