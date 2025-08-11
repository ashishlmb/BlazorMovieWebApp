## NG0303: Can't bind to 'ngForOf' since it isn't a known property of 'tr' (used in the '_App' component template).
- Solved by adding :
  - import { CommonModule } from '@angular/common'; and 
  - imports: [RouterOutlet,CommonModule],
  - in app.ts file
