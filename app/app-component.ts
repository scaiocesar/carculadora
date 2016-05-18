import {Component} from 'angular2/core';

@Component({
  selector: 'meu-app',
  template: `
<div class="container" [hidden]="submitted">
    <h1>CarCuladora</h1>
    <form (submit)="calc()">
      <div class="form-group">
        <label for="gasPrice">Preço da Gasolina</label>
        <input type="text" class="form-control" required [(ngModel)]="gasPrice"  >
      </div>
      <div class="form-group">
         <label for="alcPrice">Preço do Alcool</label>
        <input type="text" class="form-control" [(ngModel)]="alcPrice">
      </div>
       <div class="form-group">
        <label for="gasKm">Km/L Gasolina</label>
        <input type="text" class="form-control" required [(ngModel)]="gasKm">
      </div>
      <div class="form-group">
         <label for="alcKm">Km/L Alcool</label>
        <input type="text" class="form-control" [(ngModel)]="alcKm">
      </div>
      <button type="submit" class="btn btn-default">Calcular</button>
    </form>
    
</div>  
 
 <div [hidden]="!submitted">
  <h2>Calculo</h2>
  <div class="row">
    <div class="col-xs-5">Preço por KM Gasolina</div>
    <div class="col-xs-3  pull-left">{{ priceGasKm | currency:'BRL':2 }}</div>
  </div>
  <div class="row">
    <div class="col-xs-5">Preço por KM Alcool</div>
    <div class="col-xs-3 pull-left">{{ priceAlcKm | currency:'BRL':2}}</div>
  </div>
  <div class="row">
    <div class="col-xs-5">Preço por 100 KM Gasolina</div>
    <div class="col-xs-3  pull-left">{{ priceGas100Km | currency:'BRL':2}}</div>
  </div>
  <div class="row">
    <div class="col-xs-5">Preço por 100 KM Alcool</div>
    <div class="col-xs-3 pull-left">{{ priceAlc100Km | currency:'BRL':2}}</div>
  </div>
  <div class="row">
    <div class="col-xs-5">Diferença de Preço em 100 KM</div>
    <div class="col-xs-3 pull-left">{{ diffAlcGas100KM | currency:'BRL':2}}</div>
  </div>
  <br>
  <h2 [hidden]="hiddenAlcool">Abasteça com Alcool</h2>
  <h2 [hidden]="!hiddenAlcool">Abasteça com Gasolina</h2>
  <button class="btn btn-default" (click)="submitted=false">Voltar</button>
</div>
 `
})
export class AppComponent{

  public submitted:boolean = false;
  public hiddenAlcool:boolean = false;

  public gasPrice: number;
  public alcPrice: number;
  public gasKm: number;
  public alcKm: number;


  public priceAlcKm: number;
  public priceGasKm: number;
  public priceAlc100Km: number;
  public priceGas100Km: number;
  public diffAlcGas100KM:number;

  calc(){
    this.priceAlcKm = this.alcPrice / this.alcKm;
    this.priceGasKm = this.gasPrice / this.gasKm;
    this.priceAlc100Km = this.priceAlcKm *100;
    this.priceGas100Km = this.priceGasKm *100;
    this.diffAlcGas100KM = this.priceAlc100Km -  this.priceGas100Km;
    if(this.priceAlcKm > this.priceGasKm   ){
      this.hiddenAlcool = true;
    }else{
      this.hiddenAlcool = false;
    }
    this.submitted=true;
  };



}
