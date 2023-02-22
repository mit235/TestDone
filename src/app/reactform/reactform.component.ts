import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { LocalService } from '../services/localservice.service'
@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  reactform:any;
  // dataId:any= this.route.snapshot.paramMap.get('id');
  constructor(private router: Router, private route: ActivatedRoute, private localService : LocalService ) { }

  // userdata={
  //   fname:'',
  //   sname:'',
  //   lname:'',
  //   age:'',
  //   hobbies:false,
  //   company:'',
  //   gender:''
  // }


  data: any;
  dfinal: any;
  sendDataId: any ;
  // reactiveForm: any; t
  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.sendDataId = params?.['data'];
        console.log(this.sendDataId); 
      });

  
  this.data=this.localService.getData(this.sendDataId)
    this.dfinal = JSON.parse(this.data);

    this.reactform = new FormGroup({
      firstName: new FormControl(this.dfinal.firstName ||''),
      secondName: new FormControl(this.dfinal.secondName||''),
      lastName: new FormControl(this.dfinal.lastName||''),
      age: new FormControl(this.dfinal.age||''),
      gender: new FormControl(this.dfinal.gender||''),
      company:new FormControl(this.dfinal.company ||''),
      fullName:new FormControl((this.dfinal.firstName+this.dfinal.secondName+this.dfinal.lastName)||''),
      hobbiesDance:new FormControl(this.dfinal.hobbiesDance || false),
      hobbiescricket:new FormControl(this.dfinal.hobbiescricket || false),
      hobbiesswimming:new FormControl(this.dfinal.hobbiesswimming || false),
      hobbiesmusic:new FormControl(this.dfinal.hobbiesmusic || false),
      hobbiesreading:new FormControl(this.dfinal.hobbiesreading || false),
      
    })

    
  }
  submit(){
    // console.warn(this.reactform);
    localStorage.setItem(this.sendDataId, JSON.stringify(this.reactform?.value));
    // new LocalService().setData(this.dataId, this.reactiveForm?.value);
  }

  Back(){
    this.router.navigate([''])
  }
  clearForm(){
    this.reactform.reset();
  }
  getData(){
    
  }

}
