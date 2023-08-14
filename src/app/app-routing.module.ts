import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserstableComponent } from './componenets/userstable/userstable.component';
// import { AdduserComponent } from './componenets/adduser/adduser.component';
import { ItshareComponent } from './itshare/itshare.component';


const routes: Routes = [
    {path:'users',component:UserstableComponent},
    { path: 'adduser',component:ItshareComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }