import { output } from "../utils/output";

export class listGroupItems {
  openingTag = "<li class='list-group-item>'";
  closingTag = "</li>";
  innerHTML = "";

  constructor(content = "") {
    this.innerHTML = content;

    toString();
    {
      return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
  }
}

for (let listGroup = 1; listGroup < 8; listGroup++);
{
}

const myObject = {
  listGroupItems1: ["Rooms"],
  listGroupItems2: ["Artisian food and Drinks"],
  listGroupItems3: ["Pool"],
  listGroupItems4: ["Catering"],
  listGroupItems5: ["Wifi"],
  listGroupItems6: ["Event Supplies"],
  listGroupItems7: ["Parking"],
  listGroupItems8: ["Fitness Center"],
};

const myArray1 = myObject.listGroupItems1;
const myArray2 = myObject.listGroupItems2;
const myArray3 = myObject.listGroupItems3;
const myArray4 = myObject.listGroupItems4;
const myArray5 = myObject.listGroupItems5;
const myArray6 = myObject.listGroupItems6;
const myArray7 = myObject.listGroupItems7;
const myArray8 = myObject.listGroupItems8;

for (let i = 0; (i = 8); i++) {
  const array1Item = myArray1[i];
  const array2Item = myArray2[i];
  const array3Item = myArray3[i];
  const array4Item = myArray4[i];
  const array5Item = myArray5[i];
  const array6Item = myArray6[i];
  const array7Item = myArray7[i];
  const array8Item = myArray8[i];
  output("myTag");
}
