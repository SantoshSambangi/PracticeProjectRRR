import React from 'react'

const GooglePractice = () => {
    // var str= 'Santosh'
    // for(var i=0; i< str.length; i++){
    // console.log(str.charAt(i));
    // }


    // var str = "Hello world"
		// function getStr(str) {
		// 	return str.split('')
		// 	.map(item => item)
		// 	.join('')
		// }
		
		// console.log(getStr(str));	

    //     console.log(typeof(Array))
    //     console.log(typeof(null))
    //     console.log(typeof(undefined))
    //     console.log(typeof(object))

    //     console.log(typeof([]))
    //      console.log(typeof({}))


         
         //console.log(reverse('santosh'))

         

         var arr = ['htlm' ,'css' ,'react' ,'java' ,'python' , 'angular', 'veujs']

        console.log(arr.sort().reverse())

        var ages = [23,13,2,5,6,79,45,65,76,89];
        console.log(ages.sort((a,b) => {
              return(a-b)
        }))

        

        console.log(ages[ages.length-1])
        console.log(ages[0])

        console.log(Math.max(...ages))
        console.log(Math.min(...ages))

        console.log(Math.max.apply(null,ages))
        console.log(Math.min.apply(null,ages))
        

        // var x = ages.sort((start,end)=>{
        //   return Math.random();
        // })

        // console.log(x)

        var arr1 = ['htlm' ,'css' ,'react' ,'java' ,'python' , 'angular', 'veujs']
        console.log(arr1.sort().reverse())


        let pi = Math.PI;
        console.log(pi.toFixed(2))
        console.log(pi.toPrecision(4))

        console.log(Math.sqrt(49))
        console.log(Math.pow(2,10))
        console.log(Math.sqrt(638))
        console.log(Math.sqrt(638).toFixed(2))
        console.log(Math.sqrt(638).toPrecision(3))
        console.log(Math.sqrt(699).toPrecision(2))




  return (
    <div>

     

    
        
    </div>
  )
}

export default GooglePractice;