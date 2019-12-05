import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { ActiveUserService } from '../active-user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    //public valid:boolean

    public username: string;
    public password: string

    public formLogin: FormGroup

    public errorMessage: string
    public successMessage: string

    constructor(private authService:AuthService, private router: Router,
                private activeUser: ActiveUserService) {
        this.formLogin = new FormGroup({
            username: new FormControl("",[Validators.required]),
            password: new FormControl("",[Validators.required])
        })
        this.errorMessage = ""
        this.successMessage = ""
    }

    ngOnInit() {
    }

    login(){
        if(this.formLogin.invalid){
            //this.valid = false
            this.errorMessage = "El Formulario es inválido"
            return
        }
        console.log("REALIZO LA PETICION")
        this.authService.login(
            this.formLogin.value.username,
            this.formLogin.value.password
        ).subscribe(a => {
            if(a.data){
                this.errorMessage = ""
                this.successMessage = "Logueado con exito papá"
                this.activeUser.setUser(a.data)
                this.router.navigateByUrl("")
            }else{
                this.errorMessage = "Credenciales invalidas"
            }
        })
    }
}
