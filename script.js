let arr6liczb=[1,2,3,4,5,6], liczbaDod=0, liczbaMno=1;
arr6liczb.forEach(function(element, index) {
  liczbaDod = liczbaDod + element;
  liczbaMno = liczbaMno * element;
  console.log(liczbaDod);
  console.log(liczbaMno);
})