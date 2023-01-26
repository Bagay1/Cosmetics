import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../server.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../model/Service";
import {switchMap} from "rxjs/operators";
import {interval} from "rxjs";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  url?: string


  category_services: CategoryService[]|undefined

  constructor(private serverService: ServerService,
              private activeRouter: ActivatedRoute,
              private router: Router
  ) {
    this.url = activeRouter.snapshot.params['url']
  }



  getServiceByCategory() {
    this.serverService.dataGet('category/product/' + this.url).subscribe(result => {
      this.category_services = result,
      console.log(result);
    })
  }

  ngOnInit() {
    this.activeRouter.paramMap.pipe(
      switchMap((params: ParamMap)=>
        this.serverService.dataGet('category/product/' + params.get('url')!)
      )
    ).subscribe(data=>{console.log(data), this.category_services = data})

  }


}
