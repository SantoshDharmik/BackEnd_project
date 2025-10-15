import  colleges  from "../data/colleges.js"
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
            },
            {
                method: "GET",
                address: "localhost/colleges/api/filter?scope=value",
                expectedResult: "Array/Null",
                queryOptions: [
                    "courses", "duration[in years]", "status", "city"
                ],
                possibleCourses: ["Computer Science",
                    "Mechanical", "Electrical", "Civil", "Electronics", "Chemical", "Metallurgy", "IT", "AI/ML", "Data Science", "Chemical Technology", "Oil Technology", "Food Technology", "Information Technology", "Electronics & Telecommunication", "Artificial Intelligence & Data Science"
                ]

            },
            {
                method: "GET",
                address: "localhost/colleges/api/collegeName",
                expectedResult: "Array"
            },
             {
                method: "GET",
                address: "localhost/colleges/api/collegeCode",
                expectedResult: "Array"
            },
            {
                method: "POST",
                address: "localhost/colleges/api/add-college",
                expectedResult: "Array[add  a new college]"
            },
            {
                method: "Delete",
                address: "localhost/colleges/api/delete-college/:name",
                expectedResult: "delete a college"
            },
            {
                method: "Put",
                address: "localhost/colleges/api/put-college/:name",
                expectedResult: "PUT is replece the hole dta which is given by admin (Replace hole data)"
            },
            {
                method: "Patch",
                address: "localhost/colleges/api/patch-college/:name",
                expectedResult: "PATCH is chnaging some data which is given by admin (Modify some data)"
            },

        ]
    })
}

// (GET method)
// these data is for filter the college
const getFilterData = (req, res) => {
    try {

        let { courses, duration, status, city } = req.query

        let usercourse = courses

        let resultArray = colleges
        //starts as the full languages array

        let queryType = ""  //empty

        if (!courses && !duration && !status && !city) throw ("Filter is invalid !")

        // [courses part]  //if courses is exists in the query 
        if (courses) {
            resultArray = resultArray.filter(college => {
                return college.courses.some(element => element.toLowerCase().includes(usercourse.toLowerCase().trim()))
            })
            queryType += "/courses"
        }

         // [City part]  //if city is exists in the query 
        if (city) {
            resultArray = resultArray.filter((college) => {
                return college.city.toLowerCase() == city.toLowerCase().trim()
            })

            queryType += "/city"
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
            possibleFilters: ["?courses", "?duration", "?status", "?NIRF_ranking"]
        })

    }
}


// (GET method)
// these is for all colleges dada 
const getAllColleges = (req, res) => {
    try {
        const resultArray = colleges; // store data we are use for count all colleges

        res.status(200).json({
            message: `All the colleges within the dataset are`, 
        resultCount: resultArray.length,
        results: resultArray
        })
        

    }catch(err) {
        res.status(500).json({ message: "Something went wrong!", err });
    }
}

// (GET method)
// it's used to get any random college
const getRandomCollege = (req, res) => {

    // console.log("Total colleges:", colleges.length);
    // console.log("First college:", colleges[0]);

    let randomIndex = Math.floor(Math.random() * colleges.length);

    let result = colleges[randomIndex];

    console.log("Random index:", randomIndex); //it's used for showing the actual index of data which is appear randomly

    res.status(200).json({ message: "Random college you were requesting is ", result })

}

// (GET method)
// it's used to find college by using college institude code
const getCollegeInstitudeCode = (req,res) => {
    try {
        let {institude_Code} = req.params
        console.log(institude_Code)

        if (!institude_Code) throw("Invalid Institude_Code !")

            let result = colleges.filter((colleges) => {
                return colleges.institute_Code == institude_Code
            })

        if (result.length == 0) throw( `Unable to find colleges.institude_code ${institude_Code}`)    

        res.status(200).json({ message: `We have on institude_Code ${institude_Code} !`, result: result[0]})    

    } catch(error) {
        console.log(error)
        res.status(400).json({ message: `unable to get data based on institude code ! `, error})

    }
}

// (GET method)
// it's used to find college by using college name
const getCollegeName = (req, res) => {
    try {

        const { name } = req.params; // name comes from URL
        console.log(name);

        if (!name) throw "invalid name! ";

        // Filter the colleges array by name (case-insensitive)
        let college = colleges.find(
            (c) => c.name.toLowerCase().trim() === name.toLowerCase().trim());

        if (!college) throw `College with name "${name}" not found!`;

        res.status(200).json({
            message: `College found!`,
            result: college
        });

    } catch (err) {
        res.status(400).json({ message: "Error fetching college by name", err });
    }
}

