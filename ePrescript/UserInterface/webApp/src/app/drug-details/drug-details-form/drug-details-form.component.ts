import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { ToastrService } from 'ngx-toastr';
import { DrugType } from 'src/app/shared/drug-type.enum';
import { DrugsDetails } from 'src/app/shared/drugs-details.model';
import { DrugsDetailsService } from 'src/app/shared/drugs-details.service';

@Component({
  selector: 'app-drug-details-form',
  templateUrl: './drug-details-form.component.html',
  styles: [
  ]
})
export class DrugDetailsFormComponent implements OnInit {

  public drugTypes = Object.values(DrugType);
  public drugTypeKeys = Object.keys(DrugType);
  
  constructor(public service: DrugsDetailsService,
      private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    if(this.service.formData.id === Guid.EMPTY){
      this.insertData(form);
    }
    else{
      this.updateData(form);
    }
  }
  insertData(form: NgForm){
    this.service.postDrugDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Added Drug Details', 'Success!')
      },
      err=>{
        console.log(err);
      }
    );
  }
  
  updateData(form: NgForm){
    this.service.putDrugDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated Drug Details', 'Success!')
      },
      err=>{
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new DrugsDetails();
  }
}
