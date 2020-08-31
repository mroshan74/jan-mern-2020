const map = {
    destination_addresses: ["Hubli, Karnataka, India"],
    origin_addresses: ["Bengaluru, Karnataka, India"],
    rows: [
        {
        elements: [
            {
            distance: {
                text: "414 km",
                value: 414197
            },
            duration: {
                text: "7 hours 33 mins",
                value: 27164
            },
            duration_in_traffic: {
                text: "7 hours 35 mins",
                value: 27321
            },
            status: "OK"
            }
        ]
        }
    ],
    status: "OK"
}
let destination = map.destination_addresses[0].split(', ')[0]
    begin = map.origin_addresses[0].split(', ')[0]
    distance = map.rows[0].elements[0].distance.text
    duration = map.rows[0].elements[0].duration.text
console.log(`The distance from ${begin} to ${destination} is ${distance} and time taken is ${duration}`)