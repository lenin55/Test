import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'content', loadChildren: './tab1/content/content.module#ContentPageModule' },
  { path: 'home', loadChildren: './tab2/home/home.module#HomePageModule' },
  { path: 'new-item', loadChildren: './tab2/new-item/new-item.module#NewItemPageModule' },
  { path: 'update-item/:id', loadChildren: './tab2/update-item/update-item.module#UpdateItemPageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
