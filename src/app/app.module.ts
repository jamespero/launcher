import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WindowControlsComponent } from './components/window-controls/window-controls.component';
import { NgxElectronModule } from 'ngx-electron';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OptionsComponent } from './components/options/options.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { LinksComponent } from './components/links/links.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UpdatingComponent } from './components/updating/updating.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowControlsComponent,
    OptionsComponent,
    ContentComponent,
    LoginComponent,
    LinksComponent,
    FooterComponent,
    SettingsComponent,
    UpdatingComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    ButtonModule,
    InputTextModule,
    MatIconModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
