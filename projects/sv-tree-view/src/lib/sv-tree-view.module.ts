import { NgModule } from '@angular/core';
import { SvTreeViewComponent } from './sv-tree-view.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    SvTreeViewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    DragDropModule
  ],
  exports: [
    SvTreeViewComponent
  ]
})
export class SvTreeViewModule { }
