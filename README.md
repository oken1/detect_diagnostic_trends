診断系由来のトレンドに×印を付ける
=============

このアプリケーションはTwitter公式Webのトレンド画面で、診断系由来のトレンドに❌印を付けるChrome拡張機能です。

  
![detect_diagnostic_trends_ss](https://raw.githubusercontent.com/oken1/images/master/detect_diagnostic_trends_readme/detect_diagnostic_trends_ss.png)
  
トレンドからの抽出は、KuroTwiで実装した抽出処理をサーバーサイド（Google Apps Script）で定期的に動かし、  
そこから結果を取得してくることで実現しています
  
  
使い方
=============
1. Releasesからdetect_diagnostic_trends.zipをダウンロードして展開する  

2. chromeの拡張機能画面でデベロッパーモードをONにして「パッケージ化されていない拡張機能を読み込む」を押す  

3. manifest.jsonが置いてあるフォルダを指定する  


