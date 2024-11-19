import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  infor1: string[] = ["Siyabonga Zungu", "siyabopngazungu95@gmail.com", "SDV2509"]
  infor2: string[] = ["Darasi Mkhize", "daras@gmail.com", "SDV2506"]
  infor3: string[] = ["Sabza Masilela", "sm@gmail.com", "SDV2501"]

  getInfor1():string[]{
    return this.infor1
  }

  getInfor2():string[]{
    return this.infor2
  }

  getInfor3():string[]{
    return this.infor3
  }

  constructor(){}

}
