import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  products: any= [
    {
      id: 1,
      name: "Black Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=1"
    },
    {
      id: 2,
      name: "Blue Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=2"
    },
    {
      id: 3,
      name: "Red Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=3"
    },
    {
      id: 4,
      name: "Green Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=4"
    },
    {
      id: 5,
      name: "Green Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=5"
    },
    {
      id: 6,
      name: "Green Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=6"
    },
    {
      id: 7,
      name: "Green Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=7"
    },
    {
      id: 8,
      name: "Green Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=8"
    },
    {
      id: 9,
      name: "Green Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=9"
    },
    {
      id: 10,
      name: "Green Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=10"
    },
    {
      id: 11,
      name: "Green Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=11"
    },
    {
      id: 12,
      name: "Green Pen",
      price: "10",
      image_link: "https://picsum.photos/200?random=12"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
