// users info
function apiCall1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const users = [
        { id: 1, name: 'arjun' },
        { id: 2, name: 'gokul' },
      ]
      resolve(users)
    }, 3000)
  })
}

// function apiCall1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       reject('Some Error !!!')
//     }, 3000)
//   })
// }

// system info
function apiCall2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const systems = [
        { id: 1, type: 'mac' },
        { id: 2, type: 'windows' },
      ]
      resolve(systems)
    }, 1000)
  })
}

Promise.all([apiCall1(),apiCall2()])
    .then(function(values){
        const [api1,api2] = values
        console.log('api 1 values', api1)
        console.log('api 2 values', api2)
    })
    .catch(function(err){
        console.log(err)
    })

// *** OUTPUTS

// api 1 values [ { id: 1, name: 'arjun' }, { id: 2, name: 'gokul' } ]
// api 2 values [ { id: 1, type: 'mac' }, { id: 2, type: 'windows' } ]

// Some Error !!! --> if one api call rejects, and no output is shown