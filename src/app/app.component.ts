import { Component, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faAddressCard, faBaby, faBlog, faCircle, faCircleNotch, faCoffee, faCog, faCogs, faEnvelope, faExclamation, faSign, faSignInAlt, faSync } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() loggedUserName: String = "Not logged in"

  title = 'bc';
  closeResult = '';
  faIcon = faSignInAlt;

  constructor(private modalService: NgbModal) {}

  open(content:string) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

export class GlobalVar { 

  public static LoggedInStatus = false
  public static TimedOut = true
  // public static RestApiUrl = process.env.RESTAPI_URL || 'http://localhost:3000' // Angular process not working bug?

  //public static RestApiUrl = '//mturcsrestapi.herokuapp.com'
  public static RestApiUrl = 'http://localhost:3000'  
}

