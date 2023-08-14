import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsServicesService } from 'src/app/services/news-services.service';

@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.css']
})
export class NavlistComponent implements OnInit {
  mysources:Array<any> | any
  constructor(private newsapi:NewsServicesService){}
  @Output() public close=new EventEmitter()
  onsideclose(){
    this.close.emit()
  }
  ngOnInit(): void {
    this.newsapi.getSources().subscribe((data:any)=>{
      this.mysources=data['sources']
      console.log(this.mysources)
    })
  }

}
