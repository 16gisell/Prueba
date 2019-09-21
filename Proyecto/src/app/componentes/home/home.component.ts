import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { AuthService } from '../../service/auth.service';
import { pagosInterface } from '../../models/pagoInterface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiendas: any =[];
  private pago: pagosInterface={
    id:0,
    detalle: '',
    ingresos:0,
    egresos: 0,
    cantidadTotal: 0,
    monto:0,
  }

  constructor(private dataApi: DataApiService, private authService: AuthService) { }

  ngOnInit() {
    this.getListTienda();
  }

  getListTienda(){
    this.dataApi.getAllTienda().subscribe(
      resp => {
        //console.log(resp)
         this.tiendas = resp;
      },
      error => console.log(error)
      );
  }

  pagar(){
    delete this.pago.fecha;
    delete this.pago.id;
    delete this.pago.cantidadTotal;
    delete this.pago.monto;

    this.dataApi.pagar(this.pago).subscribe(
      resp=>{
        console.log(resp)
      },
      error => console.log(error)
    )
  }

}
