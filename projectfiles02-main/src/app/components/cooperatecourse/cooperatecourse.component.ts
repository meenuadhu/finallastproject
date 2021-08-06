import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
@Component({
  selector: 'app-cooperatecourse',
  templateUrl: './cooperatecourse.component.html',
  styleUrls: ['./cooperatecourse.component.css']
})
export class CooperatecourseComponent implements OnInit {

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
  
    ngOnInit() {
  
  
      console.log("inside CooperateList init");
      
  
     
    this._courseService. getCorporateCourses().subscribe((data:any)=>{
      this.data=JSON.parse(JSON.stringify(data));
   
     //alert(data.name);
  
  
    });
    }
    getDetails(name:any){
      //console.log("inside cooperatecourselist:"+name);
      //alert("hello");
      localStorage.setItem("type","Cooperate");
      localStorage.setItem("course_name",name);
      this._router.navigate(['details'])
  
    }
  
  
}
