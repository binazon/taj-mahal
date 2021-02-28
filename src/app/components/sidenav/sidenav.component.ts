import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MonumentService } from 'src/app/services/monument.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Monument } from 'src/app/model/Monument';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  monumentSubscription: Subscription;
  infos : Monument;
  events : Event[];
  mobileQuery: MediaQueryList;
  fillerNav = ['toto', 'tata', 'tete']
  fillerContent = ["liste events", "liste events", 5]

  constructor(media: MediaMatcher, 
    private monumentService: MonumentService,
    private eventService : EventService, 
    private router: Router) {
    this.mobileQuery = media.matchMedia('(monumentService : MonumentServicex-width: 600px)');
  }

  ngOnInit(): void {
    this.monumentSubscription = this.monumentService.infosMonument().subscribe({
      next: data => this.infos =  data,
      error: err => console.error("error occured !")
    });
    this.eventService.getEvents().subscribe((data : Event[]) => {
      // this.events = data.map(here =>({
      //   id : here.id
      // }))
    })
  }
}