import { Component, OnInit } from '@angular/core';
import {School} from '../../model/School';
import {SchoolService} from '../../service/school.service';
import { Location } from '@angular/common';
import {Constants} from '../../shared/constants';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-schools',
  templateUrl: './add-schools.component.html',
  styleUrls: ['./add-schools.component.css']
})
export class AddSchoolsComponent implements OnInit {

  school: School = new School();

  submitted = false;

  success = 0;

  constructor(
    private schoolService: SchoolService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.submitted) {
      this.submitted = true;
    } else {
      this.submitted = false;
      const districtId = +this.route.snapshot.paramMap.get('districtId');
      if (districtId) {
        this.schoolService.addSchool(this.school, districtId).subscribe(status => {
          if (status === Constants.HTTP_STATUS_CREATED) {
            console.log('Successfully added');
            this.success = 1;
          } else {
            this.success = 2;
            console.log('Failed to add' + status);
          }
        });
      } else {
        console.error('No district id associated');
      }
    }
  }

  onMsgConfirm() {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
