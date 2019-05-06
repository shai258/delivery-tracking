import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:3030/orders'
  order = 
  {
    "title": "SMART TV",
    "description": "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in magni porro quas veniam, reiciendis beatae provident quasi obcaecati cumque. Officiis possimus reprehenderit pariatur cupiditate? Quas eum odit nostrum laudantium.",
    "imgUrl": "https://images.philips.com/is/image/PhilipsConsumer/40HFL3011T_12-IMS-en_AU?wid=494&hei=435&$pnglarge$",
    "price": 230,
    "customer": {
        "name": "jhon snow",
        "email": "abc@abc.abc",
        "phone": 972534253694,
        "address": {
            "country": "Israel",
            "city": "Tel-Aviv",
            "street": "Dubnov",
            "number": 9
        }
    },
    "provider": {
        "name": "Ladingo",
        "email": "xyz@xyz.xyz",
        "phone": 543329856,
        "address": {
            "country": "China",
            "city": "Beijing",
            "street": "Qianmen",
            "number": 9
        }
    }
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(private _http: HttpClient) { }

  newOrder() { 
    return this._http.post<Order>((this.apiUrl + '/new_order'), this.order, this.httpOptions);
  }

  getOrder(url: string): Observable<Order> {
    return this._http.get<Order>(this.apiUrl+url);
  }

  promoteStep(url: string) {
    return this._http.get(this.apiUrl + '/promote_step' + url)
  }
}