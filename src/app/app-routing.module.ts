import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TableDataComponent } from './table-data/table-data.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path:"counter",
  component: CounterComponent
},{
  path : "tabler",
  component: TableDataComponent
},
{
  path : "layout",
  component: LayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
