
import { FormControl } from "@angular/forms";

export class BasicValidator {
    static validateEmail(c: FormControl) {
        let regEx =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return regEx.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }
}