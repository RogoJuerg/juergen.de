import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['pexels-dominika-roseclay-4148018.jpg', 'pexels-marcus-aurelius-6787953.jpg', 'pexels-pixabay-265087.jpg'];
  headlines = [
    'Bring engeneering to the next level',
    'Old folks pretending to know how to use an iPad.... (Its not even turned on)',
    'Actually I dont like apple'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }


  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(()=> {
        this.showImage = true;
      }, 10);
    }, 8000);
  }


}