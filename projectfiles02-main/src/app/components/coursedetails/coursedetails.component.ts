import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor(private courseservice:CourseServiceService,private router:Router) { }

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



  //form fill

  applicant={
  
    name:'',
    phone:'',
    email:'',
    employed:'',
    qualification:'',
    messsage:''
  };
  
  
  count=0;
  
  
    
    
    addapplicant():void{
  
     
        
        alert("Submitted Successfully");
        console.log(this.applicant.name+"....");
        let type=  localStorage.getItem("type");
        if(type=="Retail"){
        this.courseservice.retailBrouchreRequest(this.applicant);
        }
        else if(type=="Institutional"){
          // this.courseservice.institutionalBrouchreRequest(this.applicant);
          }
          else{
            // this.courseservice.corporateBrouchreRequest(this.applicant);
          }
        this.router.navigate(['/']);
       
       
     }
    msg='';
     emailValidate(event:any){
  
      const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
      if(!regex.test(event.target.value)){
       this. msg='Invalid Email ID'
      }
      else{
        this. msg=''
      }
     }
     
     msg1='';
     phoneValidation(event:any){
      const regex = new RegExp('^[0-9 ]{10}');
      if(!regex.test(this.applicant.phone)){
       this. msg1='Invalid Phone Number'
      }
      else{
        this. msg1=''
      }
  
  
     }
    

  
  }
  