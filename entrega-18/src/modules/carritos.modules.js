import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        ref: 'usuarios'
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    productos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'productos'
        }
    ]
});

export const CarritosModel = mongoose.model("carritos", Schema);