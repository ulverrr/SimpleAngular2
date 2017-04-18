import { FormGroup } from '@angular/forms';
import { CanDeactivate } from "@angular/router";


export interface FormComponent{
    form: FormGroup;
}

export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent>{
    canDeactivate(component: FormComponent): boolean{
        if(component.form.dirty){
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        }
        
        return true;
    }


}