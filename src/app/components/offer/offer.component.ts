import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../server.service";
import {Pages, Service} from "../../model/Service";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit{

  services?:Pages[]


  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
  this.serverService.dataGet('products').subscribe(result => {
    this.services = result, console.log(this.services);})
  }


}
