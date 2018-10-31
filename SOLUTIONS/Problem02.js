// Letters accessible to your left hand :
// ['q','w','e','r','t','a','s','d','f','g','z','x','c','v','b']

// Letters accessible to your right hand:
// ['y','u','i','o','p','h','j','k','l','n','m']

const tenFingerPattern = (word) => {  
  let leftHand = ['q','w','e','r','t','a','s','d','f','g','z','x','c','v','b'];
  let rightHand = ['y','u','i','o','p','h','j','k','l','n','m'];
  let targets = word.toLowerCase()
    .split('');
  
  let referencePoint = leftHand.includes(targets[0])
    ? 'left'
    : 'right';
 
  const referenceCheck = (letter) => {
    return leftHand.includes(letter)
        ? 'left'
        : 'right';
  };
 
  for (let i = 0; i < targets.length ; i ++) {
    if (referencePoint === referenceCheck(targets[i]) && (i === targets.length - 1) ){
      return true;
    } else if (referencePoint !== referenceCheck(targets[i]) ){
      return false;
    }
  }
};
