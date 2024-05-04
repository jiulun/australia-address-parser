import XRegExp from 'xregexp';

const StreetType = {
  ACCESS: 'ACCESS',
  ALLEY: 'ALLEY',
  ALLEYWAY: 'ALLEYWAY',
  AMBLE: 'AMBLE',
  ANCHORAGE: 'ANCHORAGE',
  APPROACH: 'APPROACH',
  ARCADE: 'ARCADE',
  ARTERY: 'ARTERY',
  AVENUE: 'AVENUE',
  BASIN: 'BASIN',
  BEACH: 'BEACH',
  BEND: 'BEND',
  BLOCK: 'BLOCK',
  BOULEVARD: 'BOULEVARD',
  BRACE: 'BRACE',
  BRAE: 'BRAE',
  BREAK: 'BREAK',
  BRIDGE: 'BRIDGE',
  BROADWAY: 'BROADWAY',
  BROW: 'BROW',
  BYPASS: 'BYPASS',
  BYWAY: 'BYWAY',
  CAUSEWAY: 'CAUSEWAY',
  CENTRE: 'CENTRE',
  CENTREWAY: 'CENTREWAY',
  CHASE: 'CHASE',
  CIRCLE: 'CIRCLE',
  CIRCLET: 'CIRCLET',
  CIRCUIT: 'CIRCUIT',
  CIRCUS: 'CIRCUS',
  CLOSE: 'CLOSE',
  COLONNADE: 'COLONNADE',
  COMMON: 'COMMON',
  CONCOURSE: 'CONCOURSE',
  COPSE: 'COPSE',
  CORNER: 'CORNER',
  CORSO: 'CORSO',
  COURT: 'COURT',
  COURTYARD: 'COURTYARD',
  COVE: 'COVE',
  CRESCENT: 'CRESCENT',
  CREST: 'CREST',
  CROSS: 'CROSS',
  CROSSING: 'CROSSING',
  CROSSROAD: 'CROSSROAD',
  CROSSWAY: 'CROSSWAY',
  CRUISEWAY: 'CRUISEWAY',
  'CUL-DE-SAC': 'CUL-DE-SAC',
  CUTTING: 'CUTTING',
  DALE: 'DALE',
  DELL: 'DELL',
  DEVIATION: 'DEVIATION',
  DIP: 'DIP',
  DISTRIBUTOR: 'DISTRIBUTOR',
  DRIVE: 'DRIVE',
  DRIVEWAY: 'DRIVEWAY',
  EDGE: 'EDGE',
  ELBOW: 'ELBOW',
  END: 'END',
  ENTRANCE: 'ENTRANCE',
  ESPLANADE: 'ESPLANADE',
  ESTATE: 'ESTATE',
  EXPRESSWAY: 'EXPRESSWAY',
  EXTENSION: 'EXTENSION',
  FAIRWAY: 'FAIRWAY',
  'FIRE TRACK': 'FIRE TRACK',
  FIRETRAIL: 'FIRETRAIL',
  FLAT: 'FLAT',
  FOLLOW: 'FOLLOW',
  FOOTWAY: 'FOOTWAY',
  FORESHORE: 'FORESHORE',
  FORMATION: 'FORMATION',
  FREEWAY: 'FREEWAY',
  FRONT: 'FRONT',
  FRONTAGE: 'FRONTAGE',
  GAP: 'GAP',
  GARDEN: 'GARDEN',
  GATE: 'GATE',
  GARDENS: 'GARDENS',
  GATES: 'GATES',
  GLADE: 'GLADE',
  GLEN: 'GLEN',
  GRANGE: 'GRANGE',
  GREEN: 'GREEN',
  GROUND: 'GROUND',
  GROVE: 'GROVE',
  GULLY: 'GULLY',
  HEIGHTS: 'HEIGHTS',
  HIGHROAD: 'HIGHROAD',
  HIGHWAY: 'HIGHWAY',
  HILL: 'HILL',
  INTERCHANGE: 'INTERCHANGE',
  INTERSECTION: 'INTERSECTION',
  JUNCTION: 'JUNCTION',
  KEY: 'KEY',
  LANDING: 'LANDING',
  LANE: 'LANE',
  LANEWAY: 'LANEWAY',
  LEES: 'LEES',
  LINE: 'LINE',
  LINK: 'LINK',
  LITTLE: 'LITTLE',
  LOOKOUT: 'LOOKOUT',
  LOOP: 'LOOP',
  LOWER: 'LOWER',
  MALL: 'MALL',
  MEANDER: 'MEANDER',
  MEW: 'MEW',
  MEWS: 'MEWS',
  MOTORWAY: 'MOTORWAY',
  MOUNT: 'MOUNT',
  NOOK: 'NOOK',
  OUTLOOK: 'OUTLOOK',
  PARADE: 'PARADE',
  PARK: 'PARK',
  PARKLANDS: 'PARKLANDS',
  PARKWAY: 'PARKWAY',
  PART: 'PART',
  PASS: 'PASS',
  PATH: 'PATH',
  PATHWAY: 'PATHWAY',
  PIAZZA: 'PIAZZA',
  PLACE: 'PLACE',
  PLATEAU: 'PLATEAU',
  PLAZA: 'PLAZA',
  POCKET: 'POCKET',
  POINT: 'POINT',
  PORT: 'PORT',
  PROMENADE: 'PROMENADE',
  QUAD: 'QUAD',
  QUADRANGLE: 'QUADRANGLE',
  QUADRANT: 'QUADRANT',
  QUAY: 'QUAY',
  QUAYS: 'QUAYS',
  RAMBLE: 'RAMBLE',
  RAMP: 'RAMP',
  RANGE: 'RANGE',
  REACH: 'REACH',
  RESERVE: 'RESERVE',
  REST: 'REST',
  RETREAT: 'RETREAT',
  RIDE: 'RIDE',
  RIDGE: 'RIDGE',
  RIDGEWAY: 'RIDGEWAY',
  'RIGHT OF WAY': 'RIGHT OF WAY',
  RING: 'RING',
  RISE: 'RISE',
  RIVER: 'RIVER',
  RIVERWAY: 'RIVERWAY',
  RIVIERA: 'RIVIERA',
  ROAD: 'ROAD',
  ROADS: 'ROADS',
  ROADSIDE: 'ROADSIDE',
  ROADWAY: 'ROADWAY',
  RONDE: 'RONDE',
  ROSEBOWL: 'ROSEBOWL',
  ROTARY: 'ROTARY',
  ROUND: 'ROUND',
  ROUTE: 'ROUTE',
  ROW: 'ROW',
  RUE: 'RUE',
  RUN: 'RUN',
  'SERVICE WAY': 'SERVICE WAY',
  SIDING: 'SIDING',
  SLOPE: 'SLOPE',
  SOUND: 'SOUND',
  SPUR: 'SPUR',
  SQUARE: 'SQUARE',
  STAIRS: 'STAIRS',
  'STATE HIGHWAY': 'STATE HIGHWAY',
  STEPS: 'STEPS',
  STRAND: 'STRAND',
  STREET: 'STREET',
  STRIP: 'STRIP',
  SUBWAY: 'SUBWAY',
  TARN: 'TARN',
  TERRACE: 'TERRACE',
  THOROUGHFARE: 'THOROUGHFARE',
  TOLLWAY: 'TOLLWAY',
  TOP: 'TOP',
  TOR: 'TOR',
  TOWERS: 'TOWERS',
  TRACK: 'TRACK',
  TRAIL: 'TRAIL',
  TRAILER: 'TRAILER',
  TRIANGLE: 'TRIANGLE',
  TRUNKWAY: 'TRUNKWAY',
  TURN: 'TURN',
  UNDERPASS: 'UNDERPASS',
  UPPER: 'UPPER',
  VALE: 'VALE',
  VIADUCT: 'VIADUCT',
  VIEW: 'VIEW',
  VILLAS: 'VILLAS',
  VISTA: 'VISTA',
  WADE: 'WADE',
  WALK: 'WALK',
  WALKWAY: 'WALKWAY',
  WAY: 'WAY',
  WHARF: 'WHARF',
  WYND: 'WYND',
  YARD: 'YARD',
  ACCS: 'ACCS',
  ALLY: 'ALLY',
  ALWY: 'ALWY',
  AMBL: 'AMBL',
  ANCG: 'ANCG',
  APP: 'APP',
  ARC: 'ARC',
  ART: 'ART',
  AVE: 'AVE',
  BASN: 'BASN',
  BCH: 'BCH',
  BDGE: 'BDGE',
  BDWY: 'BDWY',
  BLK: 'BLK',
  BRCE: 'BRCE',
  BRK: 'BRK',
  BVD: 'BVD',
  BYPA: 'BYPA',
  BYWY: 'BYWY',
  CAUS: 'CAUS',
  CCT: 'CCT',
  CDS: 'CDS',
  CH: 'CH',
  CIR: 'CIR',
  CL: 'CL',
  CLDE: 'CLDE',
  CLT: 'CLT',
  CMMN: 'CMMN',
  CNR: 'CNR',
  CNWY: 'CNWY',
  CON: 'CON',
  COWY: 'COWY',
  CPS: 'CPS',
  CRCS: 'CRCS',
  CRD: 'CRD',
  CRES: 'CRES',
  CRSG: 'CRSG',
  CRSS: 'CRSS',
  CRST: 'CRST',
  CSO: 'CSO',
  CT: 'CT',
  CTR: 'CTR',
  CTTG: 'CTTG',
  CTYD: 'CTYD',
  CUWY: 'CUWY',
  DEVN: 'DEVN',
  DR: 'DR',
  DRWY: 'DRWY',
  DSTR: 'DSTR',
  ELB: 'ELB',
  ENT: 'ENT',
  ESP: 'ESP',
  EST: 'EST',
  EXP: 'EXP',
  EXTN: 'EXTN',
  FAWY: 'FAWY',
  FITR: 'FITR',
  FOLW: 'FOLW',
  FORM: 'FORM',
  FRNT: 'FRNT',
  FRTG: 'FRTG',
  FSHR: 'FSHR',
  FTRK: 'FTRK',
  FTWY: 'FTWY',
  FWY: 'FWY',
  GDN: 'GDN',
  GDNS: 'GDNS',
  GLD: 'GLD',
  GLY: 'GLY',
  GR: 'GR',
  GRA: 'GRA',
  GRN: 'GRN',
  GRND: 'GRND',
  GTE: 'GTE',
  GTES: 'GTES',
  HRD: 'HRD',
  HTS: 'HTS',
  HWY: 'HWY',
  INTG: 'INTG',
  INTN: 'INTN',
  JNC: 'JNC',
  LDG: 'LDG',
  LKT: 'LKT',
  LNWY: 'LNWY',
  LT: 'LT',
  LWR: 'LWR',
  MNDR: 'MNDR',
  MT: 'MT',
  MWY: 'MWY',
  OTLK: 'OTLK',
  PDE: 'PDE',
  PHWY: 'PHWY',
  PIAZ: 'PIAZ',
  PKLD: 'PKLD',
  PKT: 'PKT',
  PKWY: 'PKWY',
  PL: 'PL',
  PLAT: 'PLAT',
  PLZA: 'PLZA',
  PNT: 'PNT',
  PROM: 'PROM',
  QDGL: 'QDGL',
  QDRT: 'QDRT',
  QY: 'QY',
  QYS: 'QYS',
  RCH: 'RCH',
  RD: 'RD',
  RDGE: 'RDGE',
  RDS: 'RDS',
  RDSD: 'RDSD',
  RDWY: 'RDWY',
  RES: 'RES',
  RGWY: 'RGWY',
  RMBL: 'RMBL',
  RND: 'RND',
  RNDE: 'RNDE',
  RNGE: 'RNGE',
  ROWY: 'ROWY',
  RSBL: 'RSBL',
  RTE: 'RTE',
  RTT: 'RTT',
  RTY: 'RTY',
  RVR: 'RVR',
  RVRA: 'RVRA',
  RVWY: 'RVWY',
  SBWY: 'SBWY',
  SDNG: 'SDNG',
  SHWY: 'SHWY',
  SLPE: 'SLPE',
  SND: 'SND',
  SQ: 'SQ',
  ST: 'ST',
  STPS: 'STPS',
  STRA: 'STRA',
  STRP: 'STRP',
  STRS: 'STRS',
  SWY: 'SWY',
  TCE: 'TCE',
  THOR: 'THOR',
  TKWY: 'TKWY',
  TLWY: 'TLWY',
  TRI: 'TRI',
  TRK: 'TRK',
  TRL: 'TRL',
  TRLR: 'TRLR',
  TWRS: 'TWRS',
  UPAS: 'UPAS',
  UPR: 'UPR',
  VDCT: 'VDCT',
  VLLS: 'VLLS',
  VSTA: 'VSTA',
  WHRF: 'WHRF',
  WKWY: 'WKWY',
  Alley: 'AL',
  Arcade: 'ARC',
  Avenue: 'AVE',
  Boulevard: 'BLV',
  Bend: 'BND',
  Bypass: 'BPS',
  Brace: 'BR',
  Circuit: 'CCT',
  Chase: 'CH',
  Circle: 'CIR',
  Close: 'CL',
  Common: 'CMN',
  Concourse: 'CNC',
  Corner: 'CNR',
  Circus: 'CRC',
  Crescent: 'CRS',
  Crossing: 'CSG',
  Corso: 'CSO',
  Court: 'CT',
  Centre: 'CTR',
  Cove: 'CVE',
  Causeway: 'CWY',
  Drive: 'DR',
  Driveway: 'DRY',
  Entrance: 'ENT',
  Esplanade: 'ESP',
  Expressway: 'EXP',
  Fairway: 'FAY',
  Frontage: 'FR',
  Freeway: 'FWY',
  Garden: 'GDN',
  Glade: 'GL',
  Glen: 'GLN',
  Grange: 'GRA',
  Ground: 'GRD',
  Green: 'GRN',
  Gate: 'GTE',
  Grove: 'GVE',
  Heights: 'HTS',
  Highway: 'HWY',
  Junction: 'JN',
  Key: 'KEY',
  Lane: 'LA',
  Link: 'LK',
  Loop: 'LP',
  Mall: 'ML',
  Mount: 'MT',
  Mews: 'MW',
  Motorway: 'MWY',
  Nook: 'NK',
  Outlook: 'OUT',
  Parade: 'PDE',
  Place: 'PL',
  Plaza: 'PLZ',
  Point: 'PNT',
  Promenade: 'PRM',
  Pass: 'PSS',
  Path: 'PT',
  Parkway: 'PWY',
  Quadrant: 'QD',
  Quadrangle: 'QDG',
  Quay: 'QY',
  Road: 'RD',
  Ridge: 'RDG',
  Roadway: 'RDY',
  Reserve: 'RES',
  Rise: 'RI',
  Round: 'RN',
  Row: 'ROW',
  Rest: 'RST',
  Retreat: 'RT',
  Route: 'RTE',
  'Right of Way': 'RTW',
  Siding: 'SDG',
  Square: 'SQ',
  Street: 'ST',
  STS: 'ST',
  Streets: 'STS',
  Terrace: 'TCE',
  Track: 'TR',
  Trail: 'TRL',
  Tollway: 'TWY',
  View: 'VW',
  Way: 'WAY',
  Walk: 'WK',
  Walkway: 'WKY',
  Wynd: 'WND'
};

