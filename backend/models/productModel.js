const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter your description"]
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [8, 'Price cannot exceed 8 characters'] 
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: { 
            type: String,
            required: true
        }
    }

    ],
    category: {
        type: String,
        required: [true, "Please enter a category"]
    },
    Stock: {
        type: Number,
        required: [true, "Please enter stock"],
        maxlength: [4, "Can not exceed 4 characters"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }
    ]
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);