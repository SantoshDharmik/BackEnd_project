import mongoose, {mongo} from "mongoose"

let collegesSchema = mongoose.Schema({
    institute_Code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    courses: {
        type: [String],
        required: true,
        default: []
    },
    status: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true,
        default: '4'
    },
    city: {
        type: String,
        required: true
    },
    founded: {
        type: String,
        required: true
    },
    NIRF_ranking: {
        type: String,
        required: true
    },
    fees_per_year: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

})

let collegesModel = new
mongoose.model("colleges",collegesSchema)

export {collegesModel}