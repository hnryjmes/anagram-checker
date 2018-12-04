module.exports = {
    "env": {
        "jasmine": true, 
        "node": true
    },
    "extends": [
        "airbnb-base", 
        "eslint:recommended", 
        "plugin:jasmine/recommended", 
        "plugin:node/recommended"
    ],
    "plugins": [
        "jasmine"
    ],
    "rules": {
        "no-underscore-dangle": [
            "error", { 
                "allowAfterThis": true 
            }
        ]
    }
};