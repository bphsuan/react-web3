# react-web3-account

使用以太坊智能合約練習帳戶餘額應用

1. 查詢餘額(O)
2. 監聽餘額變化(X)
3. 發送和接收以太幣(X)

## 技術與工具

* react v18(CRA)
* react-redux
* redux-toolkit
* redux-saga
* web3

## 事前準備

本範例使用 Ganache 作為開發者測試的個人以太坊區塊鏈環境

1. 本機下載 [Ganache](https://www.trufflesuite.com/ganache)
2. 開啟 Ganache
   > 自動啟動一個本地的以太坊網路，並顯示出其中的 10 個帳戶，每個帳戶都有 100 ETH
3. web3 連接 Ganache RPC
   > 預設網址: <http://localhost:7545>

## 執行

```cmd
npm i && npm run start
```
