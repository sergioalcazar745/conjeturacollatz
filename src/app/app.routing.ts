import { CollatzComponent } from "./components/collatz/collatz.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


const appRoutes: Routes = [
    {path: "collatz/:numero", component: CollatzComponent},
]

export const appRoutinProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)