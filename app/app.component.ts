import {Component, OnInit} from "@angular/core";
import * as fs from "file-system";
import {isUndefined} from "utils/types";

@Component({
    selector: "my-app",
    template: "",
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        // ios folders that are undefined: developer, desktop, downloads, movies, music, pictures, sharedPublic
        let sharedPublic: fs.Folder = fs.knownFolders.ios.sharedPublic();
        if (isUndefined(sharedPublic)) {
            console.log(`Shared public is undefined!`);
        } else {
            console.log(`Shared public: ${sharedPublic.path}`);
        }

        // The following locations work just fine, but are inaccessible by outside application
        let library: fs.Folder = fs.knownFolders.ios.library();
        console.log(`Library: ${library.path}`);

        let appFolder: fs.Folder = fs.knownFolders.currentApp();
        console.log(`App Folder: ${appFolder.path}`);

        let tempFolder: fs.Folder = fs.knownFolders.temp();
        console.log(`Temp Folder: ${tempFolder.path}`);

        let documentsFolder: fs.Folder = fs.knownFolders.documents();
        console.log(`Documents Folder: ${documentsFolder.path}`);

        /* OUTPUT:
         CONSOLE LOG file:///app/app.component.ts:14:24: Shared public is undefined!
         CONSOLE LOG file:///app/app.component.ts:20:20: Library: /var/mobile/Containers/Data/Application/{{app_id}}/Library
         CONSOLE LOG file:///app/app.component.js:20:20: App Folder: /var/mobile/Containers/Data/Application/{{app_id}}/Library/Application Support/LiveSync/app
         CONSOLE LOG file:///app/app.component.ts:26:20: Temp Folder: /var/mobile/Containers/Data/Application/{{app_id}}/Library/Caches
         CONSOLE LOG file:///app/app.component.js:24:20: Documents Folder: /var/mobile/Containers/Data/Application/{{app_id}}/Documents
         */
    }
}