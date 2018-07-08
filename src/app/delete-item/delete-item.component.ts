import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/Contact';
import { ActivatedRoute } from "@angular/router";
import { ContactService } from '../services/ContactService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  contact : Contact = null;

  constructor(private __contactService: ContactService,private route: ActivatedRoute,private router:Router) {
    this.route.params.subscribe(params => {
      console.log("Route Params:");
      console.log(params);

      

      let id = params.id;
      let contactArray = this.__contactService.getOneContact(id);
      
      if(contactArray.length>0){
        this.contact = contactArray[0];
      }
    });

    this.route.data.subscribe(value => {
      if(value.confirm){
        console.log("Its a confirm delete!");
        this.__contactService.deleteContact(this.contact.id);
        this.router.navigateByUrl('/');
      }
    });


   }

  ngOnInit() {
  }

}
