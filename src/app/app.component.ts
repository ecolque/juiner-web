import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('panel', {}) public panel:ElementRef;
  title = 'pagajuiner';
  public isCollapsed = true;
  constructor() {
    // _Cargar.Carga(["script"]);
  }

  // constructor(private _Cargar: CargarService) {
  //   _Cargar.Carga(["script"]);
  // }

  ngOnInit(): void {
  }
  images = [945, 1012, 985].map((n) => `https://picsum.photos/id/${n}/1110/500`);

  public moveToSpecificView(str: string): void {
    console.log(str);
    setTimeout(() => {
      this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline:  str });
    });
  }
}
