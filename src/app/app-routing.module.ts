import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CompartmentListComponent } from './components/compartment-list/compartment-list.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  , { path: '', redirectTo: 'items', pathMatch: 'full' }
  , { component: LoginComponent, path: 'login'}
  , { component: ItemListComponent, path: 'items' }
  , { component: CompartmentListComponent, path: 'compartments' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
