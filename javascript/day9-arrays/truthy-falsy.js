/*
falsy values - false, 0 , '' , undefined , null ,NaN 
truthy values - true, 1 , -1 , [] , {}, ['dct'] , { name: 'arjun'}
*/

const values = [false, true, 0,1,-1, undefined, null, NaN,'', [] , {}, ['dct'] , { name: 'arjun'}]
for (let ele of values){
    if(ele){
        console.log(ele,' truthy')
    } else{
        console.log(ele,' falsy')
    }
}
/*
false  falsy
true  truthy
0  falsy
1  truthy
-1  truthy
undefined  falsy
null  falsy
NaN  falsy
''  falsy
[]  truthy
{}  truthy
[ 'dct' ]  truthy
{ name: 'arjun' }  truthy
*/