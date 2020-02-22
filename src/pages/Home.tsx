import React from 'react';
import { Button, Menu } from 'antd';

export default function Home() {
  return(
    <>
    <div className="header">
      <div className="logo"><svg width="26" height="36" viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.825 23.175C25.825 30.3 20.0501 36 13 36C5.95003 36 0.175049 30.3 0.175049 23.175C0.175049 16.05 13 0 13 0C13 0 25.825 16.125 25.825 23.175Z" fill="#FB7575"/>
<path d="M13 32.625C7.82505 32.625 3.55005 28.425 3.55005 23.175C3.55005 22.575 4.07507 22.05 4.67505 22.05C5.27503 22.05 5.80005 22.575 5.80005 23.175C5.80005 27.15 9.02507 30.375 13 30.375C13.6 30.375 14.125 30.9 14.125 31.5C14.125 32.1 13.6 32.625 13 32.625Z" fill="white"/>
</svg>

    </div>
      <div className="nav">
        <Menu className="nav-menu" mode="horizontal">
          <Menu.Item key="mail">
            Моніторинг банку крові
          </Menu.Item>
          <Menu.Item key="mail1">
            Точки здачі крові
          </Menu.Item>
          <Menu.Item key="mail2">
            Реципієнти
          </Menu.Item>
        </Menu>
      </div>
    </div>
    <div className="content">
      <div className="wrapper">
      <div>
        <p>Стань частиною донорського руху.</p>
        <Button className="button-border">Стати донором</Button>
        <Button>Увійти в кабінет</Button>
      </div>
      <div className="picture"></div>
    </div>
      </div>
    </>
  );
}