const StateCode = {
  'Australian Capital Territory': 'ACT',
  'New South Wales': 'NSW',
  'Northern Territory	': 'NT',
  Queensland: 'QLD',
  'South Australia': 'SA',
  Tasmania: 'TAS',
  Victoria: 'VIC',
  'Western Australia': 'WA'
};

const DirectionCode = {};

const normalizeMap = {
  type: StreetType,
  type1: StreetType,
  type2: StreetType,
  state: StateCode
};

export interface Address {
  streetName?: string;
  streetName1?: string;
  streetName2?: string;
  streetNumber?: string;
  street?: string;
  street1?: string;
  propertyName?: string;
  unitType?: string;
  unitNumber?: string;
  unitSection?: string;
  place?: string;
  address?: string;
  intersection?: string;
  streetType?: string;
  streetType1?: string;
  streetType2?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
}

interface AddressRegex {
  direct?: XRegExp;
  type?: XRegExp;
  corner?: string;
  streetNameNumber?: XRegExp;
  streetName?: XRegExp;
  streetName1?: XRegExp;
  streetName2?: XRegExp;
  unitType?: XRegExp;
  unitTypeNumbered?: XRegExp;
  unitTypeUnNumbered?: XRegExp;
  unitSection?: XRegExp;
  place?: XRegExp;
  address?: XRegExp;
  informalAddress?: XRegExp;
  intersection?: XRegExp;
  normalizedAddress?: XRegExp;
  streetType?: XRegExp;
  streetType1?: XRegExp;
  streetType2?: XRegExp;
  suburb?: XRegExp;
  state?: string;
  dircode?: XRegExp;
  suburbAndState?: XRegExp;
  postcode?: string;
  fraction?: string;
}

type AddressParts = RegExpExecArray;

export class Parser {
  private initialized = false;
  private addressRegex: AddressRegex;

  private capitalize(text: string): string {
    return text && text[0].toUpperCase() + text.slice(1);
  }

  private applyTitleCase(text: string): string {
    const splitStr = text.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      // You do not need to check if 'i' is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }

  private flatten(o: object): any[] {
    return Object.keys(o).concat(Object.values(o));
  }

  private each(o: object, fn: (value: any, key: string) => any): void {
    Object.keys(o).forEach(function (k: string) {
      fn(o[k], k);
    });
  }

  private lazyInit() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;

    this.addressRegex = {
      type: this.flatten(StreetType)
        .sort()
        .filter(function (v, i, arr) {
          return arr.indexOf(v) === i;
        })
        .join('|'),
      fraction: '\\d+\\/\\d+',
      state:
        '\\b(?:' +
        Object.keys(StateCode)
          .concat(Object.values(StateCode))
          .map(XRegExp.escape)
          .join('|') +
        ')\\b',
      postcode: '(?<postcode>\\d{4})[- ]?(?<plus4>\\d{4})?',
      corner: '(?:\\band\\b|\\bat\\b|&|\\@)'
    };

    this.addressRegex.streetNameNumber =
      '(?<streetNumber>\\d+[a-zA-Z]?-?\\d*)(?=\\s)';

    this.addressRegex.streetName =
      '                                       \n\
      (?:                                                       \n\
        (?:(?<streetName_0>' +
      this.addressRegex.direct +
      ')\\W+               \n\
           (?<streetType_0>' +
      this.addressRegex.type +
      ')\\b                    \n\
        )                                                       \n\
        |                                                       \n\
        (?:(?<prefix_0>' +
      this.addressRegex.direct +
      ')\\W+)?               \n\
        (?:                                                     \n\
          (?<streetName_1>[^,]*\\d)                                 \n\
          (?:[^\\w,]*(?<suffix_1>' +
      this.addressRegex.direct +
      ')\\b)     \n\
          |                                                     \n\
          (?<streetName_2>[^,]+)                                    \n\
          (?:[^\\w,]+(?<streetType_2>' +
      this.addressRegex.type +
      ')\\b)         \n\
          (?:[^\\w,]+(?<suffix_2>' +
      this.addressRegex.direct +
      ')\\b)?    \n\
          |                                                     \n\
          (?<street_3>[^,]+?)                                   \n\
          (?:[^\\w,]+(?<streetType_3>' +
      this.addressRegex.type +
      ')\\b)?        \n\
          (?:[^\\w,]+(?<suffix_3>' +
      this.addressRegex.direct +
      ')\\b)?    \n\
        )                                                       \n\
      )';

    this.addressRegex.unitTypeNumbered =
      '             \n\
      (?<unitType_1>su?i?te                      \n\
        |p\\W*[om]\\W*b(?:ox)?                        \n\
        |(?:ap|dep)(?:ar)?t(?:me?nt)?                 \n\
        |ro*m                                         \n\
        |flo*r?                                       \n\
        |uni?t                                        \n\
        |bu?i?ldi?n?g                                 \n\
        |ha?nga?r                                     \n\
        |lo?t                                         \n\
        |pier                                         \n\
        |slip                                         \n\
        |spa?ce?                                      \n\
        |stop                                         \n\
        |tra?i?le?r                                   \n\
        |PO box                                   \n\
        |P.O. box)(?![a-z]                                 \n\
      )                                               \n\
      ';

    this.addressRegex.unitTypeUnNumbered =
      '           \n\
      (?<unitType_2>ba?se?me?n?t                 \n\
        |fro?nt                                       \n\
        |lo?bby                                       \n\
        |lowe?r                                       \n\
        |off?i?ce?                                    \n\
        |pe?n?t?ho?u?s?e?                             \n\
        |rear                                         \n\
        |side                                         \n\
        |uppe?r                                       \n\
      )\\b';

    this.addressRegex.unitSection =
      '                               \n\
      (?:                               #fix3             \n\
        (?:                             #fix1             \n\
          (?:                                             \n\
            (?:' +
      this.addressRegex.unitTypeNumbered +
      '\\W*) \n\
            |(?<unitType_3>\\#)\\W*                  \n\
          )                                               \n\
          (?<unitNumber_1>[\\w-]+)                      \n\
        )                                                 \n\
        |                                                 \n\
        ' +
      this.addressRegex.unitTypeUnNumbered +
      '           \n\
      )';

    this.addressRegex.suburbAndState =
      '                       \n\
      (?:                                               \n\
        (?<suburb>[^\\d,]+?)\\W+                          \n\
        (?<state>' +
      this.addressRegex.state +
      ')                  \n\
      )                                                 \n\
      ';

    this.addressRegex.place =
      '                                \n\
      (?:' +
      this.addressRegex.suburbAndState +
      '\\W*)?            \n\
      (?:' +
      this.addressRegex.postcode +
      ')?                           \n\
      ';

    this.addressRegex.address = XRegExp(
      '                      \n\
      ^                                                 \n\
      [^\\w\\#]*                                        \n\
      (' +
      this.addressRegex.streetNameNumber +
      ')\\W*                       \n\
      (?:' +
      this.addressRegex.fraction +
      '\\W*)?                  \n\
         ' +
      this.addressRegex.streetName +
      '\\W+                      \n\
      (?:' +
      this.addressRegex.unitSection +
      ')?\\W*          #fix2   \n\
         ' +
      this.addressRegex.place +
      '                           \n\
      \\W*$',
      'ix'
    );

    const sep = '(?:\\W+|$)'; // no support for \Z

    this.addressRegex.informalAddress = XRegExp(
      '                   \n\
      ^                                                       \n\
      \\s*                                                    \n\
      (?:' +
      this.addressRegex.unitSection +
      sep +
      ')?                        \n\
      (?:' +
      this.addressRegex.streetNameNumber +
      ')?\\W*                          \n\
      (?:' +
      this.addressRegex.fraction +
      '\\W*)?                        \n\
         ' +
      this.addressRegex.streetName +
      sep +
      '                            \n\
      (?:' +
      this.addressRegex.unitSection.replace(/_\d/g, '$&1') +
      sep +
      ')?  \n\
      (?:' +
      this.addressRegex.place +
      ')?                               \n\
      ',
      'ix'
    );

    this.addressRegex.intersection = XRegExp(
      '                     \n\
      ^\\W*                                                 \n\
      ' +
      this.addressRegex.streetName.replace(/_\d/g, '1$&') +
      '\\W*?      \n\
      \\s+' +
      this.addressRegex.corner +
      '\\s+                         \n\
      ' +
      this.addressRegex.streetName.replace(/_\d/g, '2$&') +
      '\\W+     \n\
      ' +
      this.addressRegex.place +
      '\\W*$',
      'ix'
    );
  }

