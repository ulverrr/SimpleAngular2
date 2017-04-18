import { UserService } from './user.service';
import { BasicValidator } from './../helpers/basicValidators';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "./user";

@Component({
    templateUrl: 'user-form.component.html',
    providers: [UserService]
})

export class UserFormComponent implements OnInit {
    form: FormGroup;
    title: string;
    user = new User();

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _userService: UserService
        ) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, BasicValidator.validateEmail])],
			phone: [],
			address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
     }

    ngOnInit() { 
        let id: any = this._activatedRoute.snapshot.params["id"];

        this.title = id ? "Edit User" : "New User";

        if(!id){
            return;
        }

        this._userService.getUser(id)
            .subscribe(
                user => this.user = user,
                responce => {
                    if(responce.status == 404){
                        this._router.navigate(['NotFound']);
                    }
                }
            )
    }


    save(){
        this._userService.addUser(this.form.value)
                .subscribe( x => {
                    //this.form.markAsPristine();
                    this._router.navigate(['users']);
                });
    }
}