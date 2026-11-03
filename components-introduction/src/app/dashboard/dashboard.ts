import { Component } from "@angular/core";
import { TaxList } from "../tax-list/tax-list";
import { TaxesSummary } from "../taxes-summary/taxes-summary";
import { TaxForm } from "../tax-form/tax-form";
import { PageHeader } from "../page-header/page-header";

@Component({
  selector: "app-dashboard",
  imports: [PageHeader, TaxForm, TaxList, TaxesSummary],
  templateUrl: "./dashboard.html",
  styleUrl: "./dashboard.scss",
})
export class Dashboard {}
