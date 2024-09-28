import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
mostaqelinfo =
 [
  {title:"أضف المشروع",desc:"أضف تفاصيل مشروعك والمهارات المطلوبة لإنجازه وابدأ باستقبال عروض المستقلين عليه."},
  {title:"اختر العرض المناسب",desc:"من بين العروض المقدمة لمشروعك، اختر العرض المناسب لمتطلبات المشروع ثم ابدأ مباشرة مرحلة التنفيذ."},
  {title:"استلم المشروع ",desc:" سيعمل المستقل الذي اخترته معك حتى انتهاء العمل وتسليم مشروعك بشكل كامل كما أردته."}
]
boxsInfo = [
{img:"../../../assets/avatar/document.svg",filterName:
  "bussines",desc:" أعمال وخدمات استشارية وإدارية"},
{img:"../../../assets/avatar/code.svg",filterName:
  "programming",desc:"برمجة، تطوير وبناء المواقع والتطبيقات"},
{img:"../../../assets/avatar/arch.svg",filterName:
  "bussines",desc: " هندسة، عمارة وتصميم داخلي"},
{img:"../../../assets/avatar/video.svg ",filterName:
  "bussines",desc:" تسويق إلكتروني ومبيعات"},
{img:"../../../assets/avatar/pepole.svg ",filterName:
  "programming",desc:" كتابة، تحرير، ترجمة ولغات"},
{img:"../../../assets/avatar/arch.svg ",filterName:
  "programming",desc:"تصميم، فيديو وصوتيات"},
{img:"../../../assets/avatar/call-center.svg ",filterName:
  "programming",desc:"دعم، مساعدة وإدخال بيانات"},
{img:"../../../assets/avatar/line-graph.svg",filterName:
  "programming",desc:"تدريب، تعليم ومساعدة عن بعد"}]

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('token','')
  }


}
