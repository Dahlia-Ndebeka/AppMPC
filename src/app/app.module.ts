import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './admin/agent/agent.component';
import { ApprenantComponent } from './admin/apprenant/apprenant.component';
import { FormateurComponent } from './admin/formateur/formateur.component';
import { PoleformationComponent } from './admin/poleformation/poleformation.component';
import { FormationComponent } from './admin/formation/formation.component';
import { MessageComponent } from './admin/message/message.component';
import { CoursComponent } from './admin/cours/cours.component';
import { CompteComponent } from './admin/compte/compte.component';
import { AjoutagentComponent } from './admin/agent/ajoutagent/ajoutagent.component';
import { EditeragentComponent } from './admin/agent/editeragent/editeragent.component';
import { ListeagentComponent } from './admin/agent/listeagent/listeagent.component';
import { ListeapprenantComponent } from './admin/apprenant/listeapprenant/listeapprenant.component';
import { EditerapprenantComponent } from './admin/apprenant/editerapprenant/editerapprenant.component';
import { AjoutapprenantComponent } from './admin/apprenant/ajoutapprenant/ajoutapprenant.component';
import { ListecompteComponent } from './admin/compte/listecompte/listecompte.component';
import { ListecoursComponent } from './admin/cours/listecours/listecours.component';
import { AjoutformateurComponent } from './admin/formateur/ajoutformateur/ajoutformateur.component';
import { EditerformateurComponent } from './admin/formateur/editerformateur/editerformateur.component';
import { ListeformateurComponent } from './admin/formateur/listeformateur/listeformateur.component';
import { AjoutformationComponent } from './admin/formation/ajoutformation/ajoutformation.component';
import { EditerformationComponent } from './admin/formation/editerformation/editerformation.component';
import { ListeformationComponent } from './admin/formation/listeformation/listeformation.component';
import { ListemessageComponent } from './admin/message/listemessage/listemessage.component';
import { AjoutpoleformationComponent } from './admin/poleformation/ajoutpoleformation/ajoutpoleformation.component';
import { EditerpoleformationComponent } from './admin/poleformation/editerpoleformation/editerpoleformation.component';
import { ListepoleformationComponent } from './admin/poleformation/listepoleformation/listepoleformation.component';
import { UserComponent } from './user/user.component';
import { ApprenantUserComponent } from './user/apprenant-user/apprenant-user.component';
import { FormateurUserComponent } from './user/formateur-user/formateur-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AgentComponent,
    ApprenantComponent,
    FormateurComponent,
    PoleformationComponent,
    FormationComponent,
    MessageComponent,
    CoursComponent,
    CompteComponent,
    AjoutagentComponent,
    EditeragentComponent,
    ListeagentComponent,
    ListeapprenantComponent,
    EditerapprenantComponent,
    AjoutapprenantComponent,
    ListecompteComponent,
    ListecoursComponent,
    AjoutformateurComponent,
    EditerformateurComponent,
    ListeformateurComponent,
    AjoutformationComponent,
    EditerformationComponent,
    ListeformationComponent,
    ListemessageComponent,
    AjoutpoleformationComponent,
    EditerpoleformationComponent,
    ListepoleformationComponent,
    UserComponent,
    ApprenantUserComponent,
    FormateurUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
