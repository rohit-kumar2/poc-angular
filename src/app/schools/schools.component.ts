import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {District} from '../model/District';
import {SchoolService} from '../service/school.service';
import {State} from '../model/State';
import {School} from '../model/School';
import {Constants} from '../shared/constants';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit, OnChanges {

  @Input() state: State;
  @Input() district: District;
  schools: School[];
  filteredSchools: School[];
  school: School;
  districtUrl = Constants.DISTRICTS_ENDPOINT;
  addSchoolUrl = Constants.SCHOOLS_ADD_ENDPOINT;

  ngOnChanges() {
    this.school = null;
    if (this.district) {
      this.getDistrictSchools(this.district.id);
    }
  }

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
  }

  getDistrictSchools(districtId: number): void {
    this.schoolService.getDistrictSchools(districtId).subscribe(schools =>
      this.schools = schools);
  }

  filterSchools(event) {
    this.filteredSchools = [];
    let school = null;
    for (let i = 0; i < this.schools.length; i++) {
      school = this.schools[i];
      if (school.name.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredSchools.push(school);
      }
    }
  }

  onSelectSchool(selectedSchool: School) {
    this.school = selectedSchool;
  }

}
