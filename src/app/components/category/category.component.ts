import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../server.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  url?: string

  constructor(private serverService: ServerService,
              private activeRouter: ActivatedRoute,
  ) {
    this.url = activeRouter.snapshot.params['url']
  }


  getServiceByCategory(url1:string) {
    this.serverService.dataGet('category/product/' + url1).subscribe(result => {
      // console.log(result);
    })
  }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(params=>{this.getServiceByCategory(params['url'])})
    console.log(this.activeRouter);
  }


}
