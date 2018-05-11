import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialFlexModule } from './module/material-flex.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { LifeCycleComponent } from './demo/life-cycle/life-cycle.component';
import { ComponentCommunicationComponent } from './demo/component-communication/component-communication.component';
import { ViewEncapsulationComponent } from './demo/view-encapsulation/view-encapsulation.component';
import { ChangeDetectionComponent } from './demo/change-detection/change-detection.component';
import { FormComponent } from './demo/form/form.component';
import { PipeComponent } from './demo/pipe/pipe.component';
import { DirectiveComponent } from './demo/directive/directive.component';
import { ObservableComponent } from './demo/observable/observable.component';
import { CurrencyExchangePipe } from './demo/shared/pipe/currency-exchange.pipe';
import { MoneyFilterPipe } from './demo/shared/pipe/money-filter.pipe';
import { NgDirectiveComponent } from './demo/directive/ng-directive/ng-directive.component';
import { CustomDirectiveComponent } from './demo/directive/custom-directive/custom-directive.component';
import { MyhiddenDirective } from './demo/shared/directive/myhidden.directive';
import { MyifDirective } from './demo/shared/directive/myif.directive';
import { CcParentComponent } from './demo/component-communication/cc-parent/cc-parent.component';
import { CcChildComponent } from './demo/component-communication/cc-child/cc-child.component';
import { CcAnotherChildComponent } from './demo/component-communication/cc-another-child/cc-another-child.component';
import { TemplateDrivenComponent } from './demo/form/template-driven/template-driven.component';
import { ReactiveComponent } from './demo/form/reactive/reactive.component';
import { ReactiveFbComponent } from './demo/form/reactive-fb/reactive-fb.component';
import { VeNoneComponent } from './demo/view-encapsulation/ve-none/ve-none.component';
import { VeEmulatedComponent } from './demo/view-encapsulation/ve-emulated/ve-emulated.component';
import { VeNativeComponent } from './demo/view-encapsulation/ve-native/ve-native.component';
import { LcPersonComponent } from './demo/life-cycle/lc-person/lc-person.component';
import { HttpObservableComponent } from './demo/observable/http-observable/http-observable.component';
import { FormObservableComponent } from './demo/observable/form-observable/form-observable.component';
import { BitcoinService } from './demo/shared/service/bitcoin.service';
import { RoutingComponent } from './demo/routing/routing.component';
import { S1Component } from './demo/routing/s1/s1.component';
import { S2Component } from './demo/routing/s2/s2.component';
import { FeatureComponent } from './demo/module/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    ComponentCommunicationComponent,
    ViewEncapsulationComponent,
    ChangeDetectionComponent,
    FormComponent,
    PipeComponent,
    DirectiveComponent,
    ObservableComponent,
    CurrencyExchangePipe,
    MoneyFilterPipe,
    NgDirectiveComponent,
    CustomDirectiveComponent,
    MyhiddenDirective,
    MyifDirective,
    CcParentComponent,
    CcChildComponent,
    CcAnotherChildComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    ReactiveFbComponent,
    VeNoneComponent,
    VeEmulatedComponent,
    VeNativeComponent,
    LcPersonComponent,
    HttpObservableComponent,
    FormObservableComponent,
    RoutingComponent,
    S1Component,
    S2Component,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialFlexModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    BitcoinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
