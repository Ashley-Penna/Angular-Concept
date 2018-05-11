import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifeCycleComponent } from './demo/life-cycle/life-cycle.component';
import { ComponentCommunicationComponent } from './demo/component-communication/component-communication.component';
import { ViewEncapsulationComponent } from './demo/view-encapsulation/view-encapsulation.component';
import { ChangeDetectionComponent } from './demo/change-detection/change-detection.component';
import { FormComponent } from './demo/form/form.component';
import { PipeComponent } from './demo/pipe/pipe.component';
import { DirectiveComponent } from './demo/directive/directive.component';
import { ObservableComponent } from './demo/observable/observable.component';
import { RoutingComponent } from './demo/routing/routing.component';
import { S1Component } from './demo/routing/s1/s1.component';
import { S2Component } from './demo/routing/s2/s2.component';

const routes: Routes = [
  {
    path: 'lc',
    component: LifeCycleComponent
  },
  {
    path: 'cd',
    component: ChangeDetectionComponent
  },
  {
    path: 've',
    component: ViewEncapsulationComponent
  },
  {
    path: 'f',
    component: FormComponent
  },
  {
    path: 'd',
    component: DirectiveComponent
  },
  {
    path: 'p',
    component: PipeComponent
  },
  {
    path: 'cc',
    component: ComponentCommunicationComponent
  },
  {
    path: 'o',
    component: ObservableComponent
  },
  {
    path: 'r',
    component: RoutingComponent,
    children: [
      {
        path: 's1/:id',
        component: S1Component
      },
      {
        path: 's2',
        component: S2Component
      }
    ]
  },
  {
    path: 'feature',
    loadChildren: 'app/module/feature/feature.module#FeatureModule'
  },
  {
    path: '',
    redirectTo: 'lc',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
