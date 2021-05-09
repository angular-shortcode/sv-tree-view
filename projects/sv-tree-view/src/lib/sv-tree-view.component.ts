import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  EventEmitter, Output
} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

interface Tree {
  [key: string]: any;
  expanded?: boolean;
  disabled?: boolean;
  selected?: boolean;
  children?: Array<Tree>;
}
@Component({
  selector: 'sv-tree-view',
  templateUrl: './sv-tree-view.component.html',
  styleUrls: ['./sv-tree-view.component.scss']
})
export class SvTreeViewComponent implements OnInit, AfterContentChecked {
  @Input() treeList: Array<Tree> | any;
  @Input() fieldName = 'label';
  @Input() checkbox = false;
  @Input() draggable = false;
  @Input() autoCheck = false;
  @Input() customTemplate: TemplateRef<any> | any;
  @Output() rowClick = new EventEmitter();
  @Output() rowExpand = new EventEmitter();
  @Output() rowSelect = new EventEmitter();
  @Output() changeRowIndeterminateStatus = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  expandRow(row: Tree): void {
    row.expanded = !row.expanded;
    this.rowExpand.emit(row);
  }

  clickRow(row: Tree): void {
    if (!this.checkbox) {
      this.rowClick.emit(row);
    }
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  rowSelected(row: Tree): void {
    row.selected = !row.selected;
    if (row.children?.length && this.autoCheck) {
      this.checkNestedList(row.children, row.selected);
    }
    if (this.autoCheck) {
      this.checkEntireList(this.treeList);
    }
    this.rowSelect.emit(row);
  }

  checkNestedList(list: Array<Tree>, value: boolean): void {
    list.forEach(x => {
      x.selected = value;
      if (x.children?.length) {
        this.checkNestedList(x.children, value);
      }
    });
  }

  checkIndeterminate(row: Tree): void {
    if (this.autoCheck) {
      this.checkEntireList(this.treeList);
      if (row.hasOwnProperty('indeterminate')) {
        this.changeRowIndeterminateStatus.emit(row);
      }
    }
  }

  checkEntireList(list: Array<Tree>): void {
    list.forEach(item => {
      if (item.children?.length) {
        item.indeterminate = !item.children.every(i => i.selected) && item.children.some(i => i.selected);
        item.selected = item.children.every(x => x.selected);
        this.checkEntireList(item.children);
      }
    });
  }
}
