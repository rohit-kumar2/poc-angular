import { Component, OnInit } from '@angular/core';
import {State} from '../model/State';
import {StateService} from '../service/state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  states: State[];
  filteredStates: State[];
  state: State;
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.getStates();
  }

  getStates(): void {
    this.stateService.getStates().subscribe(event => this.states = event);
  }

  filterStates(event) {
    this.filteredStates = [];
    let state = null;
    for (let i = 0; i < this.states.length; i++) {
      state = this.states[i];
      if (state.name.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredStates.push(state);
      }
    }
  }

  onSelectState(selectedState: State) {
    this.state = selectedState;
  }

}
