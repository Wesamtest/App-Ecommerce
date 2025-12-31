import { Component, inject, Input, input } from '@angular/core';
import { Product } from '../../../models/product';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
@Input ({required: true}) product:Product ={ } as Product

}
