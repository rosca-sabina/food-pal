import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ProvidersService } from './services/providers.service';
import { ProviderCatalogueComponent } from './provider-catalogue/provider-catalogue.component';
import { MatDialogModule } from '@angular/material/dialog';

const materialImports = [MatButtonModule, MatTableModule, MatDialogModule];

@NgModule({
  declarations: [ProviderListComponent, ProviderCatalogueComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    HttpClientModule,
    ...materialImports
  ],
  providers: [ProvidersService],
  entryComponents: [ProviderCatalogueComponent]
})
export class OrderModule { }
