import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';

@Component({
  selector: 'app-producto-t',
  templateUrl: './producto-t.component.html',
  styleUrls: ['./producto-t.component.css']
})
export class ProductoTComponent implements OnInit {

  productos:any=[]
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.getListProducto();
  }

  getListProducto(){
    this.dataApi.getAllTienda().subscribe(
      resp => {
        //console.log(resp)
         this.productos = resp;
      },
      error => console.log(error)
      );
    }
  
  verProduct(){
    
  }

}
