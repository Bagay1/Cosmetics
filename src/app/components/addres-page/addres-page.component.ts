import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../server.service";
import {CompanyInfo} from "../../model/CompanyInfo";

@Component({
  selector: 'app-addres-page',
  templateUrl: './addres-page.component.html',
  styleUrls: ['./addres-page.component.scss']
})
export class AddresPageComponent implements OnInit{

  info_company!: CompanyInfo[]

  constructor(private server: ServerService) {
  }

  ngOnInit() {
    this.server.dataGet('info.company').subscribe(result => {console.log(result), this.info_company = result})
  }


}
