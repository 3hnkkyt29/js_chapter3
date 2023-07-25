console.log(document.querySelector('#colorPicker').value);
// documentオブジェクトの中から指定したセレクター（＝colorPicker）を持つ要素を取得して（＝メソッド＝querySelector）
document.querySelector('#colorText').textContent='カラーコード:';
/*.textContent='(表示させたい文言)'　で書き換わる
 「＝」は「代入する」という意味合い。＝より右のものを左のものに入れる、代入する。
 HTMLタグを含める場合は
document.querySelector('#colorText').innerHTML='<h1>カラーコード:<h1>';
という風に「innerHTML」を使用すれば<h1>を表示させずに済む。
/*