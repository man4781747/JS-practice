var StationInfo;

StationInfo = [{
    'name': 'Ching-Ling',
    'sensors': [
      '冷氣口溫度',
      '機櫃前方溫度',
      '機櫃側面溫度',
      '機櫃後方溫度',
      '機櫃側面氣壓',
      '冷氣口濕度',
      '機櫃前方濕度'
    ],
    'unit': [
      ' <sup>o</sup>C',
      ' <sup>o</sup>C',
      ' <sup>o</sup>C',
      ' <sup>o</sup>C',
      ' mb',
      ' %',
      ' %',
    ]
  },
  {
    'name': 'Nan-Ying',
    'sensors': [
      '氣壓',
      '濕度',
      '溫度'
    ],
    'unit': [
      ' mb',
      ' %',
      ' <sup>o</sup>C',
    ]
  }
]

var TimeLenData;
TimeLenData = [
  {
    'name':[
      '1小時內',
      '6小時內',
      '24小時內'
    ],
    'num':[
      1*60*6,
      6*60*6,
      24*60*6
    ]
  }
]
