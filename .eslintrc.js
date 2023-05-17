module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        '@unocss'
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error'
    },
    overrides: [
        {
            files: [
                '**/pages/**/*.{js,ts,vue}',
                '**/layouts/**/*.{js,ts,vue}',
                '**/app.{js,ts,vue}',
                '**/error.{js,ts,vue}'
            ],
            rules: {
                'vue/multi-word-component-names': 'off'
            }
        }
    ]
}
