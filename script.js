// All the form input values------------------//
let form=document.getElementById('form');
let firstName=document.getElementById('fName');
let LastName=document.getElementById('lName');
let Address =document.getElementById('Address');
let state=document.getElementById('state');
let country =document.getElementById('country');
let gender =document.getElementById('gender');
let pincode =document.getElementById('pincode');
let food= document.getElementById('food')


// Add eventListener to Submit ----------------------//
document.getElementById('Submit').addEventListener('click',function(e){

    //Create an array to hold all the input data
     let mainData=[firstName,LastName,Address,state,country,gender,pincode, food]
     e.preventDefault()


    //Capture the Table Data element to append the Input values
    let tableData= document.getElementsByTagName('td')
       
      //Iterate individual Table Data to append values
      for(let i=0;i<tableData.length-1;i++){
         tableData[i].innerText=mainData[i].value
         console.log(mainData[i].value)
          
        }


    //Capture the multiple select value and add it to an array
    let listItem= document.getElementsByTagName('li')
    let selectData=[]
        for(let option of food.options){
           if(option.selected){
               selectData.push(option.value)
           }


        }

    //Add the captured multiple select value to List item
    for(let i=0;i<listItem.length;i++){
        listItem[i].innerText=selectData[i]

    }

 
    //Finally Reset the form values 
    form.reset()

})

