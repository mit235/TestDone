import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LocalService } from '../services/localservice.service'

@Component({
  selector: 'app-templ',
  templateUrl: './templ.component.html',
  styleUrls: ['./templ.component.css']
})
export class TemplComponent implements OnInit {
  dataId: any;
  tdata: any;
  data: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    // this.dataId=JSON.parse(localStorage.getItem('data')??"{}")
    this.dataId = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.tdata = new LocalService().getData(this.dataId);

    this.data = JSON.parse(this.tdata) || null;

    console.log(this.data)
  }

  // userdata={
  //   fname:'',
  //   sname:'',
  //   lname:'',
  //   age:'',
  //   hobbies:false,
  //   company:'',
  //   gender:''
  // }

  back() {
    this.router.navigate([''])
  }

  submit(data: any) {
    // console.warn(data);
    // localStorage.setItem('data',JSON.stringify(this.userdata));
    // this.router.navigate(['/reactform'])
    new LocalService().setData(this.dataId, data);
    this.router.navigate(['/reactform'], { queryParams: { data: this.dataId } })
  }

  // localStorage: any.setItem("datas", JSON.stringify(JSONDatas));


}
