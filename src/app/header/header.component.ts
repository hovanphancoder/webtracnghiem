import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  header = [
    {
      "name": "Trang Chủ",
      "link": ""
    },
    {
      "name": "Giới Thiệu",
      "link": "gioi-thieu"
    },
    {
      "name": "Cấp độ",
      "link": "cap-do"
    },
    {
      "name": "Hỏi đáp",
      "link": "hoi-dap"
    },
    {
      "name": "Góp ý",
      "link": "gop-y"
    },
    {
      "name": "Liên Hệ",
      "link": "lien-he"
    },
    {
      "name": "Đăng Nhập",
      "link": "dang-nhap"
    },
    {
      "name": "Đăng ký",
      "link": "dang-ky"
    },

  ];
}
