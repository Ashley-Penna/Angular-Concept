import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
   path: '', // localhost:4200/feature
   component: FeatureComponent
  },
  {
    path: 'add', // localhost:4200/feature/add
    component: AddComponent
  },
  {
    path: 'edit', // localhost:4200/feature/edit
    component: EditComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // child modules routes
  ],
  declarations: [FeatureComponent, AddComponent, EditComponent]
})
export class FeatureModule { }
