import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
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

  onUpdateServerName(event: any) {
    this.numberOfRoommates = event.target.value;
  }
  onUpdateUserInfo(event: any) {}

  onContinueClicked() {
    this.output = "You selected " + this.numberOfRoommates + " roommates.";
  }
}
