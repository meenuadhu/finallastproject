import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
@Component({
  selector: 'app-institutionalcourse',
  templateUrl: './institutionalcourse.component.html',
  styleUrls: ['./institutionalcourse.component.css']
})
export class InstitutionalcourseComponent implements OnInit {

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
  
    ngOnInit(): void {
  
  
      console.log("inside InstitutionalList init");
      
  
     
    this._courseService.getInstitutionalCourses().subscribe((data:any)=>{
      this.data=JSON.parse(JSON.stringify(data));
   
    // alert(data.name);
  
  
    });
    }
    getDetails(name:any){
      console.log("inside instituionalcourselist:"+name);
      //alert("hello");
      localStorage.setItem("type","Institutional");
      localStorage.setItem("course_name",name);
      this._router.navigate(['details'])
  
    }
  
  
}