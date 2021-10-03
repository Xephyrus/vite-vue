# vite-vue
这是本人做的第一个vue3的项目, 采用了vue3 + ts + vite + element plus的开发架构
建议使用尤大大强烈推荐的Volar进行开发

```bash
/ // 根目录
├── public
│   └── favicon.ico
├── src
│   ├── api // api模块, 模块化接口请求
│   ├── assets // 存放组件的依赖资源
│   ├── components // 组件目录
│   ├── icons // 封装svg-icon
│   ├── router // 路由模块
│   ├── store // vuex模块
│   ├── style // 样式模块
│   ├── utils // 工具库
│   └── views // 页面主体
├── index.html // 模板页面
├── package.json // 依赖包
├── README.md // 说明
├── tsconfig.json // TS配置文件
└── vite.config.ts // vite配置

```

安装依赖
```bash
yarn
```

项目启动
```bash
yarn dev
```

项目打包
```bash
yarn build
```

线上地址: http://119.29.160.22
gitee地址: https://gitee.com/zhu-maosheng/vite-vue