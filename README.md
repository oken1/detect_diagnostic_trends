# 診断系由来のトレンドに❌印を付ける
このアプリケーションはTwitter公式Webのトレンド画面で、診断系由来のトレンドに❌印を付けるChrome拡張機能です。  
トレンドの表示が下の画像のようになります。  
  
|![detect_diagnostic_trends_ss](https://raw.githubusercontent.com/oken1/images/master/detect_diagnostic_trends_readme/detect_diagnostic_trends_ss.png)|
|:-:|

  
# 使い方
1. Releasesからdetect_diagnostic_trends.zipをダウンロードして展開する  

2. chromeの拡張機能画面でデベロッパーモードをONにして「パッケージ化されていない拡張機能を読み込む」を押す  

3. manifest.jsonが置いてあるフォルダを指定する  
  
# 本機能の実現方法
1. トレンドから診断系由来のワードを抽出するプログラムをGoogle Apps Scriptで作成（抽出方法は、[KuroTwi](https://github.com/oken1/kurotwi)で使った処理をほぼそのまま流用）  

2. 上記の抽出処理スクリプトをGoogle Apps Scriptのトリガー機能を使って定期的に実行して、Google Drive上のファイルに抽出したワードを出力  

3. 出力されたファイルを読み込んで内容をそのまま返すAPIをGoogle Apps Scriptで作成  

4. 本拡張機能でAPIを呼びだし、❌印を付けるトレンドを特定  
