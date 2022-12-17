const {join, uniq, map, split, flatten} =  require('lodash');
const teamIdNameMap = {
  SUP_US_1022112: 'Front End Service - Ashlie Bolin',
  SUP_US_1054421: 'Stocking Day - Ryan Akin',
  SUP_US_1054422: 'Stocking ON - Jason Igou jr.',
  SUP_US_1060482: 'Meat/Produce - Oscar Mancia',
  SUP_US_1060483: 'Deli/Bakery - Candace Narro acuff',
  SUP_US_1060484: 'Seasonal - Joshua Van vleet',
  SUP_US_1060485: 'Food/Consumables - Alberto Almanza',
  SUP_US_1060486: 'Stocking Day - Travis Greenlee',
  SUP_US_1060487: 'Apparel - Emily Garcia',
  SUP_US_1060488: 'Digital - Frankye Miranda',
  SUP_US_1060490: 'Hardlines - Clint Degg',
  SUP_US_1060491: 'Entertainment - Candance Young',
  SUP_US_1096449: 'Digital - Dasha Mcdonald',
  SUP_US_5400573: 'Front End Checkout - Fines Smith',
  SUP_US_5404047: 'Asset Protection - Diana Carrillo',
  SUP_US_5406633: 'Front End Checkout - Vicki Vaughan',
  Sup_0000021894: 'Asset Protection - Howard Moore',
  Sup_0000027041: 'Home - Jennifer Walter',
  Sup_0000040682: 'Apparel - Norma Hughes',
  Sup_0000040683: 'Apparel - Dannia King',
  Sup_0000040684: 'Deli/Bakery - Angel Martinez',
  Sup_0000040685: 'Digital - Victoria Duran',
  Sup_0000040686: 'Food/Consumables - Andrew Parlocha',
  Sup_0000040687: 'Front End Checkout - Anthony Brunson',
  Sup_0000040688: 'Front End Checkout - Edith Landaverde',
  Sup_0000040691: 'Stocking Day - Ivan Carranza',
  Sup_0000040692: 'Stocking Day - Ricardo Morales',
  Sup_0000040693: 'Stocking ON - Joe Mitchell',
  Sup_0000073628: 'Stocking ON - Donna Houston',
  Sup_0000088459: 'Auto Care Center - Kevin Fleming',
  Sup_0000088460: 'Auto Care Center - Wesley Stevenson',
  Sup_0000096824: 'Hardlines - Gustavo Crispin',
  Sup_0000100371: 'Stocking ON - Gary Gibson',
};

const teamIds = [
  'Sup_0000040693',
  'SUP_US_1054422#SUP_US_1060489',
  'Sup_0000073628',
  'SUP_US_1060482',
  'SUP_US_1060485',
  'Sup_0000040686',
  'Sup_0000100371',
  'SUP_US_1060483',
  'Sup_0000040684',
];

const getTeamName = () => {
  const getTeamName = (teamId) => split(teamIdNameMap[teamId], '-', 1);
  return join(uniq(flatten(map(teamIds, getTeamName))), ' & ');
};

getTeamName();
