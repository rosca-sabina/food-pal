import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Provider } from '../models/provider';
import { ProvidersService } from '../services/providers.service';
import { MatDialog } from '@angular/material/dialog';
import { ProviderCatalogueComponent } from '../provider-catalogue/provider-catalogue.component';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit, AfterViewInit {
  providers: Array<Provider>;

  constructor(private providersService: ProvidersService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.providersService.getAllProviders().subscribe((data) => {
      this.providers = data;
    });
  }

  showMenuDialog(providerId){
    console.log(providerId);
    this.dialog.open(ProviderCatalogueComponent, {
      data: {
        providerId: providerId
      },
      panelClass: 'provider-catalogue-dialog'
    });
  }
}
