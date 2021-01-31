async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  let rides = json

  // 🔥 start here: write code to loop through the rides

  for(let i = 0; i < rides.length; i++){
    let ride = rides[i]
      for(let i = 0; i < ride.length; i++){
        if (ride.length > 1) {
          levelOfService = 'Noober Pool'
        } else if (ride[0].purpleRequested) {
          levelOfService = 'Noober Purple'
        } else if (ride[0].numberOfPassengers > 3) {
          levelOfService = 'Noober XL'
        } else {
          levelOfService = 'Noober X'
        }  
        passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
        passenger1Phone = ride[0].passengerDetails.phoneNumber
        passenger1NumberOfPassengers = ride[0].numberOfPassengers
        passenger1PickupAddressLine1 = ride[0].pickupLocation.address
        passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
        passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
        passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`
        // console.log(passenger1Name)
        // console.log(passenger1Phone)
        // console.log(passenger1NumberOfPassengers)
        // console.log(passenger1PickupAddressLine1)
        // console.log(passenger1PickupAddressLine2)
        // console.log(passenger1DropoffAddressLine1)
        // console.log(passenger1DropoffAddressLine2)
      
        if (ride.length > 1) {
          passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`
          passenger2Phone = ride[1].passengerDetails.phoneNumber
          passenger2NumberOfPassengers = ride[1].numberOfPassengers
          passenger2PickupAddressLine1 = ride[1].pickupLocation.address
          passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}`
          passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
          passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}`
        // console.log(passenger2Name)
        // console.log(passenger2Phone)
        // console.log(passenger2NumberOfPassengers)
        // console.log(passenger2PickupAddressLine2)
        // console.log(passenger2PickupAddressLine2)
        // console.log(passenger2DropoffAddressLine2)
        // console.log(passenger2DropoffAddressLine2)
      
        }
        if (ride.length > 2) {
          passenger3Name = `${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}`
          passenger3Phone = ride[2].passengerDetails.phoneNumber
          passenger3NumberOfPassengers = ride[2].numberOfPassengers
          passenger3PickupAddressLine1 = ride[2].pickupLocation.address
          passenger3PickupAddressLine2 = `${ride[2].pickupLocation.city}, ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}`
          passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address
          passenger3DropoffAddressLine2 = `${ride[2].dropoffLocation.city}, ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}`
        // console.log(passenger3Name)
        // console.log(passenger3Phone)
        // console.log(passenger3NumberOfPassengers)
        // console.log(passenger3PickupAddressLine3)
        // console.log(passenger3PickupAddressLine2)
        // console.log(passenger3DropoffAddressLine3)
        // console.log(passenger3DropoffAddressLine2)
        }}

    


 




//   let rides = json

//   for(let i = 0; i < rides.length; i++){
//     let ride = rides[i]

//     // let element = document.querySelector('.rides')
//     // element.insertAdjacentHTML('beforeend',renderProduct(ride)) 
//   }

      }}
window.addEventListener('DOMContentLoaded', pageLoaded)

