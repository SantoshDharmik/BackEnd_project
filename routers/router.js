import express from "express"

import { getDetails, getFilterData, postAddCollege, deleteCollegeByName,updateCollegeByName,patchCollegeByName} from "../controllers/controller.js"

import { getAllColleges, getRandomCollege ,getCollegeName,getCollegeInstitudeCode,getCollegesBasedOnFoundedRange } from "../controllers/controller.js"

let router = express.Router()

//it's helps to filtering the clg 
router.get("/get-details", getDetails)

// GET Method router for all college
router.get("/all",getAllColleges)

// GET Method router for random college
router.get("/randomCollege", getRandomCollege)

// GET Method router for filtering the collge
router.get("/filter", getFilterData)

// GET Method router for college institude_code
router.get("/collegeCode/:institude_Code",getCollegeInstitudeCode)

// GET Method router for college name
router.get("/collegeName/:name", getCollegeName)

// GET Method router for college founded year or range in year
router.get("/collegeFounded/:start/:end", getCollegesBasedOnFoundedRange)

//POST Method router for adding new collge
router.post("/add-college",postAddCollege)

//DELETE Method router for Deleting the collge
router.delete("/delete-college/:name",deleteCollegeByName)

//PUT Method router for Replace the whole college object by NAME
router.put("/put-college/:name",updateCollegeByName)

// PATCH method Update only specific fields of college by using NAME
router.patch("/patch-college/:name",patchCollegeByName)

export {router}