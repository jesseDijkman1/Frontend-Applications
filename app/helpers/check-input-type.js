import { helper } from '@ember/component/helper';

export function checkInputType(arr, amt) {

  if (arr[0].length == amt.aantal) {

    console.log('klopt');
    return true;
  
  }
}

export default helper(checkInputType);
