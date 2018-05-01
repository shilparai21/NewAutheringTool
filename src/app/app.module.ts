import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RepositoryComponent } from './repository/repository.component';
import { WiresComponent } from './wires/wires.component';
import { TeamComponent } from './team/team.component';
import { AdminComponent } from './admin/admin.component';
import { DataService } from './data.service';   // our custom service, see below
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { HttpModule } from '@angular/http';
import {DemoService} from './demo.service';
import { CropDirective } from './crop.directive';






const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'repository', component: RepositoryComponent},
  {path: 'wires', component: WiresComponent},
  {path: 'team', component: TeamComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RepositoryComponent,
    WiresComponent,
    TeamComponent,
    AdminComponent,
    CropDirective
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AngularMultiSelectModule,
    FormsModule,
    EditorModule // <- Important part
  ],
  providers: [DataService , DemoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }




