import { Parser } from './parser';


test('parseLocation', () => {

  const expectedTestResultsByAddress = {
    '8/1 Bon Scott Crescent, Moncrieff, ACT 2914': {
      unitType: 'unit',
      unitNumber: '8',
      streetNumber: '1',
      streetName: 'Bon Scott',
      streetType: 'CRS',
      suburb: 'Moncrieff',
      state: 'ACT',
      postcode: '2914'
    },
    '1 Darling Island Rd, Pyrmont NSW 2009': {
      streetNumber: '1',
      streetName: 'Darling Island',
      streetType: 'Rd',
      suburb: 'Pyrmont',
      state: 'NSW',
      postcode: '2009'
    },
    '51 Montacute Road, Campbelltown SA 5074': {
      streetNumber: '51',
      streetName: 'Montacute',
      streetType: 'RD',
      suburb: 'Campbelltown',
      state: 'SA',
      postcode: '5074'
    },
    '13A Burlina court, Elizabeth Hills NSW 2171': {
      streetNumber: '13A',
      streetName: 'Burlina',
      streetType: 'court',
      suburb: 'Elizabeth Hills',
      state: 'NSW',
      postcode: '2171'
    },
    'Breakfast Creek Rd & Austin St, Newstead QLD 4006': {
      streetName1: 'Breakfast Creek',
      streetType1: 'Rd',
      streetName2: 'Austin',
      streetType2: 'St',
      suburb: 'Newstead',
      state: 'QLD',
      postcode: '4006',
      streetName: 'Breakfast Creek Rd & Austin St'
    }
  }

  const parser = new Parser();

  Object.keys(expectedTestResultsByAddress).forEach(address => {
    const expected = expectedTestResultsByAddress[address];
    expect(parser.parseLocation(address)).toEqual(expected);
  });
});
