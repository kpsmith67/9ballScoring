import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(this.paramsUpdate.bind(this));
  }

  params: Params = {};
  l = ['3', '3'];
  p = ['', ''];

  getString(key: string, v: string): string {
    if (!(key in this.params)) {
      return v;
    }
    return this.params[key];
  }

  paramsUpdate(params: Params) {
    this.params = params;
    this.p[0] = this.getString('p0', '');
    this.p[1] = this.getString('p1', '');
    this.l[0] = this.getString('l0', '3');
    this.l[1] = this.getString('l1', '3');
  }

  done() {
    let params = {
      l0: this.l[0],
      l1: this.l[1]
    };
    if (this.p[0] != '') {
      params['p0'] = this.p[0];
    }
    if (this.p[1] != '') {
      params['p1'] = this.p[1];
    }
    this.router.navigate([''], {
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }
}
