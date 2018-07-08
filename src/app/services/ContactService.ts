import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';

@Injectable()
export class ContactService {
    contacts : Contact[] = [];
    constructor(){
        //One time load on initializing the app
        let contactStored = localStorage.getItem("contact_stored");
        if(contactStored == null){
            this.contacts =  [
                new Contact(1,'Adam','Snow','adamsnow@evolent.com','789-897-3345',"active"),
                new Contact(2,'Jane','Cooper','janecooper@evolent.com','789-897-3346',"active"),
                new Contact(3,'John','Whittenburg','adamsnow@evolent.com','789-897-3347',"active"),
                new Contact(4,'Joy','Bliecky','adamsnow@evolent.com','789-897-3348',"active"),
                new Contact(5,'Kevin','Lawrence','adamsnow@evolent.com','789-897-3349',"active")
            ];
            localStorage.setItem("contacts",JSON.stringify(this.contacts));
            localStorage.setItem("next_contact_id","6");
            localStorage.setItem("contact_stored","Y");
        }else{
            this.contacts = JSON.parse(localStorage.getItem("contacts"));
        }
    }

    dumpAllContacts = function(){
        localStorage.setItem("contacts",JSON.stringify(this.contacts));
        localStorage.setItem("contact_stored","Y");
    }

    getAllContacts = function(){
        return this.contacts;
    }

    getOneContact = function(id){
        let contact = this.contacts.filter(function(item: Contact){ 
            return item.id == id;
        });
        return contact;
    }

    deleteContact = function(id){
        let index = -1;
        for(let a = 0; a<this.contacts.length;a++){
            let item = this.contacts[a];
            if(item.id == id){
                index = a;
            }
        }
        if(index!=-1){
            this.contacts.splice(index,1);
        }

        this.dumpAllContacts();
    }

    updateContact = function(id, contact: Contact){
        let index = -1;
        for(let a = 0; a<this.contacts.length;a++){
            let item = this.contacts[a];
            if(item.id == id){
                item.firstName = contact.firstName;
                item.lastName = contact.lastName;
                item.email = contact.email;
                item.contactNumber = contact.contactNumber;
            }
        }
        this.dumpAllContacts();
    }

    addContact = function(id, contact: Contact){
        contact.id = id;
        contact.status = "active";
       this.contacts.push(contact);
       this.dumpAllContacts();
    }

    activateContact = function(id){
        let index = -1;
        for(let a = 0; a<this.contacts.length;a++){
            let item = this.contacts[a];
            if(item.id == id){
                item.status = "active";
            }
        }
        this.dumpAllContacts();
    }

    deactivateContact = function(id){
        let index = -1;
        for(let a = 0; a<this.contacts.length;a++){
            let item = this.contacts[a];
            if(item.id == id){
                item.status = "inactive";
            }
        }
        this.dumpAllContacts();
    }
}