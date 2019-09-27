import { NgModule, ErrorHandler } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { Camera } from '@ionic-native/camera/ngx';
// import {SplashScreen} from '@ionic-native/splash-screen/ngx';
// import {StatusBar} from '@ionic-native/status-bar/ngx';
// import {IonicErrorHandler} from 'ionic-native/IonicErrorHandler/ngx';




const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  
  
  exports: [RouterModule]
})
export class AppRoutingModule {}
