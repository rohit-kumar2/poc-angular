import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {District} from '../model/District';
import {DistrictService} from '../service/district.service';
import {State} from '../model/State';
import {Constants} from '../shared/constants';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit, OnChanges {
  @Input() state: State;
  districts: District[];
  filteredDistricts: District[];
  district: District;
  addDistrictUrl = Constants.DISTRICTS_ADD_ENDPOINT;

  constructor(private districtService: DistrictService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.district = null;
    if (this.state) {
      this.getStateDistricts(this.state.id);
    }
  }

  /*ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
    if (this.districts && this.districts.length == 0) {
      this.disabled = true;
    }
  }
*/
  getStateDistricts(stateId: number): void {
    this.districtService.getStateDistricts(stateId).subscribe(districts =>
      this.districts = districts);
  }

  filterDistricts(event) {
    this.filteredDistricts = [];
    let district = null;
    for (let i = 0; i < this.districts.length; i++) {
      district = this.districts[i];
      if (district.name.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredDistricts.push(district);
      }
    }
  }

  onSelectDistrict(selectedDistrict: District) {
    this.district = selectedDistrict;
  }

}
