import { colleges } from "../data/colleges.js"
//these code for api conncetion which is present in the folder,that is data.

// we are writing getdetails for to better understand for filtering the data 
let getDetails = (req, res) => {
    res.status(200).json({
        message: "Welcome to College Filtering API, you can search/query for engineering colleges in Nagpur region based on courses, NIRF ranking, college status, and location. You can also search for a particular college based on its name or filter colleges offering specific branches like Computer Science, Mechanical, AI/ML, etc.",

        routes: [
            // it's shows all colleges data which is present in the datase 
            {
                method: "GET",
                address: "localhost/colleges/api/all",
                expectedResult: "Array"
            },
            {
                method: "GET",
                address: "localhost/colleges/api/randomCollege",
                expectedResult: "Array"
            }
        ]
    })
}

// (GET method)
// these data is for filter the college
const getFilterData = (req,res) => {
    try {
         
        let { courses,duration,status } = req.query

        let usercourse = courses

        let resultArray = colleges 
        //starts as the full languages array

        let queryType = ""  //empty

        if (!courses && !duration && !status) throw ("Filter is invalid !")

// [courses part]  //if courses is exists in the query 
        if (courses) {
            resultArray = resultArray.filter(college => {
                return college.courses.some(element => element.toLowerCase().includes(usercourse.toLowerCase().trim()))
            })
            queryType += "/courses"
        }    


// [duration part]  //if duration exists in the query 
         if (duration) {
            resultArray = resultArray.filter(college => {
                return Number(college.duration) === Number(duration)
            })
            queryType += "/duration"
         } 

// [status part]  //if duration exists in the query 
        if (status) { 
            resultArray = resultArray.filter((college) => {
                return college.status.toLowerCase() == status.toLowerCase().trim()
            })

            queryType += "/status"

        }



        if (resultArray.length == 0) throw (`unable to find colleges based on ${queryType}`)

        // Send success response
        res.status(200).json({
            message: `got result based on ${queryType}`,
            resultCount: resultArray.length,
            results: resultArray
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: "unable to get data based on filter !",
            err,
             possibleFilters: ["?courses","?duration"]
        })

    }
}


// (GET method)
// these is for all colleges dada 
const getAllColleges = (req,res) => {
    res.status(200).json({ message: `All the colleges within the dataset are`, colleges })
}

// (GET method)
// it's used to get any random college
const getRandomCollege = (req,res) => {

    // console.log("Total colleges:", colleges.length);
    // console.log("First college:", colleges[0]);

    let randomIndex = Math.floor(Math.random()* colleges.length);

    let result = colleges[randomIndex];

    console.log("Random index:", randomIndex); //it's used for showing the actual index of data which is appear randomly

    res.status(200).json({ message : "Random college you were requesting is ", result})

}

// export in GET method
export {getDetails,getAllColleges,getRandomCollege,getFilterData}

// export in POST method

// export in DELETE method
