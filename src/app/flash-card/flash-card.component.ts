import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as katex from 'katex';
import html2canvas from  'html2canvas';


interface Language {
  value: string;
  viewValue: string;
}

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {

  @ViewChild('flashcard')
  flashCard!: ElementRef<HTMLElement>;

  @ViewChild('canvas')
  canvas!: ElementRef;
  @ViewChild('downloadLink')
  downloadLink!: ElementRef;

  languages: Language[] = [{value: 'python', viewValue: 'Python'},{value: 'java', viewValue: 'Java'},]
  showLatex: boolean = false;
  showCodeEditor: boolean = false;

  header:string='';
  selectable = true;
  removable = true;
  addOnBlur = true;

  tags: Tag[] = []

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  html: SafeHtml ='';
  userEntry: string = 'c = \\binom{4}{2} \\\\ \\pm\\sqrt{a^2 + b^2}';

  title: string = 'ng-katex';
  url: string = 'https://github.com/garciparedes/ng-katex';

  
  editorOptions = {theme: 'vs-dark', language: 'python'};
  code: string= 'import os \nos.listdir()';


  constructor(private domSanitizer: DomSanitizer,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.html = this.domSanitizer.bypassSecurityTrustHtml(katex.renderToString(this.userEntry,{throwOnError: false,displayMode: true, output: 'html'}));
    this.userEntry = 'c = \\binom{4}{2} \n \\pm\\sqrt{a^2 + b^2}'

  }

  onPressingEnter(){
    //console.log("I am in", this.userEntry);
    let arrayOfUserEntry = this.userEntry.split("\n").join("\\\\");
    //console.log(this.userEntry);
    //arrayOfUserEntry.forEach( (element) =>{
      this.html = this.domSanitizer.bypassSecurityTrustHtml(katex.renderToString(arrayOfUserEntry,{throwOnError: false,displayMode: true, output: 'html'}));
    //})

  }

  toggleCodeEditor(){
    this.showCodeEditor = this.showCodeEditor == true ? false:true;
    this.showLatex = false;
  }

  toggleLatexEditor(){
    console.log("Latex Editor Clicked");
    
    this._snackBar.open("Press Return Key to process the Latex line", "Close");
    
    this.showLatex = this.showLatex == true ? false: true;
    this.showCodeEditor = false;
    console.log("The value of latext", this.showLatex)
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  downloadFlashCard(){
    let html:HTMLElement = this.flashCard.nativeElement;
    html2canvas(html).then((canvas) => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      let filename: string = 'default'
      if (this.header != ''){
        filename = this.header.replace(' ','_')
      }
      this.downloadLink.nativeElement.download = `${filename}.png`;
      this.downloadLink.nativeElement.click();
    });
  }

}
