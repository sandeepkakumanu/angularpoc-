import { Component, OnInit } from '@angular/core';
import { SerService}  from '../ser.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any;
id:any;
  constructor(private da: SerService) { }

  ngOnInit() {
    this.getdata();
    // this. getdata_id(this.id)
  }
  getdata(){
    this.da. getdata().subscribe(res=>{
      this.data =res;
      console.log(res)
      
    })
  }
  // getdata_id(id){
  //   this.da.  getdata_id(id).subscribe(res=>{
  //     this.data=res
  //     console.log(res)
  //   })
  // }
}
