import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from  './home/home.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate:[AuthGuard]
    },
    {
        path:"**",
        redirectTo:"login"
    }
]

export const AppRoutes = RouterModule.forRoot(appRoutes)
