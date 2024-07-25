import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-filter-byservice',
  templateUrl: './filter-byservice.component.html',
  styleUrls: ['./filter-byservice.component.css']
})
export class FilterByserviceComponent implements OnInit {
filterArray:string[] = [];

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {};

  addfilter(e:Event){
    let ele = (e.target as HTMLInputElement)
    let value = ele.value
    }

  }
