import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    name="priya";
    addToCart=0;
    product={
    name:"Samsung S24",
    price:70000,
    color:"black",
    inStock:0,
    image:"/assets/image/samsung s24.png"
    }
    getDiscountedPrice(){
      return this.product.price-(this.product.price*0.85)}
    onNameChange(event:any){
        console.log(event.target.value)
        this.name=event.target.value

      }
    increment(){
      if(this.addToCart<this.product.inStock)
        this.addToCart++
    }
    decrement()
    {
      if(this.addToCart>0)
      this.addToCart--
    }

  }


