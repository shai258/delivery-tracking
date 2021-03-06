import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  { path: 'orders/:orderNumber', component: TrackingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}