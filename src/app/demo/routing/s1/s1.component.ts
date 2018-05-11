import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.scss']
})
export class S1Component implements OnInit {

  data: string;

  constructor(
    private ar: ActivatedRoute
  ) {
    console.log('s1!!!');
  }

  ngOnInit() {
    this.ar.paramMap.subscribe(res => {
      console.log(res);
      this.data = res.get('id');
    });
  }

}
