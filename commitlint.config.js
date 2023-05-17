module.exports = {
    extends: ['@commitlint/config-conventional', 'cz'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feature', // 新功能 (feature)
                'bug', // 此項特別針對 bug 號，用於向測試反饋 bug 列表的 bug 修改情況
                'fix', // 修補 bug
                'ui', // 更新 ui
                'docs', // 文檔 (documentation)
                'style', // 格式 (不影響代碼運行的變動)
                'perf', // 性能優化
                'release', // 發布
                'deploy', // 部署
                'refactor', // 重構 (即不是新增功能，也不是修改bug的代碼變動)
                'test', // 增加測試
                'chore', // 構建過程或輔助工具的變動
                'revert', // feat(pencil): add ‘graphiteWidth’ option (撤銷之前的commit)
                'merge', // 合並分支， 例如： merge(前端頁面)： feature-xxxx修改線程地址
                'build' // 打包
            ]
        ],
        // <type> 格式 小寫
        'type-case': [2, 'always', 'lower-case'],
        // <type> 不能為空
        'type-empty': [2, 'never'],
        // <scope> 範圍不能為空
        'scope-empty': [2, 'never'],
        // <scope> 範圍格式
        'scope-case': [0],
        // <subject> 主要 message 不能為空
        'subject-empty': [2, 'never'],
        // <subject> 以什麽為結束標志，禁用
        'subject-full-stop': [0, 'never'],
        // <subject> 格式，禁用
        'subject-case': [0, 'never'],
        // <body> 以空行開頭
        'body-leading-blank': [1, 'always'],
        'header-max-length': [0, 'always', 72]
    }
}
