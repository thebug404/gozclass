// Import module.
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Import routing
import { AuthRouting } from "./auth-routing.module";

// Auth layout
import { AuthLayoutComponent } from './layouts/auth-layout.component';

// Imports pages.
import { ForgotPasswordPageComponent } from "./pages/forgot-password-page/forgot-password-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";

// Imports components.
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { HeaderFormComponent } from "./components/header-form/header-form.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";

// Import material
import { AngularMaterial } from "src/app/core/material/AngularMaterial";

@NgModule({
    declarations: [
        AuthLayoutComponent,
        ForgotPasswordPageComponent,
        RegisterPageComponent,
        LoginPageComponent,
        LoginFormComponent,
        RegisterFormComponent,
        HeaderFormComponent
    ],
    imports: [
        CommonModule,
        AuthRouting,
        ReactiveFormsModule,
        AngularMaterial,
    ]
})
export class AuthModule {}
