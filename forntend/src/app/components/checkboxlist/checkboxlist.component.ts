import {Component, Input} from '@angular/core';
import {DishService} from "../../Services/dish.service";
import {SearchService} from "../../Services/search.service";

@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.css']
})
export class CheckboxlistComponent {
  @Input() type!: string;

  @Input() items!: string[];
   selectedItems!: string[];

   showItems : boolean = true;


   selectItem(item: string) {
    if (this.selectedItems.includes(item)) {
      this.selectedItems = this.selectedItems.filter(i => i !== item);
    } else {
      this.selectedItems.push(item);
    }


    if(this.type === 'cuisine') {
      this.searchService.setCuisines(this.selectedItems);
    }
    if(this.type === 'type') {
      this.searchService.setTypes(this.selectedItems);
    }
    if(this.type === 'category') {
      this.searchService.setCategories(this.selectedItems);
    }
   }

  show() {
    this.showItems = !this.showItems;
  }

  constructor(public searchService: SearchService, public dishService: DishService) {
    this.selectedItems = [];
  }
}
