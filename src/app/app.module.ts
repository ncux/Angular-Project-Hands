import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DubaiComponent } from './regions/dubai/dubai.component';
import { SharjahComponent } from './regions/sharjah/sharjah.component';
import { AbuDhabiComponent } from './regions/abu-dhabi/abu-dhabi.component';
import { AjmanComponent } from './regions/ajman/ajman.component';
import { RasAlKhaimahComponent } from './regions/ras-al-khaimah/ras-al-khaimah.component';
import { FujairahComponent } from './regions/fujairah/fujairah.component';
import { UmAlQuwainComponent } from './regions/um-al-quwain/um-al-quwain.component';
import { BahrainComponent } from './regions/bahrain/bahrain.component';
import { KuwaitComponent } from './regions/kuwait/kuwait.component';
import { OmanComponent } from './regions/oman/oman.component';
import { QatarComponent } from './regions/qatar/qatar.component';
import { SaudiArabiaComponent } from './regions/saudi-arabia/saudi-arabia.component';
import { AslComponent } from './project/asl/asl.component';
import { HomeComponent } from './project/home/home.component';
import { ContactComponent } from './project/contact/contact.component';
import { EventsComponent } from './project/events/events.component';
import { WorkshopComponent } from './project/workshop/workshop.component';
import { JobsComponent } from './project/jobs/jobs.component';
import { MediaComponent } from './project/media/media.component';
import { MembershipComponent } from './project/membership/membership.component';
import { NewsComponent } from './project/news/news.component';
import { VolunteerComponent } from './project/volunteer/volunteer.component';
import { EslCenterComponent } from './project/institutes/esl-center/esl-center.component';
import { XSchoolComponent } from './project/institutes/x-school/x-school.component';
import { SpeechTherapistComponent } from './project/institutes/speech-therapist/speech-therapist.component';
import { TheatreComponent } from './project/calender/theatre/theatre.component';
import { EntertainmentComponent } from './project/calender/entertainment/entertainment.component';
import { WorkshopsComponent } from './project/calender/workshops/workshops.component';
import { JobDetailsComponent } from './project/job-details/job-details.component';
import { MembershipMemberComponent } from './project/membership-member/membership-member.component';
import { MembershipSponsorComponent } from './project/membership-sponsor/membership-sponsor.component';
import {FormsModule} from '@angular/forms';
import { MembershipThanksComponent } from './project/membership-thanks/membership-thanks.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'workshops', component: WorkshopComponent },
  { path: 'asl-centers', component: AslComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'news', component: NewsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'dubai', component: DubaiComponent },
  { path: 'sharjah', component: SharjahComponent },
  { path: 'abu-dhabi', component: AbuDhabiComponent },
  { path: 'ajman', component: AjmanComponent },
  { path: 'ras-al-khaimah', component: RasAlKhaimahComponent },
  { path: 'fujairah', component: FujairahComponent },
  { path: 'um-al-quwain', component: UmAlQuwainComponent },

  { path: 'bahrain', component: BahrainComponent },
  { path: 'oman', component: OmanComponent },
  { path: 'kuwait', component: KuwaitComponent },
  { path: 'qatar', component: QatarComponent },
  { path: 'saudi-arabia', component: SaudiArabiaComponent },

  { path: 'esl-center', component: EslCenterComponent },
  { path: 'speech-therapist', component: SpeechTherapistComponent },
  { path: 'x-school', component: XSchoolComponent },

  { path: 'events/entertainment', component: EntertainmentComponent },
  { path: 'events/theatre', component: TheatreComponent },
  { path: 'events/workshop', component: WorkshopsComponent },

  { path: 'jobs/job-details', component: JobDetailsComponent },

  { path: 'membership/join', component: MembershipMemberComponent },
  { path: 'membership/sponsor', component: MembershipSponsorComponent },

  { path: 'membership/thanks', component: MembershipThanksComponent },





];


@NgModule({
  declarations: [
    AppComponent,
    DubaiComponent,
    SharjahComponent,
    AbuDhabiComponent,
    AjmanComponent,
    RasAlKhaimahComponent,
    FujairahComponent,
    UmAlQuwainComponent,
    BahrainComponent,
    KuwaitComponent,
    OmanComponent,
    QatarComponent,
    SaudiArabiaComponent,
    AslComponent,
    HomeComponent,
    ContactComponent,
    EventsComponent,
    WorkshopComponent,
    JobsComponent,
    MediaComponent,
    MembershipComponent,
    NewsComponent,
    VolunteerComponent,
    EslCenterComponent,
    XSchoolComponent,
    SpeechTherapistComponent,
    TheatreComponent,
    EntertainmentComponent,
    WorkshopsComponent,
    JobDetailsComponent,
    MembershipMemberComponent,
    MembershipSponsorComponent,
    MembershipThanksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
