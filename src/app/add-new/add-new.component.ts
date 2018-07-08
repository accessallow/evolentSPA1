import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/Contact';
import { ActivatedRoute } from "@angular/router";
import { ContactService } from '../services/ContactService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  contact : Contact;
  beingEdited: boolean;

  constructor(private __contactService: ContactService, private route: ActivatedRoute,private router:Router) { 
    this.contact = new Contact(-1,'','','','','');
    this.beingEdited = false;

    this.route.params.subscribe(params => {
      let id = params.id;
      let contactArray = this.__contactService.getOneContact(id);
      
      if(contactArray.length>0){
        this.contact = contactArray[0];
        this.beingEdited = true;
      }
    });
  }

  ngOnInit() {
    
  }


  saveDetails = function(){
    if(this.beingEdited){
      this.__contactService.updateContact(this.contact.id, this.contact);
    }else{
      this.beingEdited = false;
      //find-max contact id
      console.log("adding new item");
      let nextId = parseInt(localStorage.getItem("next_contact_id"));
      this.__contactService.addContact(nextId, this.contact);
      //increment id and save it back
      nextId++;
      localStorage.setItem("next_contact_id",""+nextId);
    }


    this.router.navigateByUrl('/');
  }

}
