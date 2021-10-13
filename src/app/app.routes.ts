import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { SharedComponent } from "./components/shared/shared.component";

const APP_ROUTES: Routes = [
  
  { path: 'About', component: AboutComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'Heroes', component: HeroesComponent },
  { path: 'Shared', component: SharedComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'About'}
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);
