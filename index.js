const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    plugins: [
        'import',
        'promise',
        'react',
        'unicorn',
    ],
    settings: {
        'import/extensions': [
            '.js',
            '.jsx',
        ],
    },
    rules: {
        'accessor-pairs': 'off',
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'array-callback-return': ['error', {
            allowImplicit: true,
        }],
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': ['error', 'as-needed', {
            requireReturnForObjectLiteral: false,
        }],
        'arrow-parens': ['error', 'as-needed', {
            requireForBlockBody: true,
        }],
        'arrow-spacing': ['error', {
            before: true,
            after: true,
        }],
        'block-scoped-var': 'error',
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: true,
        }],
        'callback-return': 'off',
        camelcase: ['error', {
            ignoreDestructuring: false,
            properties: 'always',
            allow: [
                '^UNSAFE_',
            ],
        }],
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
        }],
        'comma-spacing': ['error', {
            before: false,
            after: true,
        }],
        'comma-style': ['error', 'last'],
        complexity: 'off',
        'computed-property-spacing': ['error', 'never'],
        'consistent-return': ['warn', {
            treatUndefinedAsUnspecified: false,
        }],
        'consistent-this': 'off',
        'constructor-super': 'error',
        curly: ['error', 'all'],
        'default-case': ['error', {
            commentPattern: '^no default$',
        }],
        'dot-location': ['error', 'property'],
        'dot-notation': ['error', {
            allowKeywords: true,
        }],
        'eol-last': ['error', 'always'],
        eqeqeq: ['error', 'always', {
            null: 'ignore',
        }],
        'for-direction': 'error',
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': ['error', 'always', {
            considerPropertyDescriptor: true,
            includeCommonJSModuleExports: false,
        }],
        'func-names': ['error', 'always'],
        'func-style': ['error', 'declaration'],
        'function-paren-newline': ['error', 'multiline'],
        'generator-star-spacing': ['error', {
            before: false,
            after: true,
        }],
        'getter-return': ['error', {
            allowImplicit: false,
        }],
        'global-require': 'error',
        'guard-for-in': 'error',
        'handle-callback-err': 'off',
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': ['error', 'beside'],
        indent: ['error', 4, {
            ArrayExpression: 1,
            CallExpression: {
                arguments: 1,
            },
            FunctionDeclaration: {
                body: 1,
                parameters: 1,
            },
            FunctionExpression: {
                body: 1,
                parameters: 1,
            },
            ImportDeclaration: 1,
            MemberExpression: 1,
            ObjectExpression: 1,
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: [],
        }],
        'init-declarations': 'off',
        'jsx-quotes': 'off',
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true,
        }],
        'line-comment-position': 'off',
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': ['error', {
            beforeBlockComment: true,
            afterBlockComment: false,
        }],
        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true,
        }],
        'max-classes-per-file': ['error', 1],
        'max-depth': 'off',
        'max-len': ['error', {
            code: 80,
            comments: 80,
            tabWidth: 4,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        }],
        'max-lines-per-function': 'off',
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements-per-line': 'off',
        'max-statements': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': 'off',
        'new-cap': ['error', {
            capIsNew: true,
            newIsCap: true,
            properties: false,
        }],
        'new-parens': 'error',
        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 4,
        }],
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'off',
        'no-bitwise': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-confusing-arrow': ['error', {
            allowParens: true,
        }],
        'no-console': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': ['error', {
            checkLoops: true,
        }],
        'no-continue': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'off',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'off', // import-plugin
        'no-else-return': ['error', {
            allowElseIf: false,
        }],
        'no-empty-character-class': 'error',
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ],
        }],
        'no-empty-pattern': 'error',
        'no-empty': ['error', {
            allowEmptyCatch: false,
        }],
        'no-eq-null': 'off',
        'no-eval': ['error', {
            allowIndirect: false,
        }],
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': ['error', 'all', {
            conditionalAssign: true,
            enforceForArrowConditionals: true,
            ignoreJSX: 'all',
            nestedBinaryExpressions: false,
            returnAssign: true,
        }],
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-misleading-character-class': 'off',
        'no-mixed-operators': ['error', {
            allowSamePrecedence: false,
        }],
        'no-mixed-requires': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-new': 'error',
        'no-obj-calls': 'error',
        'no-octal-escape': 'error',
        'no-octal': 'error',
        'no-param-reassign': ['error', {
            props: false,
        }],
        'no-path-concat': 'error',
        'no-plusplus': ['error', {
            allowForLoopAfterthoughts: true,
        }],
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-proto': 'error',
        'no-prototype-builtins': 'off',
        'no-redeclare': ['error', {
            builtinGlobals: true,
        }],
        'no-regex-spaces': 'error',
        'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),
        'no-restricted-imports': 'off', // import-plugin
        'no-restricted-modules': 'off',
        'no-restricted-properties': [
            'error',
            {
                object: 'global',
                property: 'isFinite',
                message: 'Use Number.isFinite instead',
            },
            {
                object: 'self',
                property: 'isFinite',
                message: 'Use Number.isFinite instead',
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Use Number.isFinite instead',
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Use Number.isNaN instead',
            },
            {
                object: 'self',
                property: 'isNaN',
                message: 'Use Number.isNaN instead',
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Use Number.isNaN instead',
            },
            {
                property: '__defineGetter__',
                message: 'Use Object.defineProperty instead.',
            },
            {
                property: '__defineSetter__',
                message: 'Use Object.defineProperty instead.',
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],
        'no-restricted-syntax': ['error', {
            selector: 'ForInStatement',
            message: 'Use Object.keys, Object.values or Object.entries instead.',
        }],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': ['error', {
            props: true,
        }],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-shadow': ['error', {
            builtinGlobals: true,
            allow: confusingBrowserGlobals,
        }],
        'no-sparse-arrays': 'error',
        'no-sync': 'off',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': ['error', {
            ignoreComments: false,
            skipBlankLines: false,
        }],
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-undefined': 'error',
        'no-underscore-dangle': ['error', {
            allowAfterSuper: false,
            allowAfterThis: false,
            enforceInMethodNames: true,
        }],
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'off',
        'no-unneeded-ternary': ['error', {
            defaultAssignment: true,
        }],
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': ['error', {
            classes: true,
            functions: true,
            variables: true,
        }],
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreExport: false,
            ignoreImport: false,
        }],
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'nonblock-statement-body-position': ['error', 'beside'],
        'object-curly-newline': ['error', {
            consistent: true,
        }],
        'object-curly-spacing': ['error', 'always', {
            arraysInObjects: true,
            objectsInObjects: true,
        }],
        'object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],
        'object-shorthand': ['error', 'always', {
            avoidQuotes: true,
            ignoreConstructors: false,
        }],
        'one-var-declaration-per-line': ['error', 'always'],
        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'before', {
            overrides: {
                '=': 'none',
            },
        }],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': 'off',
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],
        'prefer-const': ['error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed', {
            keywords: false,
            numbers: false,
            unnecessary: true,
        }],
        quotes: ['error', 'single', {
            avoidEscape: true,
        }],
        radix: ['error', 'always'],
        'require-atomic-updates': 'error',
        'require-await': 'off',
        'require-unicode-regexp': 'off',
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'semi-spacing': ['error', {
            before: false,
            after: true,
        }],
        'semi-style': ['error', 'last'],
        semi: ['error', 'always', {
            omitLastInOneLineBlock: true,
        }],
        'sort-imports': 'off', // import-plugin
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
        }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', {
            nonwords: false,
            words: true,
        }],
        'spaced-comment': ['error', 'always'],
        strict: ['error', 'global'],
        'switch-colon-spacing': ['error', {
            before: false,
            after: true,
        }],
        'symbol-description': 'error',
        'template-curly-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'use-isnan': 'error',
        'valid-typeof': ['error', {
            requireStringLiterals: true,
        }],
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'inside', {
            functionPrototypeMethods: true,
        }],
        'wrap-regex': 'off',
        'yield-star-spacing': ['error', 'after'],
        yoda: 'error',
        'import/default': 'error',
        'import/dynamic-import-chunkname': 'off',
        'import/export': 'error',
        'import/exports-last': 'error',
        'import/extensions': ['error', 'always', {
            ignorePackages: true,
        }],
        'import/first': 'error',
        'import/group-exports': 'off',
        'import/max-dependencies': 'off',
        'import/named': 'error',
        'import/namespace': ['error', {
            allowComputed: true,
        }],
        'import/newline-after-import': 'error',
        'import/no-absolute-path': 'error',
        'import/no-amd': 'error',
        'import/no-anonymous-default-export': 'off',
        'import/no-commonjs': 'off',
        'import/no-cycle': 'error',
        'import/no-default-export': 'off',
        'import/no-deprecated': 'warn',
        'import/no-duplicates': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                'config/**',
                'scripts/**',
                'test/**',
                'tests/**',
                'spec/**',
                'specs/**',
                '**/__tests__/**',
                '**/__mocks__/**',
                'test.{js,jsx}',
                'test-*.{js,jsx}',
                '**/*{.,_}{test,spec}.{js,jsx}',
                '**/*.config.js',
            ],
            optionalDependencies: false,
        }],
        'import/no-internal-modules': 'off',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-default': 'error',
        'import/no-named-export': 'off',
        'import/no-namespace': 'off',
        'import/no-nodejs-modules': 'off',
        'import/no-relative-parent-imports': 'off',
        'import/no-restricted-paths': 'off',
        'import/no-self-import': 'error',
        'import/no-unassigned-import': 'off',
        'import/no-unresolved': ['error', {
            caseSensitive: true,
            commonjs: true,
        }],
        'import/no-useless-path-segments': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': ['error', {
            groups: [
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
            ],
            'newlines-between': 'never',
        }],
        'import/prefer-default-export': 'off',
        'import/unambiguous': 'off',
        'promise/always-return': 'error',
        'promise/avoid-new': 'off',
        'promise/catch-or-return': ['error', {
            allowThen: false,
        }],
        'promise/no-callback-in-promise': 'off',
        'promise/no-native': 'off',
        'promise/no-nesting': 'off',
        'promise/no-new-statics': 'error',
        'promise/no-promise-in-callback': 'off',
        'promise/no-return-in-finally': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/prefer-await-to-callbacks': 'error',
        'promise/prefer-await-to-then': 'off',
        'promise/valid-params': 'off',
        'react/boolean-prop-naming': 'off',
        'react/button-has-type': ['error', {
            button: true,
            reset: false,
            submit: true,
        }],
        'react/default-props-match-prop-types': ['error', {
            allowRequiredDefaults: false,
        }],
        'react/destructuring-assignment': 'off',
        'react/display-name': 'off',
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-foreign-prop-types': 'error',
        'react/forbid-prop-types': ['error', {
            checkChildContextTypes: true,
            checkContextTypes: true,
            forbid: [],
        }],
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': ['error', {
            ignoreStateless: true,
        }],
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'warn',
        'react/no-unused-prop-types': ['error', {
            skipShapeProps: true,
        }],
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-stateless-function': ['off', { // TODO: Turn on
            ignorePureComponents: true,
        }],
        'react/prop-types': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': ['off', {
            forbidDefaultForRequired: true,
        }],
        'react/require-optimization': ['warn', {
            allowDecorators: [
                'observer',
            ],
        }],
        'react/require-render-return': 'error',
        'react/self-closing-comp': ['error', {
            component: true,
            html: true,
        }],
        'react/sort-comp': ['error', {
            order: [
                'static-methods',
                'lifecycle',
                'instance-variables',
                'getters',
                'setters',
                '/^(get|set).+$/',
                '/^fetch.*$/',
                '/^load.*$/',
                '/^handle.+$/',
                'instance-methods',
                'everything-else',
                '/^render.*$/',
            ],
        }],
        'react/sort-prop-types': 'off',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': ['error', 'after-props'],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': ['error', {
            children: 'never',
            props: 'never',
        }],
        'react/jsx-curly-spacing': ['error', 'never', {
            allowMultiline: true,
        }],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': ['error', {
            extensions: [
                '.jsx',
            ],
        }],
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-fragments': ['error', 'element'],
        'react/jsx-handler-names': ['warn', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
        }],
        'react/jsx-indent': ['error', 4, {
            checkAttributes: true,
        }],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-key': 'off',
        'react/jsx-max-depth': 'off',
        'react/jsx-max-props-per-line': ['error', {
            maximum: 1,
            when: 'multiline',
        }],
        'react/jsx-no-bind': ['error', {
            allowArrowFunctions: true,
            allowBind: true,
            allowFunctions: false,
            ignoreDOMComponents: false,
            ignoreRefs: false,
        }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': ['error', {
            ignoreCase: false,
        }],
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': ['error', {
            enforceDynamicLinks: 'always',
        }],
        'react/jsx-no-undef': 'error',
        'react/jsx-one-expression-per-line': 'error',
        'react/jsx-pascal-case': ['error', {
            allowAllCaps: false,
        }],
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-default-props': 'off',
        'react/jsx-sort-props': ['error', {
            callbacksLast: false,
            ignoreCase: true,
            noSortAlphabetically: true,
            reservedFirst: true,
            shorthandFirst: false,
            shorthandLast: true,
        }],
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeClosing: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
        }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': ['error', {
            arrow: 'parens-new-line',
            assignment: 'parens-new-line',
            condition: 'parens-new-line',
            declaration: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
            return: 'parens-new-line',
        }],
        'unicorn/catch-error-name': ['error', {
            name: 'error',
        }],
        'unicorn/custom-error-definition': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/filename-case': 'off',
        'unicorn/import-index': 'off',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/no-console-spaces': 'error',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/no-hex-escape': 'error',
        'unicorn/no-new-buffer': 'off',
        'unicorn/no-process-exit': 'error',
        'unicorn/no-unreadable-array-destructuring': 'error',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/no-unused-properties': 'off',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-add-event-listener': 'error',
        'unicorn/prefer-exponentiation-operator': 'error',
        'unicorn/prefer-node-append': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/prefer-spread': 'error',
        'unicorn/prefer-starts-ends-with': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/regex-shorthand': 'error',
        'unicorn/throw-new-error': 'error',
    },
};
