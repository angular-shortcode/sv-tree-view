<p align="center">
  <img style="text-align: center" src="https://angular-shortcode.web.app/assets/icons/logo-128.png"/>
  <h1 align="center">Angular Shortcode</h1>
</p>

![](https://img.shields.io/github/stars/pandao/editor.md.svg)


# SvTreeView

## Table of Contents

- [Live Demo](#demo) | [Stackblitz](#demo)
- [Installation](#installation)
- [Options](#options)
- [Usage](#usage)
- [Example](#example)
- [Author](#author)
- [Contact](#conatact)


<a name="demo"/>

## Demo
***

✨ [Angular Shortcode](https://angular-shortcode.web.app/home/treeView) ✨

✨ [Stackblitz](https://stackblitz.com/edit/sv-tree-view?file=src/app/app.component.ts) ✨


<a name="installation"/>

## Installation
***
Install with NPM

```bash
npm i sv-tree-view
```


<a name="options"/>

## Options
***

| Name                  | Type            | Default Value  |Description |
| --------------------- |:---------------:|:--------------:|------------|
| treeList              | Array<Tree>     | Reference-1    |
| fieldName              | string          | label          |
| checkbox              | boolean         | false          |
| draggable             | boolean         | false          |
| autoCheck             | boolean         | false          |
| customTemplate        | Template        | Reference-2    |
| @Output() rowClick    | Tree            |                |
| @Output() rowExpand   | Tree            |                |
| @Output() rowSelect   | Tree            |                |
|@Output() changeRowIndeterminateStatus | Tree |           |   


### Reference
1. Tree Interface 
```typescript
interface Tree {
  [key: string]: any;
  expanded?: boolean;
  disabled?: boolean;
  selected?: boolean;
  children?: Array<Tree>;
}
```
2. Template example

```HTML
<ng-template #template let-data="data">
  <label>{{data.label}}</label>
</ng-template>
```

<a name="usage"/>

## Usage
***

Import SvStarRatingModule in your app

```typescript
import { SvTreeViewModule } from 'sv-tree-view';

@NgModule({
  imports: [
    ...
    SvTreeViewModule
  ],
  ...
})
export class AppModule { }
```

<a name="example"/>

## Example
***
Simple Usage
```html
<sv-tree-view
  [treeList]="treeList"
  [autoCheck]="true"
  [checkbox]="true"
  [draggable]="true"
  (rowClick)="rowClick($event)"
  (rowExpand)="rowExpand($event)"
  (changeRowIndeterminateStatus)="changeRowIndeterminateStatus($event)">
</sv-tree-view>
```
Custom Template Usage
```html
<sv-tree-view
  [treeList]="treeList"
  [customTemplate]="template"
  (rowClick)="rowClick($event)">
  <ng-template #template let-data="data">
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%">
      <div style="display: flex; align-items: center">
        <img style="width: 25px; height: 25px; border-radius: 50%; margin-right: 8px" *ngIf="data.image" [src]="data.image" alt="Avatar">
        {{data.label}}
      </div>
      <div *ngIf="data?.children?.length" style="background-color: #ececec; border-radius: 50%; padding: 2px 8px">
        {{data?.children?.length}}
      </div>
    </div>
  </ng-template>
</sv-tree-view>
```

<a name="auther"/>

## Author
***
`Mehdi Sadeghian` `Samira Vahidi`


<a name="conatact"/>

## Contact
***
`github`
- [Angular Shortcode](https://github.com/angular-shortcode)
- [Mehdi Sadeghian](https://github.com/sadeghianme)
- [Samira Vahidi](https://github.com/svahidi)

`linedIn`
- [Mehdi Sadeghian](https://linkedin.com/in/mehdi-sadeghian-864912a5)
- [Samira Vahidi](https://www.linkedin.com/in/samira-vahidi-2368856b)

[comment]: <> (`twitter`)

## Keywords
***
Shortcode Angular


