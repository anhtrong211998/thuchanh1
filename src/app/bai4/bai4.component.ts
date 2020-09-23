import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let kiemtra = (s: any) => {
      if (s.diemthi > 8 && s.quequan == 'Hai Phong') {
        return true;
      }
      return false;
    };

    let s4 = [
      { hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi: 9 },
      { hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi: 7.5 },
      { hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi: 8.3 },
    ].filter(kiemtra);
    console.log(s4);
  }


}
