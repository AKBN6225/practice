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
import { RoutingHomeComponent } from './components/routing-home/routing-home.component';
import { RoutingAboutComponent } from './components/routing-about/routing-about.component';
import { RoutingNavBarComponent } from './components/routing-nav-bar/routing-nav-bar.component';
import { RoutingCountryListComponent } from './components/routing-country-list/routing-country-list.component';
import { RoutingCountryDetailsComponent } from './components/routing-country-details/routing-country-details.component';
import { JsonArrayPracticeComponent } from './components/json-array-practice/json-array-practice.component';
import { HeaderComponent } from './zeroToHero/header/header.component';
import { SideNavBarComponent } from './zeroToHero/side-nav-bar/side-nav-bar.component';
import { MainBodyComponent } from './zeroToHero/main-body/main-body.component';
import { FooterComponent } from './zeroToHero/footer/footer.component';
import { NewAppComponentComponent } from './zeroToHero/new-app-component/new-app-component.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';

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
    ContactCardComponent,
    RoutingHomeComponent,
    RoutingAboutComponent,
    RoutingNavBarComponent,
    RoutingCountryListComponent,
    RoutingCountryDetailsComponent,
    JsonArrayPracticeComponent,
    HeaderComponent,
    SideNavBarComponent,
    MainBodyComponent,
    FooterComponent,
    NewAppComponentComponent,
    TemplateReferenceVariableComponent,
    ForkJoinComponent
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
