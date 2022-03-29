import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   isActive: boolean = true;

   checkIsActive(item){
     if(this.cargoHold.length > 9
      || (this.cargoMass + item.mass) > this.maximumAllowedMass){
      return false;
    }
      return true;
   }

   addItem(equipmentItem){
     this.cargoHold.push(equipmentItem)
     this.cargoMass += equipmentItem.mass
     //console.log(equipmentItem)
     if (this.cargoMass >= (2000-200)){
       return true;
     }
     return false
   }

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   
}
