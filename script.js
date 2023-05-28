let selectIndex = null;
let selectedData = null;
const allRecord = [1, 2, 34, 25, 100, 20, 10, 80, 50];

//adding a new element to table

const addDataInTable = () => {
  let newNumber = +prompt("Enter a value from a user");
  if (isNaN(newNumber)) {
    alert("You have entered a wrong value inside the prompt.")
  }
  else {
    allRecord.push(newNumber)
    renderMyTable()
  }
}

//printing table elements

let renderMyTable = (newRecords) => {

  tableRow.innerHTML = " ";
  if (newRecords) {
    newRecords.forEach((val, index) => {
      tableRow.innerHTML += `<td onclick="selectionFunc(event)" id='${index}'>${val}</td>`;
    });
  }
  else {
    allRecord.forEach((val, index) => {
      tableRow.innerHTML += `<td onclick="selectionFunc(event)" id='${index}'>${val}</td>`;
    });
  }

};
renderMyTable();

//selecting an element of table

let selectionFunc = (e) => {
  // console.log("event----------->", e);
  selectedData = e.target.innerText;
  selectIndex = e.target.id;
  selectedValue.innerText = `${selectedData} is selected and its index is ${selectIndex}`;
};

//deleting an element

const deleteFunc = () => {
  const newRecords = allRecord.filter((item) => item != selectedData);
  console.log("newRocords/delete--->", newRecords);
  renderMyTable(newRecords);
};

//sorting table data

const sortArray = (e) => {
  console.log("e--------->", e)
  if (e.target.value === "asc") {
    allRecord.sort((num1, num2) => {
      if (num1 > num2) {
        return 1;
      }
      else if (num1 < num2) {
        return -1
      }
      else {
        return 0
      }
    })
  }
  else if (e.target.value === "dsc") {
    allRecord.sort((num1, num2) => {
      if (num1 > num2) {
        return -1;
      }
      else if (num1 < num2) {
        return 1
      }
      else {
        return 0
      }
    })
  }
  renderMyTable()
}

//even odd numbers

const evenNumbers = () => {
  allRecord.forEach((item, index) => {
    if (item % 2 == 0) {
      // console.log(item);
      document.getElementById(index).style.backgroundColor = 'blueviolet';
    }
  });
}
const oddNumbers = () => {
  allRecord.forEach((item, index) => {
    if (item % 2 !== 0) {
      // console.log(item);
      document.getElementById(index).style.backgroundColor = 'green';
    }
  });
}

// const evenNumbers = () => {
//   allRecord.filter((item , index) => {
//     if(item % 2 == 0){
//       document.getElementById(index).style.backgroundColor = 'red';
//     }
//   })
// }

// left move

const leftMove=()=>{
  if(selectedData===null || selectedData===""){
   alert("Please select the value from given an array first!")
  }
  else{
   if(selectIndex===allRecord[0]){
     alert("Not move left anymore..")
   }
   else{
   let previousValue=allRecord[selectIndex-1];
  allRecord[selectIndex-1]=selectedData;
  allRecord[selectIndex]=previousValue;
  selectIndex=selectIndex-1;
  }
 }
  renderMyTable();
 }

//right move

 const rightMove=()=>{
   if(selectedData===null || selectedData===""){
   alert("Please select the value from given an array first!")
  }

  else{
   if(selectIndex===allRecord.length-1){
     alert("Not move Right anymore..")
   }
   else{
     let nextValue=allRecord[parseInt(selectIndex)+1];
     allRecord[parseInt(selectIndex)+1]=selectedData;
     allRecord[parseInt(selectIndex)]=nextValue;
     selectIndex=parseInt(selectIndex)+1;

   }
   renderMyTable();
  }
 }
