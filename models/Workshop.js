import conn from "../config/conn.js";

const Schema = conn.Schema; 

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialties: {
        type: String,
        required: true
    }
});

const Workshop = conn.model("Workshop", workshopSchema);

export default Workshop;