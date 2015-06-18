//BEGIN_CHALLENGE
// Sample challenge of Code-Check
// Between upper case 'begin_challenge' and 'end_challenge' range are removed, when it published to the user.
// (The reason why I use lowercase at above is to avoid miss judge in challenge generation.)
//END_CHALLENGE

//BEGIN_CHALLENGE
// Code-Checkで出題される問題のサンプル
// 大文字の「begin_challenge」と「end_challenge」で囲まれた部分は出題時に削除されます。
// (上記の説明で小文字にしているのは大文字を使用するとChallenge生成時に誤検知されることを避けるためです。)
//END_CHALLENGE

function hello(str) {
//BEGIN_CHALLENGE
  return "Hello " + str;
//END_CHALLENGE
}

module.exports = {
  hello: hello
};
