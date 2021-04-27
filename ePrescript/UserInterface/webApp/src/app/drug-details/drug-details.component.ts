import { Component, OnInit } from '@angular/core';
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
  constructor(public service: DrugsDetailsService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: DrugsDetails){
    this.service.formData = Object.assign({}, selectedRecord);
  }
}
