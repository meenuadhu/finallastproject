import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
@Component({
  selector: 'app-retailcourse',
  templateUrl: './retailcourse.component.html',
  styleUrls: ['./retailcourse.component.css']
})
export class RetailcourseComponent implements OnInit {

  ltt=[{name:'',
  category:'',
  about:'',
  objective:'',
  sponserimage:'',
  knowledgeParterimage:'',
  internshipPartnerimage:'',
  courseDelivery:'',
  agenda:'',
  highlights:'',
  eligibility:'',
  test:'',
  courseFee:'',
  refundPolicy:'',
  importantDates:'',
  img1:'',
  img2:'',
  questionPaperLink:'',
  status:''}];
  mst=[{name:'',
  category:'',
  about:'',
  objective:'',
  sponserimage:'',
  knowledgeParterimage:'',
  internshipPartnerimage:'',
  courseDelivery:'',
  agenda:'',
  highlights:'',
  eligibility:'',
  test:'',
  courseFee:'',
  refundPolicy:'',
  importantDates:'',
  img1:'',
  img2:'',
  questionPaperLink:'',
  status:''}];
  
  
    data=[{
      name:'',
      category:'',
      about:'',
      objective:'',
      sponserimage:'',
      knowledgeParterimage:'',
      internshipPartnerimage:'',
      courseDelivery:'',
      agenda:'',
      highlights:'',
      eligibility:'',
      test:'',
      courseFee:'',
      refundPolicy:'',
      importantDates:'',
      img1:'',
      img2:'',
      questionPaperLink:'',
      status:''
    }]
    constructor(private _courseService:CourseServiceService,private _router:Router) { }
  
    ngOnInit(): void {
  
  
      console.log("inside RetailList init");
      
  
     
    this._courseService.getRetailCourses().subscribe((data:any)=>{
      this.data=JSON.parse(JSON.stringify(data));
   this.ltt.length=0;
   this.mst.length=0;
      for (var i in this.data) {
           if(this.data[i].category==='Long-Term Training(LTT)')
           {
             this.ltt.push(this.data[i]);
           }
           else if(this.data[i].category==='Micro skill Training(MST)'){
            this.mst.push(this.data[i]);
           }
        
      }
      this.data=[];
      this.data=this.ltt;

    });
    }
  
  onlttClick(){
 // alert('hi');
  this.data=this.ltt;
  
  }
  onmstClick(){
   // alert('hi');
    this.data=this.mst;
  
  }
  
   
    getDetails(name:any){
      console.log("inside retailcourselist:"+name);
      //alert("hello");
      localStorage.setItem("type","Retail");
      localStorage.setItem("course_name",name);
      this._router.navigate(['details']);
  

    }
  
    
  }
  