// (GET method)
// this is for filtering colleges by founded year range (using path params)

const getCollegesBasedOnFoundedRange = (req,res) => {
    try {
        let {start, end} = req.params 
        console.log(`Founded range: ${start} - ${end}`)

        //validation as our own choice
        if (!start) throw ("Please provide at least one year!")

        // convert string to number
        start = Number(start) //for start
        end = end ? Number(end) : start;    // if end not given,then start as same

        // check for invalid number
        if (isNaN(start) || isNaN(end)) throw ("Founded year(s) must be valid numbers!")

        // filter by range
        let result = colleges.filter((college) => {
            let foundedYear = Number(college.founded);
            return foundedYear >= start && foundedYear <= end;});    

        if (result.length === 0) throw (`No colleges founded between ${start} and ${end}!`);    

        res.status(200).json({
            message: `Colleges founded between ${start} and ${end}`,
            total: result.length,
            result
        });

    } catch (error) {
        res.status(400).json({
            message: "Unable to get data based on founded year range!",
            err
        });
    }
}




// export in GET method
export { getDetails }

// export in GET method
export { getAllColleges, getRandomCollege, getFilterData, getCollegeInstitudeCode, getCollegeName,getCollegesBasedOnFoundedRange }

// (post method)
// we can add data from post method
const postAddCollege = (req, res) => {
    try {
        let { name, courses, duration, fees_per_year, address, status, NIRF_ranking } = req.body

        //scope has to be in array
        if (!name || !courses || !duration || !fees_per_year || !address || !status || !NIRF_ranking) throw ("invalid?incomplete data!")

        // chech the courses is an array or not

        if (!Array.isArray(courses)) throw ("invalid data courses hass to be an array")

        let newCollege = { name, courses, duration, fees_per_year, address, status, NIRF_ranking }

        colleges.push(newCollege)

        res.status(202).json({
            message: `New college ${newCollege.name} addedd successfully !`
        })

    } catch (err) {
        console.log('err while adding n new languages !', err)
        res.status(400).json({ message: `unable to new language !`, err })
    }
}
// export in POST method
export { postAddCollege }

// (DELETE method)
// we can delete data from Delete method
const deleteCollegeByName = (req,res) => {
    try {
        let {name} = req.params;

        let index = colleges.findIndex(
            (c) => c.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
        ); 

        if (index === -1) throw(`College with name "${name}" not found!`);

        let deleted = colleges.splice(index, 1);

         res.status(200).json({
            message: `College with name "${name}" deleted successfully!`,
            deleted: deleted[0]
        });
    } catch (err) {
        res.status(400).json({ 
            message: "Unable to delete college", 
            error: err 
        });
    }
}
// export in DELETE method
export { deleteCollegeByName }

// (PUT method)
// Replace the whole college object by NAME
const updateCollegeByName = (req, res) => {
    try {
        const { name } = req.params; 
        // college name from URL
        const newCollegeData = req.body; 
        // new college data from request body

        // Find index of college by name
        let index = colleges.findIndex(
            (c) => c.name.toLowerCase().trim() === name.toLowerCase().trim()
        );

        if (index === -1) throw `College with name "${name}" not found!`;

        // Replace the old college data with new one
        colleges[index] = { ...newCollegeData };

        res.status(200).json({
            message: `College "${name}" updated successfully!`,
            result: colleges[index]
        });

    } catch (err) {
        res.status(400).json({ message: "Error updating college", err });
    }
};

// export in PUT method
export {updateCollegeByName}


// (PATCH method)
// Update only specific fields of college by NAME
const patchCollegeByName = (req, res) => {
    try {
        const { name } = req.params; 
        // college name from URL
        const updates = req.body;    
        // only fields to update

        // Find the college
        let college = colleges.find(
            (c) => c.name.toLowerCase().trim() === name.toLowerCase().trim()
        );

        if (!college) throw `College with name "${name}" not found!`;

        // Update only provided fields
        Object.assign(college, updates);

        res.status(200).json({
            message: `College "${name}" patched successfully!`,
            result: college
        });

    } catch (err) {
        res.status(400).json({ message: "Error patching college", err });
    }
};
// export in PUT method
export {patchCollegeByName}
