import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { GalleryComponent } from './components/home/gallery/gallery.component';
import { FulfillmentDetailsComponent } from './components/home/fulfillment-details/fulfillment-details.component';
import { CakeTypesComponent } from './components/home/cake-types/cake-types.component';
import { SocialMediaComponent } from './components/home/social-media/social-media.component';
import { NavigationComponent } from './components/shared/footer/navigation/navigation.component';
import { TypesOfCakeComponent } from './components/cake-enquiry/types-of-cake/types-of-cake.component';
import { CakePriceComponent } from './components/cake-enquiry/cake-price/cake-price.component';
import { CostCalculatorComponent } from './components/cake-enquiry/cost-calculator/cost-calculator.component';
import { CakeGalleryComponent } from './components/gallery/cake-gallery/cake-gallery.component';
import { SelectedCakeComponent } from './components/single-cake/selected-cake/selected-cake.component';
import { OverviewComponent } from './components/single-cake/selected-cake/overview/overview.component';
import { DescriptionComponent } from './components/single-cake/selected-cake/description/description.component';
import { SimilarCakesComponent } from './components/single-cake/selected-cake/similar-cakes/similar-cakes.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    GalleryComponent,
    FulfillmentDetailsComponent,
    CakeTypesComponent,
    SocialMediaComponent,
    NavigationComponent,
    TypesOfCakeComponent,
    CakePriceComponent,
    CostCalculatorComponent,
    CakeGalleryComponent,
    SelectedCakeComponent,
    OverviewComponent,
    DescriptionComponent,
    SimilarCakesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
