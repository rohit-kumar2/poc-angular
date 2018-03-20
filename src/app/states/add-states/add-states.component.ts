import { Component, OnInit } from '@angular/core';
import {State} from '../../model/State';
import {StateService} from '../../service/state.service';
import { Location } from '@angular/common';
import {Constants} from '../../shared/constants';

@Component({
  selector: 'app-add-states',
  templateUrl: './add-states.component.html',
  styleUrls: ['./add-states.component.css']
})
export class AddStatesComponent implements OnInit {

  state: State = new State();

  submitted = false;

  success = 0;

  constructor(private stateService: StateService, private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.submitted) {
      this.submitted = true;
    } else {
      this.submitted = false;
      this.stateService.addState(this.state).subscribe(status => {
        if (status === Constants.HTTP_STATUS_CREATED) {
          console.log('Successfully added');
          this.success = 1;
        } else {
          this.success = 2;
          console.log('Failed to add' + status);
        }
      });
    }
  }

  onMsgConfirm() {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
