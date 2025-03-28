import { CompletionTriggerKind } from "typescript";
import "./styles.css";

//追加ボタンを押した時のアロー関数
const onClickAdd = () => {
  //inputに書かれたテキストを取得して、liに反映されるコード
  //.valueをつけることで、inputのテキストの内容を取得できる。
  const inputText = document.getElementById("add-text").value;

  //取得した後にinputのを空にする
  document.getElementById("add-text").value = "";
  createIncompleteTodo(inputText);
};

//渡された引数を未完了のtodoを作成する関数
const createIncompleteTodo = (todo) => {
  //JSでhtmlを作成する
  const li = document.createElement("li");

  //div作成
  const div = document.createElement("div");
  //クラス名を付与する。
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  //p内のテキスト
  p.innerText = todo;

  //htmlに差し込む場所を指定
  document.getElementById("incomplete-list").appendChild(li);

  //完了ボタンを生成
  const completeButton = document.createElement("button");
  //ボタン内のテキストを指定
  completeButton.innerText = "完了";

  //動作を足す
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
    const moveTarget = completeButton.closest("li");
    //完了の次にあるエレメント　.を消す
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    //戻すボタンを作ってdivタグ配下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);
    //complete-listに移動させる
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親にあるliタグを未完了リストから削除する
    //.closest一番近いliを探す
    const deleteTarget = deleteButton.closest("li");
    //ulタグを削除する
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //htmlの階層構造を指定する
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
};

//「追加」ボタンで
//document.getElementByIdはhtmlからid名を取得する
//addEventListenerは、2つの引数を取る。1つ目は、イベントの種類、2つ目はどのアクションか
document.getElementById("add-button").addEventListener("click", onClickAdd);
