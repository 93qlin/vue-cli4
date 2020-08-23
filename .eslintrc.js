module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,


  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "amd": true
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // "max-len": ["error", {"code": 160}],
    // "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  // // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
  // plugins: [
  //   'html',
  //   "flow-vars",
  //   "react"
  // ],
  overrides: [{
    files: [
      "**/__tests__/*.{j,t}s?(x)",
      "**/tests/unit/**/*.spec.{j,t}s?(x)"
    ],
    env: {
      jest: true
    }
  }]
};
