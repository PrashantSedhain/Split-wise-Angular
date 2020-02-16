import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  clicked: boolean = false;
  name = "";
  age: number = 0;
  collegeName = "";
  aspiration = "";
  numberOfRoommates: number = 10;
  output = "";
  getServerStatus() {
    return this.getServerStatus;
  }

  constructor() {}

  ngOnInit() {}

  onUpdateRoommateCount(event: any) {
    this.numberOfRoommates = event.target.value;
  }
  onUpdateName(event: any) {
    this.name = event.target.value;
  }

  onUpdateAge(event: any) {
    this.age = event.target.value;
  }

  onUpdateCollegeName(event: any) {
    this.collegeName = event.target.value;
  }

  onUpdateAspiration(event: any) {
    this.aspiration = event.target.value;
  }

  onUpdateUserInfo(event: any) {}

  onContinueClicked() {
    this.clicked = true;
    if (this.age == 0) {
      alert("You must input age.");
    }
  }
}
