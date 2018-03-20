import {Component, Input, OnInit} from '@angular/core';
import {District} from '../../model/District';
import {DistrictService} from '../../service/district.service';
import { Location } from '@angular/common';
import {Constants} from '../../shared/constants';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-districts',
  templateUrl: './add-districts.component.html',
  styleUrls: ['./add-districts.component.css']
})
export class AddDistrictsComponent implements OnInit {

  district: District = new District();

  submitted = false;

  success = 0;

  constructor(
    private districtService: DistrictService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.submitted) {
      this.submitted = true;
    } else {
      this.submitted = false;
      const id = +this.route.snapshot.paramMap.get('stateId');
      if (id) {
        this.districtService.addDistrict(this.district, id).subscribe(status => {
          if (status === Constants.HTTP_STATUS_CREATED) {
            console.log('Successfully added');
            this.success = 1;
          } else {
            this.success = 2;
            console.error('Failed to add' + status);
          }
        });
      } else {
        console.error('No state id associated');
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
