import { Inject } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProviderCatalogueDialogData } from '../abstractions/provider-catalogue-dialog-data';
import { CatalogueItem } from '../models/catalogue-item';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-provider-catalogue',
  templateUrl: './provider-catalogue.component.html',
  styleUrls: ['./provider-catalogue.component.scss']
})

export class ProviderCatalogueComponent implements OnInit, AfterViewInit {
  menuItems: Array<CatalogueItem>;
  menuTitle: string;
  menuColumns: string[] = ['id', 'name', 'price'];
  dataSource: MatTableDataSource<CatalogueItem> = new MatTableDataSource<CatalogueItem>();

  constructor(private providersService: ProvidersService, @Inject(MAT_DIALOG_DATA) public data: ProviderCatalogueDialogData) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.providersService.getProviderById(this.data.providerId, true).subscribe((data) => {
      this.menuItems = data.catalogue.items;
      this.menuTitle = data.catalogue.description;
      this.dataSource = new MatTableDataSource<CatalogueItem>(this.menuItems);
    });
  }
}
