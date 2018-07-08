import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/ContactService';
import { Contact } from '../models/Contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contacts : Contact[] = [];
  showingInactiveBoard:boolean = false;


  constructor(private __contactService : ContactService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadContactsByStatus("active");
    this.route.data.subscribe(value => {
      if(value.inactive==true){
        this.loadContactsByStatus("inactive");
        this.showingInactiveBoard = true;
      }
    });
  }

  activateContact  = function(id){
    console.log("activate contact function called! id="+id);
    this.__contactService.activateContact(id);
    this.loadContactsByStatus("inactive");
  }

  loadContactsByStatus = function(status){
    this.contacts = this.__contactService.getAllContacts();
    this.contacts = this.contacts.filter(contact => {
      return contact.status == status;
    });
  }

  deactivateContact = function(id){
    this.__contactService.deactivateContact(id);
    this.loadContactsByStatus("active");
  }

}
