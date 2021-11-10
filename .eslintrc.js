module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Especifica o analisador ESLint
    parserOptions: {
        ecmaVersion: 2020, // Permite a análise de recursos modernos do ECMAScript
        sourceType: 'module', // Permite o uso de imports
    },
    env: {
        es6: true,
        node: true,
    },
    plugins: [
        '@typescript-eslint',
        // 'prettier'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
        'no-unused-vars': 'warn',
        'no-unused-expressions': 'off',
        'func-names': 'off',
        'no-restricted-globals': 'off',
        'no-param-reassign': 'off',
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'space-before-blocks': 'error',
        'no-multiple-empty-lines': ['error', {
            'max': 1,
            'maxEOF': 0
        }],
        'comma-spacing': ['error', {
            'before': false,
            'after': true
        }],
        // 'array-bracket-spacing': ['error', 'never'],
        // 'semi': ['error', 'always'],
        // 'max-len': ['error', {
        //     'code': 90,
        // }],
        'object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'always',
            'asyncArrow': 'always'
        }],
        'key-spacing': ['error', {
            'beforeColon': false,
            'afterColon': true,
            'mode': 'strict',
        }],
        'spaced-comment': ['error', 'always', {
            'line': {
                'markers': ['/'],
                'exceptions': ['-', '+']
            },
            'block': {
                'markers': ['!'],
                'exceptions': ['*'],
                'balanced': true
            }
        }],
    },
    // settings: {
    //     'import/resolver': {
    //         'node': {
    //             'extensions': ['.js', '.jsx', '.ts', '.tsx'],
    //             'moduleDirectory': ['node_modules', 'src/']
    //         }
    //     }
    // }
};