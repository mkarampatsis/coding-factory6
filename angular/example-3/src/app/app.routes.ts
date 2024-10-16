import { Routes } from '@angular/router';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';


export const routes: Routes = [
    { path:'component-input-example', component: ComponentInputExampleComponent },
    { path: 'for-directive-example', component: ForDirectiveExampleComponent },
    { path: 'event-bind-example', component: EventBindExampleComponent },
    { path: 'simple-data-table', component: SimpleDatatableComponent},
    { path: 'component-output-example', component: ComponentOutputExampleComponent},
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo:'/welcome', pathMatch:'full'}
];
