import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from  './home/home.component';
import { PokemonesComponent } from  './pokemones/pokemones.component';
import { EntrenadoresComponent } from  './entrenadores/entrenadores.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "",
        component: HomeComponent,
        canActivate:[AuthGuard],
        children:[
          {
              path: "pokemones",
              component: PokemonesComponent
          },
          {
              path: "entrenadores",
              component: EntrenadoresComponent
          }
        ]
    },
    {
        path:"**",
        redirectTo:"login"
    }
]

export const AppRoutes = RouterModule.forRoot(appRoutes)
