import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShipmenComponent } from './shipmen/shipmen.component';
import { StatusComponent } from './status/status.component';
import { UpdateComponent } from './update/update.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent  },
  { path: 'status/:id', component: StatusComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'update', component: UpdateComponent  },
  { path: 'shipmen/:name', component: ShipmenComponent  },
  { path: 'orders/:id', component: UpdateComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
