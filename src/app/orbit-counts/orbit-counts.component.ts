import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  spaceDebrisCount: Number;
  communicationCount: Number;
  probeCount: Number;
  positioningCount: Number;
  spaceStationCount: Number;
  telescopeCount: Number;

  @Input() satellites: Satellite[];

  constructor() {
    
  }

  ngOnInit() {

  }

  ngDoCheck(){
    this.checkCount();
  }

  checkCount() {
    let debrisCount: Satellite[] = [];
    let comCount: Satellite[] = [];
    let probeCount: Satellite[] = [];
    let positioningCount: Satellite[] = [];
    let spaceStationCount: Satellite[] = [];
    let telescopeCount: Satellite[] = [];

    for (let i = 0; i < this.satellites.length; i++){
      if (this.satellites[i].type === 'Space Debris'){
        debrisCount.push(this.satellites[i]);
      } else if (this.satellites[i].type === 'Communication'){
        comCount.push(this.satellites[i]);
      } else if (this.satellites[i].type === 'Probe'){
        probeCount.push(this.satellites[i]);
      } else if (this.satellites[i].type === 'Positioning'){
        positioningCount.push(this.satellites[i]);
      } else if (this.satellites[i].type === 'Space Station'){
        spaceStationCount.push(this.satellites[i]);
      } else if (this.satellites[i].type === 'Telescope'){
        telescopeCount.push(this.satellites[i]);
      }
    }

    this.spaceDebrisCount = debrisCount.length;
    this.communicationCount = comCount.length;
    this.probeCount = probeCount.length;
    this.positioningCount = positioningCount.length;
    this.spaceStationCount = spaceStationCount.length;
    this.telescopeCount = telescopeCount.length;
  }

}
