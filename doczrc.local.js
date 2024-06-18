/**
 * 本地构建后的启动方式
 * 1. 不设置 base 时：本地执行可以切到 .docz/dist 目录下，执行 serve 命令启动本地服务
 * 2. 设置 base = '/.docz/dist' 时：可以使用 live server 访问 .docz/dist/index.html 或者在项目根目录下执行 serve 命令（这时需要手动切到 .docz/dist）
 */
export default {}