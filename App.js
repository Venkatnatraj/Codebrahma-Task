let arr = [1,2,3,4];
                arr.forEach((new_arr)=>{
                    for(let i=0 ; i < arr.length ; i++){
                if(new_arr - arr[i] == 1){
                    var myMap = new Map();
                    myMap.set(new_arr,arr[i]);
                        myMap.forEach((natraj)=>{
                            console.log(`(${new_arr},${natraj}),`)
                        })
                }
            }
                })