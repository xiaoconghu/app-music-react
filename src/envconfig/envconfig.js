/**
 * 全局配置文件
 */
let obj;
if (process.env.NODE_ENV === 'development') {

    obj = {
        NODE_ENV: '"development"',
        qqPrefix: '',
        mkPrefix: '',
        nodePrefix: ''
    }
} else {
    obj = {
        NODE_ENV: '"production"',
        qqPrefix: '"https://c.y.qq.com"',
        mkPrefix: '"http://ustbhuangyi.com"',
        nodePrefix: '"http://localhost:3000"'

    }
}
export default obj