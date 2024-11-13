import {validateNurseLicenseNumber} from './nurse-license.validator';


describe('validateNurseLicenseNumber', () => {

  const validLicenseNumbers = [
    '4240479P', '4183093P', '1681178P', '1913504P', '1050353P', '2920810P', '3091336P', '3559838P', '0329905P',
    '3567733P', '4462240P', '3019085P', '0626561P', '0173909P', '2122434P', '3998617P', '1963838P', '0569007P',
    '1573762P', '1294742P', '1667263P', '0583214P', '2224289P', '3891011P', '0575583P', '1014612P', '1662226P',
    '1622407P', '1597513P', '1894487P', '2239483P', '3425479P', '1963720P', '4526707P', '4296904P', '3438898P',
    '2814861P', '3592255P', '4425113P', '1977588P', '2355045P', '1160342P', '4062747P', '0878735P', '2742479P',
    '0829483P', '2049618P', '3917924P', '3621460P', '1970098P', '0129148P', '1788831P', '2623710P', '1349497P',
    '0250025P', '3464077P', '2626813P', '0986588P', '4497166P', '1911812P', '2959406P', '3488082P', '2781471P',
    '0155576P', '3588505P', '0659428P', '3515641P', '1447122P', '1652605P', '3643471P', '3899841P', '1170716P',
    '3038038P', '0982929P', '0140554P', '3727237P', '4536961P', '1187484P', '3355837P', '0826451P', '1815677P',
    '1057525P', '2125252P', '1079357P', '3438271P', '3955075P', '2715927P', '2779623P', '2223997P', '0494167P',
    '2385984P', '1870158P', '0286928P', '3612943P', '0990349P', '3947414P', '0535461P', '2310970P', '3952649P',
    '1611284P', '4240479P', '00XXXXXA', '00XXXXXP', '01XXXXXA', '01XXXXXP', '02ZZZZZP', '02OOOOOA', '03XXXXXP',
    '03XXXXXA'
  ];

  const invalidLicenseNumbers = [
    '1611284Z', '1611284G', '1611284C', '1611284D', '1611284E', '1611284F', '1611284g', '36971', '3697', '369', '36',
    'XXXXXXXB', 'XXXXXXXC', 'XXXXXXXD', 'XXXXXXXE', 'XXXXXXXF', 'XXXXXXXG', 'XXXXXXXH', 'XXXXXXXI', 'XXXXXXXJ',
    'XXXXXXXK', 'XXXXXXXL', 'XXXXXXXM', 'XXXXXXXN', 'XXXXXXXO', 'XXXXXXXR', 'XXXXXXXS', 'XXXXXXXT', 'XXXXXXXU',
    'XXXXXXXW', 'XXXXXXXX', 'XXXXXXXY', 'XXXXXXXZ', '46XXXXXP', '46XXXXXA', '47XXXXXP'
  ];

  validLicenseNumbers.forEach((licenseNumber) => {
    it(`should return true for valid nurse license number: ${licenseNumber}`, () => {
      expect(validateNurseLicenseNumber(licenseNumber)).toBeTrue();
    });
  });

  invalidLicenseNumbers.forEach((licenseNumber) => {
    it(`should return false for invalid nurse license number: ${licenseNumber}`, () => {
      expect(validateNurseLicenseNumber(licenseNumber)).toBeFalse();
    });
  });
});
