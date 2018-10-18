import { helper } from '@ember/component/helper';

let save = [];
export function inLocalStorage(data) {
  let vraag = data[0].vraag.split(' ').join('_');
  // console.log(data[1][0])
  let ans = data[1].naam;
  if (!ans) {
    ans = data[1][0].naam
  }
  if (ans) {
    ans = ans.split(' ').join('_')
  }
  let inStorage;
  console.log(vraag, ans)
  if (localStorage.getItem(vraag) === ans) {
    inStorage = true;
  }

  return inStorage;
  // let vraag = v[0].vraag;
  // // let antwoord;
  // var s = false;
  // v[0].antwoorden.forEach((ans) => {
  //   if (localStorage.getItem(vraag) === ans.naam) {
  //     console.log(ans.naam, 'in')
  //     s = true;
  //   }
  // });
  //
  // return s;

  // let localVraag = localStorage.getItem(vraag);
  // if (localVraag) {
  //   console.log(localVraag)
  //   return true;
  // }
  // console.log(vraag, antwoord)
  // return true;
}

export default helper(inLocalStorage);
