/**
 * 设备类型转换逻辑
 *
 * 服务端渲染
 *   - 服务端根据UA判断设备类型返回不同的脚本
 *   - webpack通过设置process.env.desktop & process.env.mobile 来分开打包
 *      - desktop: true
 *      - mobile: true
 * 本地渲染
 *   - webpack设置 process.env.desktop & process.env.mobile 都为true
 */

module.exports = {
  desktop: process.env.desktop,
  mobile: process.env.mobile
};
