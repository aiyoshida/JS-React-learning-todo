import "./styles.css";

//追加ボタンを押した時のアロー関数
const onClickAdd = () => {
  //inputに書かれたテキストを取得して、liに反映されるコード
  //.valueをつけることで、inputのテキストの内容を取得できる。
  const inputText = document.getElementById("add-text").value;

  //取得した後にinputのを空にする
  document.getElementById("add-text").value = "";

  //liタグをJSで作成する
  const li = document.createElement("li");
  console.log(li);
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
};
//「追加」ボタンで
//document.getElementByIdはhtmlからid名を取得する
//addEventListenerは、2つの引数を取る。1つ目は、イベントの種類、2つ目はどのアクションか
document.getElementById("add-button").addEventListener("click", onClickAdd);
