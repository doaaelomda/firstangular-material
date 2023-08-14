import { MatDialog } from '@angular/material/dialog';
import { UsersService } from './../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource  } from '@angular/material/table';
import { Iuser } from 'src/app/services/users';
import { ItshareComponent } from 'src/app/itshare/itshare.component';
@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator :MatPaginator | any
  selectedrow:any
  @ViewChild(MatSort) sort:MatSort | any
  displayedColumns = ['id', 'name', 'username', 'email','address','delete'];
  dataSource:any
  showdata:any
  constructor(private UsersService:UsersService,private dailog:MatDialog){}
 ngOnInit(): void {
  this.UsersService.getuser().subscribe((data:any)=>{
    this.dataSource = new MatTableDataSource<Iuser>(data);
    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort
  })
}

  finduserbyname(name:HTMLInputElement){
    this.filter(name.value)
  }
  filter(filtervalue:string){
    filtervalue = filtervalue.trim()
    filtervalue = filtervalue.toUpperCase()
    this.dataSource.filter=filtervalue
  }
  onrowclicked(row:any){
    this.selectedrow=row


  }
  openuserdialog(){
    const dailogref= this.dailog.open(ItshareComponent,{
      width:'500px',
      data:{}
    })
    dailogref.afterClosed().subscribe(result=>{
      this.showdata=result

    })
  }
  rows: any[] = [];
  deleteItem(element: any) {
    const index = this.dataSource.data.indexOf(element);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.dataSource.data));
      // Update the table's data source
      this.dataSource = new MatTableDataSource<Iuser>(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

}
