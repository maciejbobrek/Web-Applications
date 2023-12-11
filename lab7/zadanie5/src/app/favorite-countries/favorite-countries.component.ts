// favorite-countries.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-countries',
  templateUrl: './favorite-countries.component.html',
  styleUrls: ['./favorite-countries.component.css']
})
export class FavoriteCountriesComponent {
  countries: { name: string, link: string }[] = [];
  newCountryName = '';

  addCountry() {
    if (this.newCountryName.trim() !== '') {
      const link = this.getWikipediaLink(this.newCountryName);
      this.countries.push({ name: this.newCountryName, link });
      this.newCountryName = '';
    }
  }

  removeCountry(index: number) {
    this.countries.splice(index, 1);
  }

  private getWikipediaLink(countryName: string): string {
    // You can customize this link based on your needs.
    return `https://en.wikipedia.org/wiki/${countryName.replace(/ /g, '_')}`;
  }
}