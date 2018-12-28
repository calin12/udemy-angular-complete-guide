import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pasta Carbonara', 'Delicious pasta', 'https://goo.gl/ohuAWw'),
    new Recipe('Pasta Carbonara', 'Delicious pasta', 'https://goo.gl/ohuAWw')
  ];

  constructor() { }

  ngOnInit() {
  }

}