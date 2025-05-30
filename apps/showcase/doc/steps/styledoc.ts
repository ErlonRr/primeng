import { Component } from '@angular/core';

@Component({
    selector: 'steps-style-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-steps</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-steps-item</td>
                        <td>Menuitem element.</td>
                    </tr>
                    <tr>
                        <td>p-steps-number</td>
                        <td>Number of menuitem.</td>
                    </tr>
                    <tr>
                        <td>p-steps-title</td>
                        <td>Label of menuitem.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class StyleDoc {}
