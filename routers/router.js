import express from "express"

import { getDetails, getFilterData, postAddCollege, deleteCollegeByName } from "../controllers/controller.js"

import { getAllColleges, getRandomCollege ,getCollegeName} from "../controllers/controller.js"

let router = express.Router()

//it's helps to filtering the clg 
router.get("/get-details", getDetails)

// GET Method router for all college
router.get("/all",getAllColleges)

// GET Method router for random college
router.get("/randomCollege", getRandomCollege)

// GET Method router for filtering the collge
router.get("/filter", getFilterData)

// GET Method router for college name
router.get("/college/:name", getCollegeName)

//POST Method router for adding new collge
router.post("/add-college",postAddCollege)

//DELETE Method router for Deleting the collge
router.delete("/delete-college/:name",deleteCollegeByName)

export {router}