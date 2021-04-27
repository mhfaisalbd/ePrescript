import { Injectable } from '@angular/core';
import { DrugsDetails } from './drugs-details.model';
import { HttpClient } from "@angular/common/http";
import { DrugType } from './drug-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DrugsDetailsService {

  constructor(private http: HttpClient) { }
  readonly baseUrl = "http://localhost:31257/api/Drugs";
  formData: DrugsDetails = new DrugsDetails();
  list: DrugsDetails[];

  postDrugDetails(){
    this.formData.drugType = parseInt(this.formData.drugType.toString());
    return this.http.post(this.baseUrl, this.formData);
  }
  putDrugDetails(){
    this.formData.drugType = parseInt(this.formData.drugType.toString());
    return this.http.put(`${this.baseUrl}/${this.formData.id}`, this.formData);
  }
  deleteDrugDetails(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise().then(
      res=>this.list = res as DrugsDetails[]
    )
  }
}
