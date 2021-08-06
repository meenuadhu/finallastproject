import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
//import * as XLSX from 'xlsx'; 
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  applicant={
  
    name:'',
    phone:'',
    email:'',
    employed:'',
    qualification:'',
    messsage:''
  };
  _router: any;
  
  constructor(private courseservice:CourseServiceService) { }

  course={
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
  };
  ngOnInit(): void {

  let type=  localStorage.getItem("type");
 let  name=  localStorage.getItem("course_name");
if(type==="Retail"){
  this.courseservice.getRetailCoursesDetails(name)
  .subscribe((data:any)=>{
    this.course=JSON.parse(JSON.stringify(data));
  });

}

else if(type==="Institutional")
{
  this.courseservice.getInstitutionalCoursesDeatils(name)
  .subscribe((data:any)=>{
    this.course=JSON.parse(JSON.stringify(data));
  });

}
else{
  this.courseservice.getCorporateCoursesDeatils(name)
  .subscribe((data:any)=>{
    this.course=JSON.parse(JSON.stringify(data));
  });

}
  
   
   
 }
 addapplicant():void{

   
      
  //alert("Added Successfully");
 // console.log(this.applicant.name+"....");
  this.courseservice.retailBrouchreRequest(this.applicant);
  this._router.navigate(['/admin']);
}

  }


