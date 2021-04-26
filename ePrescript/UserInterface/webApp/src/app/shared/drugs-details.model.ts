import { Guid } from "guid-typescript";

export class DrugsDetails {
    id: string = Guid.EMPTY;
    batchNo: string = "";
    genericName: string = "";
    tradeName: string = "";
    unit: string = "";
    drugType: number = 0
}
