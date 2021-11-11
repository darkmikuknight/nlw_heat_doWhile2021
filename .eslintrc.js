module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Especifica o analisador ESLint
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module' // Permite o uso de imports
    },
    env: {
        es6: true,
        node: true
    },
    plugins: [
        '@typescript-eslint'
        // 'prettier'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:react/recommended',
        // 'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    rules: {
        // 'prettier/prettier': ['error'],
        'no-constant-condition': 'error',
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
        'comma-dangle': ['error', 'never'],
        'eqeqeq': ['error', 'always'],
        'linebreak-style': ['error', 'unix'],
        'no-unexpected-multiline': 'error',
        'no-mixed-operators': 'error',
        'no-unused-vars': 'warn',
        'no-unused-expressions': 'off',
        'func-names': 'off',
        'no-restricted-globals': 'off',
        'no-param-reassign': 'off',
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'space-before-blocks': 'error',
        'dot-notation': 'error',
        'no-undef': 'error',
        'prefer-const': 'error',
        'no-plusplus': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 0
            }
        ],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'max-len': [2, {
            code: 100
        }],
        // 'max-len': ['error', { 'code': 80, 'ignoreUrls': true }],
        // 'array-bracket-spacing': ['error', 'never'],
        // 'semi': ['error', 'always'],
        // 'operator-linebreak': ['error', 'after']
        'object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'always',
                asyncArrow: 'always'
            }
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    markers: ['/'],
                    exceptions: ['-', '+']
                },
                block: {
                    markers: ['!'],
                    exceptions: ['*'],
                    balanced: true
                }
            }
        ],
        'object-curly-newline': ['error', {
            'ObjectExpression': 'always',
            'ObjectPattern': {
                'multiline': true, 'minProperties': 3
            },
            'ImportDeclaration': 'never',
            'ExportDeclaration': {
                'multiline': true, 'minProperties': 3
            }
        }],
        'nonblock-statement-body-position': ['error', 'below'],
        'no-else-return': 'error',
        'eol-last': ['error', 'always'],
        'no-extra-parens': ['error', 'all', {
            'conditionalAssign': false,
            'returnAssign': false,
            'ignoreJSX': 'multi-line'
        }]
        // "react-hooks/rules-of-hooks": "error",
        "import/prefer-default-export": "off",
        // "react/jsx-filename-extension": [1, { "extensions": [".js", ".ts", ".jsx", ".tsx"] }],
        // "react/jsx-indent": ["off", 4],
        // "react/jsx-indent-props": ["off"],

    }
    // settings: {
    //     'import/resolver': {
    //         'node': {
    //             'extensions': ['.js', '.jsx', '.ts', '.tsx'],
    //             'moduleDirectory': ['node_modules', 'src/']
    //         }
    //     }
    // }
};
