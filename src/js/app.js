import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';

import './helpers';
import './common';

svg4everybody();

const objFitImg = $('.obj-fit');
objectFitImages(objFitImg);