import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';

@Component({
  selector: 'app-relacion-pagos',
  templateUrl: './relacion-pagos.component.html',
  styleUrls: ['./relacion-pagos.component.css']
})
export class RelacionPagosComponent implements OnInit {
pagos:any=[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.listPagar();
  }
  listPagar(){
    this.dataApi.pagar().subscribe(
      resp => {
        //console.log(resp)
         this.pagos = resp;
      },
      error => console.log(error)
      );
  }

}
