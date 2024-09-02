import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { QuaryparamService } from 'src/app/service/quaryparam.service';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css']
})
export class FreelancersComponent implements OnInit {
  constructor(private quary:QuaryparamService,
    private route:ActivatedRoute,
    private auth:AuthService,
    private toaster:ToasterService,
    private router:Router
   ) { }

   
  projectFilterList=[
    {name:"أعمال وخدمات استشارية",value:'bussiness'},
    {name:'برمجة، تطوير المواقع والتطبيقات',value:'programming'},
    {name:'هندسة، عمارة وتصميم داخلي',value:'architacte'},
    {name:'تصميم، فيديو وصوتيات',value:'video_creator'},
    {name:'تسويق الكتروني ومبيعات',value:'selling'},
    {name:'كتابة، تحرير، ترجمة ولغات',value:'content_creator'},
    {name:'دعم، مساعدة وإدخال بيانات',value:'call_center'},
    ]
  ngOnInit() {
    this.freelancers()
  }
  
  freelancerStatus(radio:Event){
    let ele = (radio.target as HTMLInputElement)
    let val = ele.value;
    this.quary.quaryParam('freelancers',val)
  }


  freelancers(){
    console.log('this is data of all freelancers');  
  }

  freelancerInfo(id:number){
    console.log(id);
    }
  checkUser(){
    if (this.auth.userExist$.getValue() == "" ) {
      this.toaster.failureMsg('من فضلك قم بالتسجيل اولا')
      this.router.navigate(['login']) 
      }else{
      this.router.navigate(['/profile'])
      }
  }


}

