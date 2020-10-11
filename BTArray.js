//function exercise21(){
    var array = [1,2,3,4,5,6,7,8,9]
    var reducer = (accumulator, currentValue) => accumulator + currentValue
    console.log(array.reduce(reducer))
//}
/* function exercise22(){ */
    var array = [1,2,3,4,5,6,7,8,9]
    var maxNumber = Math.max.apply(Math, array)
    var minNunber = Math.min.apply(Math, array)
    var avgNumber = (maxNumber+minNunber)/2

    console.log("Số lớn nhất:"+ maxNumber)
    console.log("số nhỏ nhất:"+ minNunber)
    console.log("số trung bình:"+ avgNumber)
/* } */
/* function exercise23(){ */
    var array = [1,1,2,3,3,4,4,4,4]
    var countArray = array.reduce(function (acc, curr) {
        if (typeof acc[curr] == 'undefined') {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }
      
        return acc;
      }, {})
      console.log("1:"+countArray[1]," ","2:"+countArray[2]," ","3:"+countArray[3]," ","4:"+countArray[4])  
/* }
function exercise24(){ */
    var array = [1,2,3,4,5,6,7,8,9]
    function kt(array){
        if (array<2) {
            return false
        } else {
            for(var i=2;i<array-1;i++){
                if(array%i ==0){
                    return false
                }else{
                    return true
                }
            }
        }
    }
    var result = array.filter(kt)
    console.log("số nguyên tố là:",result)
/* }
function exercise25(){ */
    var array = [1,2,3,4,5,6,7,8,9]
    var result = array.map(x => x*x)
    console.log("mảng mới:",result)
/* }
function exercise26(){ */
    var array = [1,2,3,4,6,7,8,9]
    var k = 5;

    var closest = array.reduce(function(prev, curr) {
    return (Math.abs(curr - k) < Math.abs(prev - k) ? curr : prev);
    });

    console.log("Số gần nhất là",closest)
/* }
function exercise27(){ */
    var students = [
        {
            id: "T3HXX1",
            firstName: "NgAN",
            lastName: "Duong Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Nguyen Nhat"
        }
    ]
    function ch(students){
        return {
            id: students.id,
            firstName: students.firstName.toLowerCase().replace(students.firstName[0], students.firstName[0].toUpperCase()),
            lastName: students.lastName.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ")
        }

    }
    var array = students.filter(students => students.length >=3).map(ch)
    console.log(array)
    
/* }
function exercise28(){ */
    var students = [
        {
            id: "T3HXX1",
            firstName: "NgAN",
            lastName: "Duong Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Do Nguyen Nhat"
        }
    ]
    var results = students.filter(student => student.lastName.split(" ")[0] === "Do");
    console.log(results);
    
/* }
function exercise29(){ */
    students = [
        {
            id: "T3HXX1",
            firstName: "Ngan",
            lastName: "Duong Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Nguyen Nhat"
        }
    ]
    var result = students.sort((a,b) =>{
        var firstNameA = a.firstName.toUpperCase()
        var firstNameB = b.firstName.toUpperCase()
        if (firstNameA < firstNameB) {
            return -1
        }
        if (firstNameA > firstNameB) {
            return 1
        }
        else {
            return 0
        }
    })
    console.log(result)        
/* }
function exercise30(){ */
    var array = [1,2,3,4,5,6,3,4,7,8,1,2,4,9]
    var array2 = [] 
    var maxNumber = Math.max( array)
    for( var i = 0; i < array.length; i++){ 
        if ( array[i] === maxNumber) {
          array2.push(array[i]); 
        }
        
    }
    var result = Math.max(array2)
    console.log(result)
/* }
function exercise31(){ */
    array = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
    k= 9
    function find3Numbers(arr,k) {
        for(var i = 0; i < arr.length - 2; i++)
        {
            for(var j = i+1; j < arr.length - 1; j++)
            {
                for(var k = j+1; k < arr.length; k++)
                {
                    if( arr[i] + arr[j] + arr[k] == k){
                        return 'Yes'
                        break;
                    }
                }
            }
        }
        return 'No'
        
    }
    console.log(find3Numbers(array,k))
/* }
function exercise32(){ */
    var array = [3,1,4,6,8,5]
    var k = 7
    
    var addNumber = (newArray,k) => {
        newArray.push(k);
    return newArray.sort((a, b) => a - b
        
    )
    }
    console.log(addNumber(array,k))
    
//}