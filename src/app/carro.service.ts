import { ICarro } from './ICarros';
import { API_PATH } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<ICarro[]>(`${API_PATH}Carros`).toPromise();
  }

  obterPorId(id: number){
    return this.httpClient.get<ICarro>(`${API_PATH}Carros/${id}`).toPromise();
  }

  adicionar(carro: ICarro){
    return this.httpClient.post<ICarro>(`${API_PATH}Carros`, carro).toPromise();

  }
  atualizar(carro: ICarro){
    return this.httpClient.put<ICarro>(`${API_PATH}Carros/${carro.id}`, carro).toPromise();
  }
  delete(carroId: number){
    return this.httpClient.delete(`${API_PATH}Carros/${carroId}`).toPromise();
  }
}
