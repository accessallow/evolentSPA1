import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//custom routing I added
import { RouterModule, Routes } from '@angular/router';
//Forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AddNewComponent } from './add-new/add-new.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactService } from './services/ContactService';
import { DeleteItemComponent } from './delete-item/delete-item.component';


//Route Definition
const appRoutes: Routes = [
  {path: 'add_new_contact', component: AddNewComponent},
  {path: 'edit_contact/:id', component: AddNewComponent, data: {"edit":true}},
  {path: '', component: DashboardComponent},
  {path: 'delete_contact/:id', component: DeleteItemComponent},
  {path: 'confirm_delete/:id', component: DeleteItemComponent, data: {"confirm":true}},
  {path: 'inactive_contacts', component: DashboardComponent, data: {"inactive":true}}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AddNewComponent,
    DashboardComponent,
    DeleteItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing:false}),
    BrowserModule,
    FormsModule    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
