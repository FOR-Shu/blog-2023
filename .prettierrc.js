module.exports = {
    // 一行最多 80 字符
    printWidth: 80,
    // 使用 4 個空格縮進
    tabWidth: 4,
    // 不使用 tab 縮進，而使用空格
    useTabs: false,
    // 每個語句的結尾不需要分號
    semi: false,
    // 使用單引號代替雙引號
    singleQuote: true,
    // 對象的 key 僅在必要時用引號
    quoteProps: 'as-needed',
    // jsx 不使用單引號，而使用雙引號
    jsxSingleQuote: false,
    // 如 Object、Array 內的元素不需要尾隨逗號
    trailingComma: 'none',
    // 大括號內的首尾需要空格 { foo: bar }
    bracketSpacing: true,
    // jsx 標簽的反尖括號需要換行
    jsxBracketSameLine: false,
    // 箭頭函數，只有一個參數的時候，也需要括號
    arrowParens: 'always',
    // 每個文件格式化的範圍是文件的全部內容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要寫文件開頭的 @prettier
    requirePragma: false,
    // 不需要自動在文件開頭插入 @prettier
    insertPragma: false,
    // 使用默認的折行標準
    proseWrap: 'preserve',
    // 根據顯示樣式決定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 換行符使用 lf
    endOfLine: 'auto'
}
