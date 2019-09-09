import { Component, ViewChild, ElementRef,  } from '@angular/core';

@Component({
  selector: 'app-ftbragg2016',
  templateUrl: './ftbragg2016.component.html',
  styleUrls: ['./ftbragg2016.component.css']
})
export class Ftbragg2016Component {
  @ViewChild('myVideo', { static: true }) myVideo: ElementRef;
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: [
      '<div class=\'fa fa-chevron-left\'></i>',
      '<div class=\'fa fa-chevron-right\'></div>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: true
      },
      1500: {
        items: 6,
        nav: true,
        loop: true
      }
    }
  };

  images = [
    {
      text: 'Pacific Ocean',
      image: '../../assets/images/ftbragg2016/20160423_103156.jpg'
    },
    {
      text: 'Lisa overlooking the sea',
      image: '../../assets/images/ftbragg2016/20160423_103213.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_103156.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_103213.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_103216.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_103227.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_103232.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_104259.jpg'
    },
    {
      text: 'Chillin on the rocks on the beach',
      image: '../../assets/images/ftbragg2016/20160423_105003.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_120742.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_120746.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_120747.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_123832.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_123836.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_123838.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_124058.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_124102.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_124105.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_124201.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_124203.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_124223.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_124227.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_124231.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152137.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152153.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152158.jpg'
    },
    {
      text: 'Lisa at the top of the lighthouse',
      image: '../../assets/images/ftbragg2016/20160423_152212.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152502.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152515.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152517.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152542.jpg'
    },
    {
      text: 'John and Lisa at the top of the lighthouse',
      image: '../../assets/images/ftbragg2016/20160423_152552.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152558.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152729.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152745.jpg'
    },
    {
      text: 'Outside on the lighthouse catwalk',
      image: '../../assets/images/ftbragg2016/20160423_152747.jpg'
    },
    {
      text: 'Fort Bragg 2016',
      image: '../../assets/images/ftbragg2016/20160423_152758.jpg'
    }
  ];

  constructor() {}

playVideo() {
    this.myVideo.nativeElement.play();
  }

  click(i) {
    alert(`${i}`);
  }
}
