import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Dropdown, Input, Layout, Typography, Menu, Button } from 'antd';
import { GlobalOutlined } from "@ant-design/icons";
import ButtonGroup from 'antd/lib/button/button-group';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles['App-header']}>
        <div className={styles['top-header']}>
          <div className={styles['top-header-inner']}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button overlay={
              <Menu
                items={[
                  { key: "1", label: "中文" },
                  { key: "2", label: "英文" }
                ]}
              />
            } style={{
              marginLeft: 15
            }} icon={<GlobalOutlined />}>
              语言
            </Dropdown.Button>
            <ButtonGroup className={styles['button-group']}>
              <Button>登陆</Button>
              <Button>注册</Button>
            </ButtonGroup>
          </div>
        </div>
        <Layout.Header className={styles['Main-header']}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles['Title']}>
            旅游网
          </Typography.Title>
          <Input.Search placeholder='请输入目的地、主题、关键字' className={styles['Search-input']} />
        </Layout.Header>
        <Menu mode={'horizontal'}
        items={[
          {key:1,label:"首页"},
          {key:2,label:"跟团游"},
          {key:3,label:"周末游"},
          {key:4,label:"水变油"},
        ]} className={styles['Main-menu']}/>
      </div>
      <div>
        <Layout.Footer>
          <Typography.Title level={3} style={{
            textAlign:'center'
          }}>
            版权是谁的
          </Typography.Title>
        </Layout.Footer>
      </div>
    </div>
  );
}

export default App;
