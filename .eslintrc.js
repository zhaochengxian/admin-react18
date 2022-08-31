module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": ["error", "single"],
        "init-declarations": 0,//声明时必须赋初值
        "default-case": 2,//switch语句最后必须有default
        "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
        "no-use-before-define": 2,//未定义前不能使用
        "no-useless-call": 2,//禁止不必要的call和apply
        "no-unreachable": 2,//不能有无法执行的代码
        "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        "no-redeclare": 2,//禁止重复声明变量
        "no-fallthrough": 1,//禁止switch穿透
        "no-const-assign": 2,//禁止修改const声明的变量
        "react/react-in-jsx-scope": "off",
    },
    "ignorePatterns": [
        'node_modules',
        'build',
        'dist',
        'tests',
        'README.md',
        '.eslintrc.js',
        'vite.config.ts',
        'postcss.config.js',
        'type.d.ts',
        'commitlint.config.js'
    ],
}
