import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ZXingScannerModule} from '@zxing/ngx-scanner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZXingScannerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  qrData:string = 'no Data found';
  getQRData(event:any){
    if(event){
      this.qrData=event as string;
    }
  }
}
