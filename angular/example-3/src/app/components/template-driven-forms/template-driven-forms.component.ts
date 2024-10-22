import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { TemplateFormStructureComponent } from './template-form-structure/template-form-structure.component';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [PersonTableComponent, SimpleDatatableComponent, TemplateFormStructureComponent],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {

}
