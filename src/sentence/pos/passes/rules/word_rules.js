const tag_mapping = require('../../parts_of_speech.js').tag_mapping;
//regex patterns and parts of speech],
module.exports = [
  ['^[0-9]+ ?(am|pm)$', 'DA'],
  ['^[0-9]+(st|nd|rd)?$', 'CD'],
  ['^[a-z]et$', 'VB'],
  ['cede$', 'VB'],
  ['.[cts]hy$', 'JJ'],
  ['.[st]ty$', 'JJ'],
  ['.[lnr]ize$', 'VB'],
  ['.[gk]y$', 'JJ'],
  ['.fies$', 'VB'],
  ['.some$', 'JJ'],
  ['.[nrtumcd]al$', 'JJ'],
  ['.que$', 'JJ'],
  ['.[tnl]ary$', 'JJ'],
  ['.[di]est$', 'JJS'],
  ['^(un|de|re)\\-[a-z]..', 'VB'],
  ['.lar$', 'JJ'],
  ['[bszmp]{2}y', 'JJ'],
  ['.zes$', 'VB'],
  ['.[icldtgrv]ent$', 'JJ'],
  ['.[rln]ates$', 'VBZ'],
  ['.[oe]ry$', 'NN'],
  ['[rdntkdhs]ly$', 'RB'],
  ['.[lsrnpb]ian$', 'JJ'],
  ['.[^aeiou]ial$', 'JJ'],
  ['.[^aeiou]eal$', 'JJ'],
  ['.[vrl]id$', 'JJ'],
  ['.[ilk]er$', 'JJR'],
  ['.ike$', 'JJ'],
  ['.ends?$', 'VB'],
  ['.wards$', 'RB'],
  ['.rmy$', 'JJ'],
  ['.rol$', 'NN'],
  ['.tors$', 'NN'],
  ['.azy$', 'JJ'],
  ['.where$', 'RB'],
  ['.ify$', 'VB'],
  ['.bound$', 'JJ'],
  ['.[^z]ens$', 'VB'],
  ['.oid$', 'JJ'],
  ['.vice$', 'NN'],
  ['.rough$', 'JJ'],
  ['.mum$', 'JJ'],
  ['.teen(th)?$', 'CD'],
  ['.oses$', 'VB'],
  ['.ishes$', 'VB'],
  ['.ects$', 'VB'],
  ['.tieth$', 'CD'],
  ['.ices$', 'NN'],
  ['.pose$', 'VB'],
  ['.ions$', 'NN'],
  ['.ean$', 'JJ'],
  ['.[ia]sed$', 'JJ'],
  ['.tized$', 'VB'],
  ['.llen$', 'JJ'],
  ['.fore$', 'RB'],
  ['.ances$', 'NN'],
  ['.gate$', 'VB'],
  ['.nes$', 'VB'],
  ['.less$', 'RB'],
  ['.ried$', 'JJ'],
  ['.gone$', 'JJ'],
  ['.made$', 'JJ'],
  ['.[pdltrkvynsw]ing$', 'JJ'],
  ['.tions$', 'NN'],
  ['.tures$', 'NN'],
  ['.ous$', 'JJ'],
  ['.ports$', 'NN'],
  ['. so$', 'RB'],
  ['.ints$', 'NN'],
  ['.[gt]led$', 'JJ'],
  ['.lked$', 'VB'],
  ['.fully$', 'RB'],
  ['.*ould$', 'MD'],
  ['^-?[0-9]+(.[0-9]+)?$', 'CD'],
  ['[a-z]*\\-[a-z]*\\-', 'JJ'],
  ['[a-z]\'s$', 'NNO'],
  ['.\'n$', 'VB'],
  ['.\'re$', 'CP'],
  ['.\'ll$', 'MD'],
  ['.\'t$', 'VB'],
  ['.tches$', 'VB'],
  ['^https?\:?\/\/[a-z0-9]', 'NN'], //the colon is removed in normalisation
  ['^www\.[a-z0-9]', 'NN'],
  ['.ize$', 'VB'],
  ['.[^aeiou]ise$', 'VB'],
  ['.[aeiou]te$', 'VB'],
  ['.ea$', 'NN'],
  ['[aeiou][pns]er$', 'NN'],
  ['.ia$', 'NN'],
  ['.sis$', 'NN'],
  ['.[aeiou]na$', 'NN'],
  ['.[^aeiou]ity$', 'NN'],
  ['.[^aeiou]ium$', 'NN'],
  ['.[^aeiou][ei]al$', 'JJ'],
  ['.ffy$', 'JJ'],
  ['.[^aeiou]ic$', 'JJ'],
  ['.(gg|bb|zz)ly$', 'JJ'],
  ['.[aeiou]my$', 'JJ'],
  ['.[^aeiou][ai]ble$', 'JJ'],
  ['.[^aeiou]eable$', 'JJ'],
  ['.[^aeiou]ful$', 'JJ'],
  ['.[^aeiou]ish$', 'JJ'],
  ['.[^aeiou]ica$', 'NN'],
  ['[aeiou][^aeiou]is$', 'NN'],
  ['[^aeiou]ard$', 'NN'],
  ['[^aeiou]ism$', 'NN'],
  ['.[^aeiou]ity$', 'NN'],
  ['.[^aeiou]ium$', 'NN'],
  ['.[lstrn]us$', 'NN'],
  ['..ic$', 'JJ'],
  ['[aeiou][^aeiou]id$', 'JJ'],
  ['.[^aeiou]ish$', 'JJ'],
  ['.[^aeiou]ive$', 'JJ'],
  ['[ea]{2}zy$', 'JJ'],
  ['[^aeiou]ician$', 'AC'],
  ['.keeper$', 'AC'],
  ['.logist$', 'AC'],
  ['..ier$', 'AC'],
  ['.[^aeiou][ao]pher$', 'AC'],
  ['.tive$', 'AC'],
  ['[aeiou].*ist$', 'JJ'],
  ['[^i]fer$', 'VB'],
  //slang things
  ['^um+$', 'EX'], //ummmm
  ['^([hyj]a)+$', 'EX'], //hahah
  ['^(k)+$', 'EX'], //kkkk
  ['^(yo)+$', 'EX'], //yoyo
  ['^yes+$', 'EX'], //yessss
  ['^no+$', 'EX'], //noooo
  ['^lol[sz]$', 'EX'], //lol
  ['^woo+[pt]?$', 'EX'], //woo
  ['^ug?h+$', 'EX'], //uhh
  ['^uh[ -]?oh$', 'EX'], //uhoh
].map(function(a) {
  return {
    reg: new RegExp(a[0], 'i'),
    pos: tag_mapping[a[1]]
  };
});
