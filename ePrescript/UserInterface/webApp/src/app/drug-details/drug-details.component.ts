import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DrugType } from '../shared/drug-type.enum';
import { DrugsDetails } from '../shared/drugs-details.model';
import { DrugsDetailsService } from '../shared/drugs-details.service';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styles: [
  ]
})
export class DrugDetailsComponent implements OnInit {

  public drugTypeKeys = Object.keys(DrugType);
  constructor(public service: DrugsDetailsService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: DrugsDetails){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id:string){
    if(confirm("Are you sure to delete this record?"))
    this.service.deleteDrugDetails(id).subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error('Deleted Drug Details', 'Success!')
      },
      err=>{
        console.log(err);
      }
    );
  }
}
