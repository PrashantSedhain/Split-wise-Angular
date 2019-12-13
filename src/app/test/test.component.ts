import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Prashant Sedhain";
  public myId = "testid";
  public isDisabled = false;

  public foo(username, password)
   {
     if(username == "" && password == "")
     {
       alert("Empty fields");
     }

     else if(username == "prashant" && password == "sedhain")
     {
       alert("Login Successful");
     }
     else
     {
      alert("Credentials Failed!");

     }
   }
  constructor() { }

  ngOnInit() {
  }

  greetUser (){
    return "Hello " + this.name;
  }

}