  private optimiseAddress(address: string): string {
    const leadingCharacter = address[0];
    let optimisedAddress = address;
    if (!isNaN(+leadingCharacter)) {
      const unitMatchedParts = address.match(/(\d+)(\/?)(\d+)?/);
      const [_unitPart, _unitNumber, unitCharacter, _streetNumber] =
        unitMatchedParts;
      if (unitCharacter) {
        optimisedAddress = 'unit ' + address;
      }
    }
    return optimisedAddress.replace(/\s*\([^)]*\)/g, '').replace(/\s-\s/g, '-');
  }

  private shortenStreetType(streetType: string): string {
    return StreetType[streetType] ?? streetType;
  }

  private executeParseAddress(address: string, regex: XRegExp): Address {
    this.lazyInit();
    const parts = XRegExp.exec(address, regex);
    return this.normalizeAddress(parts);
  }

  parseAddress(address: string): Address {
    return this.executeParseAddress(address, this.addressRegex.address);
  }

  parseInformalAddress(address: string): Address {
    return this.executeParseAddress(address, this.addressRegex.informalAddress);
  }

  parseLocation(address: string): Address {
    const optimisedAddress = this.optimiseAddress(address);
    this.lazyInit();
    if (XRegExp(this.addressRegex.corner, 'xi').test(optimisedAddress)) {
      return this.parseIntersection(optimisedAddress);
    }
    return (
      this.parseAddress(optimisedAddress) ||
      this.parseInformalAddress(optimisedAddress)
    );
  }

  normalizeAddress(parts: AddressParts): Address | null {
    this.lazyInit();
    if (!parts?.length) {
      return null;
    }
    const parsed: Address = {};
    Object.keys(parts).forEach(function (k) {
      if (['input', 'index'].indexOf(k) !== -1 || isFinite(+k)) return;
      const key = isFinite(+k.split('_').pop())
        ? k.split('_').slice(0, -1).join('_')
        : k;
      if (parts[k])
        parsed[key] = parts[k].trim().replace(/^\s+|\s+$|[^\w\s\-#&]/g, '');
    });
    this.each(normalizeMap, function (map, key) {
      if (parsed[key] && map[parsed[key].toLowerCase()]) {
        parsed[key] = map[parsed[key].toLowerCase()];
      }
    });

    ['type', 'type1', 'type2'].forEach(function (key) {
      if (key in parsed)
        parsed[key] =
          parsed[key].charAt(0).toUpperCase() +
          parsed[key].slice(1).toLowerCase();
    });

    // Handle post box address
    if (typeof parsed.unitType !== 'undefined') {
      if (parsed.unitType.replace(/\s/g, '').toLowerCase() == 'pobox') {
        parts.input = parts.input.replace(/\./g, '');
        const suburbAndState =
          'street' +
          parts.input
            .replace(parsed.unitType, '')
            .replace(parsed.unitNumber, '');
        const postBoxLocation = this.parseLocation(suburbAndState);
        delete postBoxLocation.streetNumber;
        delete postBoxLocation.street;
        postBoxLocation.propertyName =
          parsed.unitType + ' ' + parsed.unitNumber;
        return postBoxLocation;
      }
    }

    if (typeof parsed.streetType !== 'undefined')
      parsed.streetType = this.shortenStreetType(parsed.streetType);
    if (typeof parsed.streetType1 !== 'undefined')
      parsed.streetType1 = this.shortenStreetType(parsed.streetType1);
    if (typeof parsed.streetType2 !== 'undefined')
      parsed.streetType2 = this.shortenStreetType(parsed.streetType2);

    // Handle Intersection
    if (
      typeof parsed.streetName1 !== 'undefined' ||
      typeof parsed.streetName2 !== 'undefined' ||
      typeof parsed.streetType1 !== 'undefined' ||
      typeof parsed.streetType2 !== 'undefined'
    ) {
      if (
        typeof parsed.streetType1 == 'undefined' &&
        typeof parsed.streetType2 !== 'undefined'
      ) {
        parsed.streetType1 = parsed.streetType2;
        if (
          typeof parsed.streetName1 == 'undefined' &&
          typeof parsed.street1 !== 'undefined'
        ) {
          parsed.streetName1 = parsed.street1;
          delete parsed.street1;
        }
      }
      parsed.streetName1 = parsed.streetName1.replace(
        /^(Crn|Cnr of|Cnr|Corner)/g,
        ''
      );
      parsed.streetName =
        parsed.streetName1 +
        ' ' +
        parsed.streetType1 +
        ' & ' +
        parsed.streetName2 +
        ' ' +
        parsed.streetType2;
    }

    if (parsed.suburb) {
      parsed.suburb = this.applyTitleCase(parsed.suburb);
      parsed.suburb = XRegExp.replace(
        parsed.suburb,
        XRegExp(
          '^(?<dircode>' + this.addressRegex.dircode + ')\\s+(?=\\S)',
          'ix'
        ),
        (match: any) =>
          this.capitalize(DirectionCode[match.dircode.toUpperCase()]) + ' '
      );
    }

    Object.keys(parsed).forEach(function (key) {
      if (typeof parsed[key] !== 'undefined') parsed[key] = parsed[key].trim();
    });

    return parsed;
  }

  parseIntersection(address: string): Address {
    this.lazyInit();
    const parts = XRegExp.exec(address, this.addressRegex.intersection);
    return this.normalizeAddress(parts);
  }
}
