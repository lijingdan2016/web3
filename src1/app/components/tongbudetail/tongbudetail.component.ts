import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators'
@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  courseId:number;
  course;
  num=1;
  flag:boolean = true;
  jsonObject: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2]}};
  date = new Date();
  change(event){
    //console.log(event);
    this.num = event.target.value;
  }


  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).pipe(map(data=>{
      data.name = 'haha';
      return data;
    })).pipe(filter(data=>{
      return data.id == 3;
    })).subscribe((data)=>{
      console.log(data);
      this.course=data;
    })
    // this.course=this.http.get('/api/courses/'+this.courseId);

  } 


}
