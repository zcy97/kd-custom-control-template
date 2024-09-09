module.exports = {
  plugins: [
    require('postcss-prefix-selector')({
      prefix: '[data-control-name="${CONTROL_NAME}"]', // 替换为你想要的前缀
      exclude: [], // 可选：排除不需要加前缀的选择器
      transform: function (prefix, selector, prefixedSelector) {
        // 包含原生 HTML 标签
        const nativeTags = [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'p',
          'div',
          'span',
          'a',
          'ul',
          'ol',
          'li',
          'table',
          'tr',
          'td',
          'th',
          'input',
          'button',
          'video',
          'audio',
          'form',
          'label',
          'img',
          'section',
          'article',
          'header',
          'footer',
          'nav',
          'main',
          'aside',
          'figure',
          'figcaption',
        ]

        const isNativeTag = nativeTags.includes(selector)

        if (isNativeTag) {
          return prefixedSelector
        }
        return selector
      },
    }),
    // 其他 PostCSS 插件可以在这里继续添加
  ],
}
