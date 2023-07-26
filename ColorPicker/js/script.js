// console.log(document.querySelector('#colorPicker').value);
// documentオブジェクトの中から指定したセレクター（＝colorPicker）を持つ要素を取得（＝メソッド＝querySelector）して

// document.querySelector('#colorText').textContent='カラーコード:';
/*.textContent='(表示させたい文言)'　で書き換わる
 「＝」は「代入する」という意味合い。＝より右のものを左のものに入れる、代入する。
 HTMLタグを含める場合は
document.querySelector('#colorText').innerHTML='<h1>カラーコード:<h1>';
という風に「innerHTML」を使用すれば<h1>を表示させずに済む。
*/

// document.querySelector('#colorText').textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;
/*通常のテキストとプログラミングコードを組み合わせる書き方は２種類
1つ目は
document.querySelector('#colorText').textContent='カラーコード：'+document.querySelector('#colorPicker').value;
のように「＋」で繋げる方法。
可読性が下がり、足し算を使う際に混乱する可能性があるというデメリットがある。
2つ目は"テンプレート文字列"を使用する方法。
document.querySelector('#colorText').textContent=`カラーコード：${document.querySelector('#colorPicker').value}`;
のように、表示させたい文字列をバックティック（＝`）で囲み、文字列以外のコードを「${ }」で囲む。
*/

// 3-7
// 長くなるから定数名を定義する
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');
// const 定数名 = 中に入れる値;
// 12行目を定数名を利用し書き換えたものが以下
// text.textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;

// 3-8
// color.addEventListener('input', colorBg);
// 上記は41行目に移動
// イベントの設定には「addEventListener」を使用。
// index.htmlの16行目参照。

// 3-9
// colorBgを関数名とする
const colorBg = () => {
  text.textContent = `カラーコード：${color.value}`;
}
// カラーピッカーが変更（入力＝input）されたらcolorBgを発動させる
color.addEventListener('input', colorBg);