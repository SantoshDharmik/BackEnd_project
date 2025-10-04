import express from "express"

import { getDetails } from "../controllers/controller.js"

import { getAllColleges, getRandomCollege } from "../controllers/controller.js"

let router = express.Router()

// GET Method router
router.get("/all",getAllColleges)

//it's helps to filtering the clg 
router.get("/get-details", getDetails)

router.get("/randomCollege", getRandomCollege)

export {router}