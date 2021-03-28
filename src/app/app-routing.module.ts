import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HomeComponent } from './home/home.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { GopyComponent } from './gopy/gopy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gioi-thieu', component: GioithieuComponent },
  { path: 'hoi-dap', component: HoidapComponent },
  { path: 'gop-y', component: GopyComponent },
  { path: 'lien-he', component: LienheComponent },
  { path: 'dang-ky', component: DangkyComponent },
  { path: 'dang-nhap', component: DangnhapComponent },


]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }