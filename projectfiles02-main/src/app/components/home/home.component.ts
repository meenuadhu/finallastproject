import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit() {}


  PatronsArray:any =[
    {
      imgName:"https://3.bp.blogspot.com/-fJZ5dsCju8E/ThsGlhQR6aI/AAAAAAAAAFw/NLASYOVs7ZA/s1600/Kerala+Govt+Logo.jpg"
    },
    {
      imgName:"https://newzznow.com/wp-content/uploads/2021/06/UST_Logo.jpg"
    },
    {
      imgName:"https://images.moneycontrol.com/static-mcnews/2019/05/Tata_Consultancy_Services-770x433.jpg?impolicy=website&width=770&height=431"
    },
    {
      imgName:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-anfegbfra3ee1mvanbf11fr9a2-20170916014937.Medi.jpeg"
    },
    {
      imgName:"https://image.slidesharecdn.com/ibssoftware-170715023707/95/ibs-software-1-638.jpg?cb=1500086275"
    },
    {
      imgName:"https://qphs.fs.quoracdn.net/main-qimg-0d627e584394cf0aa605d508b471b86a"
    }
  ]
  testimonialSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items:1
      }
    },
    nav: true
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
