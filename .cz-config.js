module.exports = {
    types: [
        { value: 'feature', name: 'feature: 增加新功能' },
        { value: 'bug', name: 'bug: 測試反饋 bug 列表中的 bug 號' },
        { value: 'fix', name: 'fix: 修覆bug' },
        { value: 'ui', name: 'ui: 更新 UI' },
        { value: 'docs', name: 'docs: 文檔變更' },
        { value: 'style', name: 'style: 代碼格式(不影響代碼運行的變動)' },
        { value: 'perf', name: 'perf: 性能優化' },
        { value: 'refactor', name: 'refactor: 重構(既不是增加feature，也不是修覆bug)' },
        { value: 'release', name: 'release: 發布' },
        { value: 'deploy', name: 'deploy: 部署' },
        { value: 'test', name: 'test: 增加測試' },
        { value: 'chore', name: 'chore: 構建過程或輔助工具的變動(更改配置文件)' },
        { value: 'revert', name: 'revert: 回退' },
        { value: 'build', name: 'build: 打包' }
    ],
    // override the messages, defaults are as follows
    messages: {
        type: '請選擇提交類型:',
        customScope: '請輸入您修改的範圍(可選):',
        subject: '請簡要描述提交 message (必填):',
        body: '請輸入詳細描述(可選，待優化去除，跳過即可):',
        footer: '請輸入要關閉的 issue(待優化去除，跳過即可):',
        confirmCommit: '確認使用以上信息提交？(y/n/e/h)'
    },
    allowCustomScopes: true,
    skipQuestions: ['body', 'footer'],
    subjectLimit: 72
};