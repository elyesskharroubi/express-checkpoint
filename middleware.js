//importing stuff
const express = require('express')
const time = new Date()
const hours = time.getHours()
const days = time.getDay()

// actual middleware function

const checkDateTime = (req, res, next) => {
    if(days >= 1 && days<6 && hours > 9 && hours < 17){
        console.log('You are good to go.')
        next()
    } else {
        console.log('We are not available, please check again another time.')
        res.send(
            `<h1 style="text-align:center; color: darkblue"> Oops! We are not available right now.</h1>
            <p style="text-align:center;">Please try again from Monday to Friday on business hours.</p>`
        )
    }
}

module.exports = checkDateTime;