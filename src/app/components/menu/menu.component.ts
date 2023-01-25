import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../server.service";
import {CategoryService} from "../../model/Service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  menu_service?:CategoryService[]

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.serverService.dataGet('category').subscribe(result => {
      this.menu_service=result
        // console.log(result);
    })
  }

}
