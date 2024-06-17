/**
 * <type>(<scope>): <subject>
 * ci：变动 github actions 或 gitlab-ci 配置
 * perf：不更改代码内部行为的前提下，程序性能优化
 * revert：恢复上一次提交
 * chore：构建过程或辅助工具的变动，不在其他 commit 类型中的修改
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'perf',
        'refactor',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'del',
      ],
    ],
  },
};
