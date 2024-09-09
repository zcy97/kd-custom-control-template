import { useState } from 'react'
import { Button, Tooltip, Modal } from '@kdcloudjs/kdesign'
import styles from './App.less'
import './reset.less'

const App = (props: any) => {
  const [num, setNum] = useState<number>(0)
  const [visible, setVisible] = useState(false)
  const handleClick = (value: boolean) => {
    setVisible(value)
  }
  const bodyStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div className={styles.rect}>
      <h1>Hello 自定义控件</h1>
      <Button onClick={() => setNum((prev) => prev + 1)}>{num}</Button>
      <Tooltip tip="一行最多显示20个字符，超过的字符可折行显示，建议最多不要超过40个字符">
        <span>Mouse over</span>
      </Tooltip>
      <Button
        onClick={() => {
          handleClick(true)
        }}
      >
        基础弹出框
      </Button>
      <Modal
        body={<h1>弹窗内的h1</h1>}
        bodyStyle={bodyStyle}
        title="Basic Modal"
        closable={true}
        onCancel={() => handleClick(false)}
        onOk={() => handleClick(false)}
        mask={true}
        visible={visible}
        className={styles.myModal}
      />
      <footer>footer</footer>
    </div>
  )
}

export default App
