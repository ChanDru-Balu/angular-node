import { Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: ()=>import('./auth/auth.module').then(m=>AuthModule)
    },
    {
        path:'',
        redirectTo: 'auth',
        pathMatch: 'full'

    }
];
