import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
  dashboardRoute = '/main/dashboard'
  currentRoute!: string;
  constructor(private router: Router) { }

  onActivate() {
    this.currentRoute = this.router.url
  }
  ngOnInit(): void {
    this.currentRoute = this.router.url
  }
  }


