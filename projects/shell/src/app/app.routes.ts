import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// more info on question
// https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/tutorial/tutorial.md
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },


  // Your route here:
  {
    path: 'flights',
    // dynamic federation
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Routes'
    })
    .then(m => m.FLIGHTS_ROUTES)
    // module federation
    // loadChildren: () => import('mfe1/Routes').then(m => m.FLIGHTS_ROUTES)
    // loadComponent: () => import('mfe1/Component').then(m => m.AppComponent)
  },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];
