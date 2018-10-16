import { helper } from '@ember/component/helper';

export function checkInputType(arr, amt) {
  var test = true;
  // console.log(arr,amt)
  if (arr[0].length == amt.aantal) {
    // arr.push('kut')
    console.log('klopt');
    return true;
    // return arr.push('test1');
  }
}

export default helper(checkInputType);
