import { Component, ViewEncapsulation } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="products" [height]="380">
            <ng-template kendoGridToolbarTemplate>
                <button kendoGridPDFCommand icon="file-pdf">Export to PDF</button>
            </ng-template>
            <kendo-grid-column field="ProductID" title="ID" width="100" [locked]="true">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="300">
            </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category" width="200">
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price" width="100">
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="In stock" width="100">
            </kendo-grid-column>
            <kendo-grid-column field="Discontinued" title="Discontinued" width="100">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
                </ng-template>
            </kendo-grid-column>
            <kendo-grid-pdf fileName="Products.pdf" paperSize="A4" [scale]="0.8"  [repeatHeaders]="true">
                <kendo-grid-pdf-margin top="1cm" left="1cm" right="1cm" bottom="1cm"></kendo-grid-pdf-margin>
            </kendo-grid-pdf>
        </kendo-grid>
    `,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./pdf-styles.css']
})
export class AppComponent {
    public products: any[] = products;
}
