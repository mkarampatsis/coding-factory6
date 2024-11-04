import { Routes } from '@angular/router';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { RestrictedContentExampleComponent } from './components/restricted-content-example/restricted-content-example.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { authGuard } from './shared/guards/auth.guard';
import { CrudDashboardComponent } from './components/crud/crud-dashboard/crud-dashboard.component';
import { CrudCreateExampleComponent } from './components/crud/crud-create-example/crud-create-example.component';
import { CrudReadExampleComponent } from './components/crud/crud-read-example/crud-read-example.component';
import { CrudUpdateExampleComponent } from './components/crud/crud-update-example/crud-update-example.component';
import { CrudDeleteExampleComponent } from './components/crud/crud-delete-example/crud-delete-example.component';


export const routes: Routes = [
    { path:'component-input-example', component: ComponentInputExampleComponent },
    { path: 'for-directive-example', component: ForDirectiveExampleComponent },
    { path: 'event-bind-example', component: EventBindExampleComponent },
    { path: 'simple-data-table', component: SimpleDatatableComponent},
    { path: 'component-output-example', component: ComponentOutputExampleComponent},
    { path: 'template-driven-form', component: TemplateDrivenFormsComponent },
    { path: 'reactive-forms', component:ReactiveFormsComponent },
    { path: 'http-client-example', component: HttpClientExampleComponent},
    { path: 'user-registration-example', component: UserRegistrationComponent},
    { path: 'welcome', component: WelcomeComponent },
    { path: 'restricted-content-example', component:RestrictedContentExampleComponent, canActivate:[authGuard]},
    { path: 'login', component:UserLoginComponent},
    { path: 'crud-example', component: CrudDashboardComponent, canActivate:[authGuard]},
    { path: 'crud-example/create', component: CrudCreateExampleComponent, canActivate:[authGuard]},
    { path: 'crud-example/read', component: CrudReadExampleComponent, canActivate:[authGuard]},
    { path: 'crud-example/update', component: CrudUpdateExampleComponent, canActivate:[authGuard]},
    { path: 'crud-example/delete', component: CrudDeleteExampleComponent, canActivate:[authGuard]},
    { path: '', redirectTo:'/welcome', pathMatch:'full'}
];
