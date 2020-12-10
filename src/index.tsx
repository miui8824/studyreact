import React from 'react';
import ReactDOM from 'react-dom';
import Mainindex from './pages/index/index';
import { ConfigProvider, Button } from 'antd';
import 'antd/dist/antd.css';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');
interface Locatconfig {
  location: String,
  dev: Boolean,
}
let config = {
  location: '/',
  dev: false,
}

function App(props: Locatconfig): any {
  return (
    <div>
      <Button type="primary">中文</Button>
      <Mainindex {...props}></Mainindex>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={config.dev ? zhCN : enUS}>
      <App {...config} />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
