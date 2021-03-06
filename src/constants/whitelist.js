/**
 * Whitelisting info.
 */

var whitelist = {};

whitelist.MAKES = ['jeep', 'ram'];

whitelist.MAKE_MODEL = [];
whitelist.MAKE_MODEL.push({make: 'srt', model: 'cherokee'});

whitelist.MAKE_MODEL_YEAR = [];
/* whitelist.MAKE_MODEL_YEAR.push({make: 'chrysler', model: '200c', year: '2016'}); */

const Config = require('../config');

whitelist.getWhitelistedVins = function () {

    try {
        if (Config.ENV.ENV === 'NRT') {
            return ["1C4RJFCG0EC3134UC", "1C3ADEAZ2DV2027UC", "1C4RDJEG2HC2016UC", "1C3CCCCB7FN1008UC", "1C4RJFDJ1HC1007UC", "ZFA520VP5FP1069UC", "1C4RJFCG2EC3123UC", "1C4PJMDB8EW3170UC"];
        } else {
            return ["1C4PJMBB1JD1004UC","1C4RJFDJ5FC1013UC","3C7WRDBL9GG2179UC","2C4RC1N77HR764388","1C4RJFCG0EC3134UC", "1C3ADEAZ2DV2027UC", "1C4RDJEG2HC2016UC", "1C3CCCCB7FN1008UC", "1C4RJFDJ1HC1007UC", "1C6RR7NM0GS1005UC", "1C3CCCCB4FN1156UC", "1C3ADEAZ6DV2028UC", "ZFA520VP5FP1069UC", "1C4RJFCG2EC3123UC", "1C4PJMDB2HD1004UC", "2C4RC1JP4HR1010UC", "1C3ADEAZ6DV2034UC"];
        }
    } catch (error) {
        return [];
    }

    /*
    try {
        if (Config.ENV.ENV === 'NRT') {
            return ["1C4RJFCG0EC3134UC","1C3ADEAZ2DV2027UC","1C4RDJEG2HC2016UC","1C3CCCCB7FN1008UC","1C6RR7NT5DS635189","1C6RR7PT3GS370645","ZACCJBCT6GPD36185","1C4RJFDJ1HC1007UC","1C4RJFDJ2EC169761","3C63RRKLXGG234304","1C3CCCEG7GN170692","2C4RC1J72HR505524","2C3CDXGJ3GH174714","2C3CDZDJXGH162303","1C4PJMDS3EW135024","1C4PJMBSXHW598334","ZACCJBDB0HPF62052","3C6UR5FL1EG135729","1C4RJFCMXEC441534","1C6RR7NT6FS573210","2C3CDZBT8GH162935","1C6RR7WT4HS789249","1C4RJEBG6HC697485","2C3CDXJG7GH305348","1C4PJLCS8HD213583","1C4RJFDJ6HC897698","1C4RDJAG5EC562639","2C4RC1BG7HR515139","1C4RJFAG5GC507181","1C6RR7NT6FS573210","ZFA520VP5FP1069UC","1C4RJFCG2EC3123UC","1C4PJMDX1JD500009","1C4PJMDB7JD500052","1C4PJMBS6HD224508","1C4PJMDX2JD500049","1C4PJMJS2HD213491","1C4PJLDB2JD500051","1C4PJMBS2HD213487","1C4PJMBX3JD500029","1C4PJMLB7JD500022","1C4PJMBB2HD213490","1C4PJMBB0JD500025","1C4PJMDB8EW3170UC","1C4PJMBX5JD500033","1C4PJMBX7JD500020","1C6RR7LG7HS851136","ZACCJABB6HPE57593","1C4PJMBX9KD100154","1C40JMJX4KD100158","1C6RR7LT5DS516867","1C4PJMJX4KD100158","2C4RC1N77HR764388","1C4RJFDJ2GC326241"];
        }
        else {
            return ["1C4RJFCG0EC3134UC","1C3ADEAZ2DV2027UC","1C4RDJEG2HC2016UC","1C3CCCCB7FN1008UC","1C6RR7NT5DS635189","1C6RR7PT3GS370645","ZACCJBCT6GPD36185","2C3CDZBT8GH162935","1C4RJFDJ1HC1007UC","1C4RJFDJ2EC169761","3C63RRKLXGG234304","1C3CCCEG7GN170692","2C4RC1J72HR505524","2C3CDXGJ3GH174714","2C3CDZDJXGH162303","1C4PJMDS3EW135024","1C4PJMBSXHW598334","1C6RR7NM0GS1005UC","1C3CCCCB4FN1156UC","1C3ADEAZ6DV2028UC","ZFA520VP5FP1069UC","1C4RJFCG2EC3123UC","1C6RR7WT4HS789249","1C4PJMDB2HD1004UC","2C4RC1JP4HR1010UC","1C3ADEAZ6DV2034UC","1C6RR7WT4HS789249","3C6UR5FL1EG135729","1C4PJMBS6HD224508"];
        }
    } catch (error) {
        return [];
    }
    */
};

module.exports = Object.freeze(whitelist);