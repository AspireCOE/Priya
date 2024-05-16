import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.2.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
categoryInput:String="Electronics"

  products:product[]=[{productId:101,productName:"Laptop",cost:60000,category:"Electronics"},
  {productId:202, productName:"Electric Kettle", cost:2500, category:"Home Appliances"},
  {productId:303, productName:"Running Shoes", cost:4000, category:"Footwear"},
  {productId:404, productName:"Bluetooth Headphones", cost:3000, category:"Audio Equipment"},
  {productId:505, productName:"Action Camera", cost:15000, category:"Photography"},
  {productId:606, productName:"Smartphone", cost:20000, category:"Electronics"},
  {productId:707, productName:"Coffee Maker", cost:3500, category:"Home Appliances"},
  {productId:808, productName:"Fitness Tracker", cost:5000, category:"Health & Fitness"},
  {productId:909, productName:"Wireless Mouse", cost:800, category:"Computer Accessories"},
  {productId:1010, productName:"Travel Backpack", cost:2500, category:"Travel Gear"}
  ]

}
