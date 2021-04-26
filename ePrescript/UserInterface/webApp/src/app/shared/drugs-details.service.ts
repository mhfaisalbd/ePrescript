import { Injectable } from '@angular/core';
import { DrugsDetails } from './drugs-details.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DrugsDetailsService {

  constructor(private http: HttpClient) { }
  readonly baseUrl = "http://localhost:31257/api/Drugs";
  formData: DrugsDetails = new DrugsDetails();
  postDrugDetails(){
    return this.http.post(this.baseUrl, this.formData);
  }
}
