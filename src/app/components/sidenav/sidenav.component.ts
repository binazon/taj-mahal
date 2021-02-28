import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MonumentService } from 'src/app/services/monument.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Monument } from 'src/app/model/Monument';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/model/Event';

export interface EventList {
  id: number;
  name: string;
  dateStart: Date;
  dateEnd: Date;
  amount: number;
  image: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  monumentSubscription: Subscription;
  eventSubscription: Subscription;
  infos: Monument;
  events: Event[];
  mobileQuery: MediaQueryList;
  fillerNav = ['toto', 'tata', 'tete']
  fillerContent = ["liste events", "liste events", 5]

  constructor(media: MediaMatcher,
    private monumentService: MonumentService,
    private eventService: EventService,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(monumentService : MonumentServicex-width: 600px)');
  }

  ngOnInit(): void {
    this.monumentSubscription = this.monumentService.infosMonument().subscribe({
      next: data => this.infos = data,
      error: err => console.error("error occured !")
    });
    this.eventSubscription = this.eventService
      .getEvents()
      // .subscribe((datas: Event[]) => {
      //   this.events = datas.map(_event => ({
      //     id: _event.idEvent,
      //     name: _event.nameEvent,
      //     dateStart: _event.dateStartEvent,
      //     dateEnd: _event.dateEndEvent,
      //     amount: _event.amountEvent,
      //     image: _event.image
      //   }));
      //});
      .subscribe(here => this.events = here);
  }
}