import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-window-controls',
  templateUrl: './window-controls.component.html',
  styleUrls: ['./window-controls.component.scss']
})
export class WindowControlsComponent {
  private win = this.electronService.remote.getCurrentWindow();
  constructor(private electronService: ElectronService) {}

  onClose(): void {
    this.win.close();
  }

  onMinimize(): void {
    this.win.minimize();
  }

}
