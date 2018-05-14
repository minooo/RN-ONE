// 配置方案 https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui
// 可用变量 https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.native.tsx
// 修改antd主题样式
const customVars = {
  brand_primary: '#45c2c8',
  color_link: '#45c2c8',
  border_color_base: '#45c2c8',
  primary_button_fill_tap: '#45c2c8',
  primary_button_fill: '#45c2c8',
};

const path = require('path');
const fs = require('fs');

const defaultVars = require('antd-mobile/lib/style/themes/default.native');
const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.native.js');
const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'var brandPrimary = "#108ee9"; var brandPrimaryTap = "#1284d6";module.exports = ' + JSON.stringify(themeVars)
  );
}
