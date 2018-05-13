# RN-ONE
My first react-native project

# 踩坑集锦

## icon 使用的最佳“实践”，结合 icomoon（自定义图标）
> 由于RN不支持多色图标，所以一律单色，多色的话就用png替代，也许支持多色图片，只是我还没发现
- 安装此包 `yarn add react-native-vector-icons`
- 将 iconmoon 中下载的文件 .json 文件保留，以及fonts 中的 .ttf 文件保留
- 参照 ./src/commponents/0-0-Icon 的用法
- 手动将 .ttf 文件放到 ./node_modules/react-native-vector-icons/Fonts 中
- 在 ./android/app/build.gradle 中添加如下配置
  ```
  ...
  project.ext.vectoricons = [
      iconFontNames: [ "dudu.ttf" ] // Name of the font files you want to copy
  ]
  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
  ...
  ```
- 至于如何在 ios 中进行上面配置，参照 [这里](https://github.com/oblador/react-native-vector-icons#option-manually)
- 结束，这是一个比较”丑陋“的方案，希望以后能有更好的方式。

## `babel-plugin-module-resolver` 在RN的使用中总是出错
> 懒的吐槽这个了，简直就是陨石坑，还好终于找到一个比较靠谱的方法
- .babelrc 的配置
  ```
  {
    "presets": ["react-native"],
    "plugins": [
      "transform-decorators-legacy",
      [
        "import",
        {
          "libraryName": "antd-mobile"
        }
      ],
      [
        "module-resolver",
        {
          "cwd": "babelrc",
          "root": ["./src"],
          "alias": {
            "@components": "./src/components",
            "@utils": "./src/utils"
          },
          "extensions": [".js", ".ios.js", ".android.js"]
        }
      ]
    ]
  }
  ```

- 运行 `react-native run-android -- --reset-cache`
