import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { OutputComponent } from './counter/output/output.component';
import { ControlsComponent } from './counter/controls/controls.component';
import { StoreModule } from '@ngrx/store';
import { appStore } from './store/app.store';
import { TableDataComponent } from './table-data/table-data.component';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './table-data/highlighter.pipe';
import { RowHoverHighlightDirective } from './table-data/row-highlighter.directive';
import { LayoutComponent } from './layout/layout.component';
import { TlrPanelComponent } from './layout/tlr-panel/tlr-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OutputComponent,
    ControlsComponent,
    TableDataComponent,
    HighlightPipe,
    RowHoverHighlightDirective,
    LayoutComponent,
    TlrPanelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appStore)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// forRoot giving selector and reducers
