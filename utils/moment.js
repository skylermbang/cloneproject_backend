const moment = require("moment")


module.export = moment => {
    console.log("testing from moment")
    return moment().format("YYYY년 MM월 DD일 HH:mm:ss")

}
