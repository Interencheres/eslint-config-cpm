module.exports = {
    "root": true,
    "env": {
        "es2020": true,
        "node": true,
    },
    "extends": ['eslint:recommended'],
    "overrides": [
        {
            "files": ["*.spec.js"],
            "env": {
                "jest": true
            },
            "rules": {
                "no-magic-numbers": "off",
            },
        }
    ],
    "rules": {
        "no-magic-numbers": ["error", { ignore: [0, 1] }],
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "array-bracket-spacing": [
            "error",
            "never",
            {
                "singleValue": true
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "no-extra-parens": [
            "error"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxBOF": 0,
                "maxEOF": 0
            }
        ],
        "one-var": [
            "error",
            "never"
        ],
        "max-len": [
            "error",
            120,
            {
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "max-depth": [
            "error",
            3
        ],
        "max-statements-per-line": [
            "error",
            { "max": 1 }
        ],
        "max-statements": [
            "error",
            30
        ],
        "max-params": [
            "error",
            6
        ],
        "complexity": [
            "error",
            10
        ],
        "no-plusplus": [
            "error",
            { "allowForLoopAfterthoughts": true }
        ],
        "camelcase": [
            "error",
            { "properties": "never"}
        ],
        "prefer-const": "error",
        "no-var": "error",
        "arrow-spacing": "error",
        "space-infix-ops": "error",
        "strict": "error",
        "no-bitwise": "error",
        "operator-linebreak": "error",
        "no-new": "error",
        "curly": "error",
        "no-eval": "error",
        "no-eq-null": "error",
        "vars-on-top": "error",
        "prefer-template": "error",
        "no-useless-concat": "error",
        "space-before-function-paren": "error",
        "default-case": "error",
        "no-trailing-spaces": "error",
        "no-multi-spaces": "error",
        "spaced-comment": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
        "block-spacing": "error",
        "brace-style": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "no-nested-ternary": "error",
        "dot-notation": "error",
        "prefer-arrow-callback": "error",
        "guard-for-in": "error",
        "no-whitespace-before-property": "error",
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "ignoreRestSiblings": true }],
        "no-return-await": "error",
        "no-console": "error",
        "no-shadow": "error",
        "func-call-spacing": "error",
        "object-curly-newline": ["error", {
            "ObjectExpression": { "minProperties": 4, "multiline": true, "consistent": true },
            "ObjectPattern": { "minProperties": 4, "multiline": true, "consistent": true },
            "ImportDeclaration": { "minProperties": 4, "multiline": true, "consistent": true },
            "ExportDeclaration": { "minProperties": 4, "multiline": true, "consistent": true },
        }],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "space-before-blocks": "error"
    }
}
