import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { AcademicmembershipComponent } from './components/academicmembership/academicmembership.component';
import { CorporatemembershipComponent } from './components/corporatemembership/corporatemembership.component';
import { PartnershipformComponent } from './components/partnershipform/partnershipform.component';
import { ViewacademicmembersComponent } from './components/viewacademicmembers/viewacademicmembers.component';
import { CorporatemembershipcontactusformComponent } from './components/corporatemembershipcontactusform/corporatemembershipcontactusform.component';
import { CorporatemembershipregisternowformComponent } from './components/corporatemembershipregisternowform/corporatemembershipregisternowform.component';
import { MembershipComponent } from './components/membership/membership.component';
import {MembershipService} from './services/membershipservice.service';
import {PartnershipService} from './services/partnershipservice.service';
import { IcsetComponent } from './components/icset/icset.component';
import { TechathlonComponent } from './components/techathlon/techathlon.component';
import { PaperPresentationComponent } from './components/paper-presentation/paper-presentation.component';
import { CooperatecourseComponent } from './components/cooperatecourse/cooperatecourse.component';
import { InstitutionalcourseComponent } from './components/institutionalcourse/institutionalcourse.component';
import { RetailcourseComponent } from './components/retailcourse/retailcourse.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    FooterComponent,
    PartnershipComponent,
    AcademicmembershipComponent,
    CorporatemembershipComponent,
    PartnershipformComponent,
    ViewacademicmembersComponent,
    CorporatemembershipcontactusformComponent,
    CorporatemembershipregisternowformComponent,
    MembershipComponent,
    IcsetComponent,
    TechathlonComponent,
    PaperPresentationComponent,
    CooperatecourseComponent,
    InstitutionalcourseComponent,
    RetailcourseComponent,
    CoursedetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [MembershipService,PartnershipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
