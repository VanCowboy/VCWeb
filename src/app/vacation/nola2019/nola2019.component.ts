import { Component } from '@angular/core';

@Component({
  selector: 'app-nola2019',
  templateUrl: './nola2019.component.html',
  styleUrls: ['./nola2019.component.css']
})
export class Nola2019Component {
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
        items: 2,
        nav: true,
        loop: true
      },
      1500: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  };

  images = [
    {
      text: 'Rheanna sleeping on the plane',
      image: '../../../assets/images/nola2019pics/IMG_20190112_101010.jpg'
    },
    {
      text: 'This was one of the best trail mixes I have tried',
      image: '../../../assets/images/nola2019pics/IMG_20190112_101746.jpg'
    },
    {
      text: 'Rheanna enjoying her first real hush puppy',
      image: '../../../assets/images/nola2019pics/IMG_20190112_171415.jpg'
    },
    {
      text: 'Rheanna enjoying her first real hush puppy',
      image: '../../../assets/images/nola2019pics/IMG_20190112_171418.jpg'
    },
    {
      text: 'Rheanna enjoying her first real hush puppy',
      image: '../../../assets/images/nola2019pics/IMG_20190112_171422.jpg'
    },
    {
      text:
        'Found a store close to the hotel that had a walk in humidor and grabbed a couple of beers while I was there',
      image: '../../../assets/images/nola2019pics/IMG_20190112_220406.jpg'
    },
    {
      text:
        'This building was completely gutted by fire but optical makes it look like it was still there',
      image: '../../../assets/images/nola2019pics/IMG_20190113_132454.jpg'
    },
    {
      text:
        'This building was completely gutted by fire but optical makes it look like it was still there',
      image: '../../../assets/images/nola2019pics/IMG_20190113_132501.jpg'
    },
    {
      text:
        'This building was completely gutted by fire but optical makes it look like it was still there',
      image: '../../../assets/images/nola2019pics/IMG_20190113_132801.jpg'
    },
    {
      text:
        'This building was completely gutted by fire but optical makes it look like it was still there',
      image: '../../../assets/images/nola2019pics/IMG_20190113_132805.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_135858.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_135900.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_135902.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141312.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141314.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141341.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141441.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141445.jpg'
    },
    {
      text: 'New Orleans 2019'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141510.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141510_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141511.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141512.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141512_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141513.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141738.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141739.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141740.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141741.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141749.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141750.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141751.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141751_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141752.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141826.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_141833.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_142224.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_142227.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_161749.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_184826.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_184908.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_185104.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190113_201320.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_123753.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155355.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155420.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155517.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155525.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155526.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155526_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155527.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155528.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155530.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155531.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155532.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155532_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155543.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155544.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155545.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155545_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155546.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155547.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155552.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155617.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155618.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155619.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155619_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_155620.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_165955.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170440.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170442.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170444.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170445.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170518.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170519.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170519_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170520.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170520_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_170521.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_192421.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_192427.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_192450.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_192455.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_193252.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_195228.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_195233.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190114_195238.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_140953.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_140954.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_141006.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_165611.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_165617.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_170039.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_170047.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_170051.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_170052.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_170453.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_170454.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190115_170459.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_103525.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_103527.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_103528.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_121621.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122931.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122932.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122933.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122934.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122936.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122939.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122940.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122941.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122947.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122948.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122949.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_122950.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123001.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123031.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123032.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123033.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123033_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123034.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123035.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123035_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123115.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123135.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123856.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123857.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123857_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123858.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123859.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123900.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123915.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123916.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123916_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123949.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123950.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123951.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123952.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123952_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_123953.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124506.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124507.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124507_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124508.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124509.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124511.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124512.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124513.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124513_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124514.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124516.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124517.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124518.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124953.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_124955.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125158.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125201.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125213.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125225.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125227.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125229.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125230.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125231.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125645.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190116_125646.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162653.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162656.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162923.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162924.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162925.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162930.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162931.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162932.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162935.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162936.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162937.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162938.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_162940.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190117_170538.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_113028.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_113029.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_113030.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_113120.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_113122.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115404.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115408.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115414.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115419.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115425.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115429.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115434.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115439.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115445.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115455.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115457.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_115533.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120121.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120126.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120128.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120131.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120132.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120154.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120156.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120204.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120208.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120233.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120244.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120301.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_120432.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121405.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121406.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121414.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121415.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121436.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121603.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121604.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121604_1.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121607.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121613.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121614.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121615.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_121630.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122355.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122357.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122402.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122523.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122528.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122533.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122536.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122630.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122632.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122636.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122647.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_122651.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123120.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123135.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123136.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123139.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123140.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123144.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123213.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123216.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123221.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123224.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123237.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123242.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123402.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_123405.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_124029.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_124549.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_124553.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_124603.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125908.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125918.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125931.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125934.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125939.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125942.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125945.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125947.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125949.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125952.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125956.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_125959.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130003.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130047.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130049.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130051.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130531.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130533.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130535.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130542.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130835.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130848.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130849.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130852.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130853.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130920.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_130925.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131028.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131032.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131037.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131048.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131051.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131054.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131119.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131123.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131129.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131150.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131153.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131155.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131159.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131645.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131659.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131709.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131720.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131750.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131755.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131851.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_131854.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_132017.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_132024.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_132036.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_132040.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_132103.jpg'
    },
    {
      text: 'New Orleans 2019',
      image: '../../../assets/images/nola2019pics/IMG_20190118_132108.jpg'
    },
    {
      text:
        'Tried to get a shot of the people flooding Bourbon Street but kept getting jostled around.',
      image: '../../../assets/images/nola2019pics/IMG_20190118_170914.jpg'
    },
    {
      text:
        'Jack and Me enjoying one of the cigars I got from New Orleans... great smoke for a great friend.',
      image: '../../../assets/images/nola2019pics/IMG_20190123_181035.jpg'
    }
  ];

  constructor() {}

  click(i) {
    alert(`${i}`);
  }
}
