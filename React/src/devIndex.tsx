/**
 * 该文件用于开发环境实时预览效果，但无法和后端通信
 */

import ReactDOM from 'react-dom'
import App from '@/components/App'
import '@kdcloudjs/kdesign/dist/kdesign.css'
import styles from './components/reset.less'

ReactDOM.render(
  <>
    <div data-control-name="test">
      <App />
    </div>
    <div className={styles.test}>
      <h1>属性选择器外的H1标签</h1>
    </div>
    <footer>选择器外footer</footer>
  </>,
  document.getElementById('root') as HTMLElement
)
