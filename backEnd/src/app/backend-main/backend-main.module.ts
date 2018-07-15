import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackendMainComponent } from './backend-main.component';
import { backendMainroutes } from './backend-main.routes';

@NgModule({
  imports: [
    RouterModule.forChild(backendMainroutes)
  ],
  declarations: [
    BackendMainComponent,
  ]
})
export class BackendMainModule { }
