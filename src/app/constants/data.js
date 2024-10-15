const products = [
    {
        id: 1,
        title: "Party Cups",
        price: 12.99,
        availability: "Available",
        image: '/party_cups.jpg',
        description: "Bright and durable party cups, perfect for any occasion."
    },
    {
        id: 2,
        title: "Headphones",
        price: 119.99,
        availability: "Available",
        image: '/headphones.jpg',
        description: "High-quality over-ear headphones with noise cancellation."
    },
    {
        id: 3,
        title: "Wireless Mouse",
        price: 25.50,
        availability: "Available",
        image: '/wireless_mouse.jpg',
        description: "Ergonomic wireless mouse with fast, responsive tracking."
    },
    {
        id: 4,
        title: "Bluetooth Speaker",
        price: 45.00,
        availability: "Out of Stock",
        image: '/bluetooth_speaker.jpg',
        description: "Portable Bluetooth speaker with excellent sound quality."
    },
    {
        id: 5,
        title: "Yoga Mat",
        price: 30.75,
        availability: "Available",
        image: '/yoga_mat.jpg',
        description: "Non-slip yoga mat, perfect for all your stretching routines."
    },
    {
        id: 6,
        title: "Desk Lamp",
        price: 19.99,
        availability: "Available",
        image: '/desk_lamp.jpg',
        description: "Adjustable desk lamp with LED light for perfect workspace lighting."
    },
    {
        id: 7,
        title: "Water Bottle",
        price: 15.20,
        availability: "Available",
        image: '/water_bottle.jpg',
        description: "Stainless steel water bottle to keep your drinks cold or hot."
    },
    {
        id: 8,
        title: "Backpack",
        price: 49.99,
        availability: "Available",
        image: '/backpack.jpg',
        description: "Stylish and durable backpack with multiple compartments."
    },
    {
        id: 9,
        title: "Laptop Stand",
        price: 29.99,
        availability: "Out of Stock",
        image: '/laptop_stand.jpg',
        description: "Portable laptop stand, designed to improve ergonomics."
    },
    {
        id: 10,
        title: "Sunglasses",
        price: 85.50,
        availability: "Available",
        image: '/sunglasses.jpg',
        description: "Fashionable polarized sunglasses, offering UV protection."
    },
    {
        id: 11,
        title: "Coffee Maker",
        price: 79.99,
        availability: "Available",
        image: '/coffee_maker.jpg',
        description: "Efficient coffee maker with programmable features for fresh brews."
    },
    {
        id: 12,
        title: "Portable Charger",
        price: 39.99,
        availability: "Available",
        image: '/portable_charger.jpg',
        description: "Compact portable charger to keep your devices powered on the go."
    },
    {
        id: 13,
        title: "Fitness Tracker",
        price: 99.99,
        availability: "Out of Stock",
        image: '/fitness_tracker.jpg',
        description: "Track your fitness goals with this sleek and easy-to-use fitness tracker."
    },
    {
        id: 14,
        title: "Smart Watch",
        price: 199.99,
        availability: "Available",
        image: '/smart_watch.jpg',
        description: "Advanced smart watch with fitness tracking and notifications."
    },
    {
        id: 15,
        title: "Electric Kettle",
        price: 24.99,
        availability: "Available",
        image: '/electric_kettle.jpg',
        description: "Fast-heating electric kettle with auto-shutoff for safety."
    }
];

const featured = [
    {
        id: 13,
        title: "Fitness Tracker",
        price: 99.99,
        availability: "Out of Stock",
        image: '/fitness_tracker.jpg',
        imageAlt: '/fitness_tracker-alt.jpg',
        description: "Track your fitness goals with this sleek and easy-to-use fitness tracker."
    },
    {
        id: 7,
        title: "Water Bottle",
        price: 15.20,
        availability: "Available",
        image: '/water_bottle.jpg',
        imageAlt: '/water_bottle-alt.jpg',
        description: "Stainless steel water bottle to keep your drinks cold or hot."
    },
    {
        id: 4,
        title: "Bluetooth Speaker",
        price: 45.00,
        availability: "Out of Stock",
        image: '/bluetooth_speaker.jpg',
        imageAlt: '/bluetooth_speaker-alt.jpg',
        description: "Portable Bluetooth speaker with excellent sound quality."
    },
    {
        id: 2,
        title: "Headphones",
        price: 119.99,
        availability: "Available",
        image: '/headphones.jpg',
        imageAlt: '/headphones-alt.jpg',
        description: "High-quality over-ear headphones with noise cancellation."
    },
]

const newProducts = [
    {
        id: 15,
        title: "Electric Kettle",
        price: 24.99,
        availability: "Available",
        image: '/electric_kettle.jpg',
        description: "Fast-heating electric kettle with auto-shutoff for safety."
    },
    {
        id: 12,
        title: "Portable Charger",
        price: 39.99,
        availability: "Available",
        image: '/portable_charger.jpg',
        description: "Compact portable charger to keep your devices powered on the go."
    },
    {
        id: 9,
        title: "Laptop Stand",
        price: 29.99,
        availability: "Out of Stock",
        image: '/laptop_stand.jpg',
        description: "Portable laptop stand, designed to improve ergonomics."
    },
    {
        id: 5,
        title: "Yoga Mat",
        price: 30.75,
        availability: "Available",
        image: '/yoga_mat.jpg',
        description: "Non-slip yoga mat, perfect for all your stretching routines."
    },
]

export { products, featured, newProducts }
