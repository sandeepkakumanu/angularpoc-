import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
ass:any;
id:number
  t: any;

  constructor(private hs : SerService,  private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRouter.snapshot.params["id"];
   this.getdata_id(this.id)
  }
        
  getdata_id(id){
      this.hs.getdata_id(id).subscribe(res=> {
        this.ass=res;
       console.log("hello world",res)
      })
  }
}


