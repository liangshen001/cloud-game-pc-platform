import {Component} from '@angular/core';
import {NgxElectronService} from '@ngx-electron/core';
// import * as ffi from 'ffi-napi';


@Component({
    selector: 'app-page1',
    templateUrl: './page1-index.component.html'
})
export class Page1IndexComponent {
    title = 'page1';

    constructor(private electronService: NgxElectronService) {}

    openPage2() {
        this.electronService.openPage('page2', {
            width: 1024,
            height: 768
        }, {
            initData: this.title
        });
    }

    sendData() {
        this.electronService.send('page1 data', 'page2');
    }
    test() {
        import('ffi-napi').then(ffi => {
        });
    }
}
