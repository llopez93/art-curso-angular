import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TaxesSummary } from "./taxes-summary";

describe("TaxesSummary", () => {
  let component: TaxesSummary;
  let fixture: ComponentFixture<TaxesSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxesSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxesSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
