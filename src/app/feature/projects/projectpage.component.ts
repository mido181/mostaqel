import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuaryparamService } from 'src/app/service/quaryparam.service';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css']
})
export class ProjectpageComponent implements OnInit {
  projectFilterList=[
    {name:"أعمال وخدمات استشارية",value:'bussiness'},
    {name:'برمجة، تطوير المواقع والتطبيقات',value:'programming'},
    {name:'هندسة، عمارة وتصميم داخلي',value:'architacte'},
    {name:'تصميم، فيديو وصوتيات',value:'video_creator'},
    {name:'تسويق الكتروني ومبيعات',value:'selling'},
    {name:'كتابة، تحرير، ترجمة ولغات',value:'content_creator'},
    {name:'دعم، مساعدة وإدخال بيانات',value:'call_center'},
    ]

  constructor( private quary:QuaryparamService) { }
   ngOnInit(): void {}
   
  moneyLimits(e:Event){
  let ele = (e.target as HTMLInputElement);
  let val = ele.value;
  this.quary.quaryParam('projects',val)
  }



  }


