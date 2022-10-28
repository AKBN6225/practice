import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DataBindingEventsHandlingComponent } from './components/data-binding-events-handling/data-binding-events-handling.component';
import { DataBindingEventsHandlingProductItemsComponent } from './components/data-binding-events-handling-product-items/data-binding-events-handling-product-items.component';
import { DataBindingEventsHandlingShopingCartComponent } from './components/data-binding-events-handling-shoping-cart/data-binding-events-handling-shoping-cart.component';
import { FormsBindingComponent } from './components/forms-binding/forms-binding.component';
import { FormsBindingSmsAppComponent } from './components/forms-binding-sms-app/forms-binding-sms-app.component';
import { FormsBindingShowPasswordComponent } from './components/forms-binding-show-password/forms-binding-show-password.component';
import { FormsBindingAmountRangeComponent } from './components/forms-binding-amount-range/forms-binding-amount-range.component';
import { FormsBindingThemeSelectorComponent } from './components/forms-binding-theme-selector/forms-binding-theme-selector.component';
import { FormsRegistrationFormComponent } from './components/forms-registration-form/forms-registration-form.component';
import { StructuralDirectiveNgifComponent } from './components/structural-directive-ngif/structural-directive-ngif.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AngularServicesModelsComponent } from './components/angular-services-models/angular-services-models.component';
import { AngularWithServerHTTPConnectionComponent } from './components/angular-with-server-httpconnection/angular-with-server-httpconnection.component';
import { ContactAppComponent } from './components/contact-app/contact-app.component';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DataBindingComponent,
    DataBindingEventsHandlingComponent,
    DataBindingEventsHandlingProductItemsComponent,
    DataBindingEventsHandlingShopingCartComponent,
    FormsBindingComponent,
    FormsBindingSmsAppComponent,
    FormsBindingShowPasswordComponent,
    FormsBindingAmountRangeComponent,
    FormsBindingThemeSelectorComponent,
    FormsRegistrationFormComponent,
    StructuralDirectiveNgifComponent,
    PipesComponent,
    AngularServicesModelsComponent,
    AngularWithServerHTTPConnectionComponent,
    ContactAppComponent,
    ContactlistComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
