simple dialog

#Demo 

You can see it in action in the angularfireUi widget :

https://cedvdb.github.io/AngularFireUi/index.html

#Installation

```
npm install ng2dialog
```

and import it

```
import { Ng2DialogComponent } from 'ng2dialog/ng2-dialog.component';


@NgModule({
  declarations: [ Ng2DialogComponent
  ]
```

#Usage

```
  <button (click)="dlg.open = true">open dialog</button>

  <ng2-dialog #dlg >
    <div>This is the content of my dialog dialog</div>
  </ng2-dialog>
```
