const express = require("express")
const app = express()

/**
 * Session 설정,
 * session 이란 것은 HTTP에서 무언가를 저장하기 위한 개념입니다.
 * store 옵션을 추가할 수 있습니다.
 * 현재는 파일에 데이터를 저장하고 있으며 DB를 사용할 수도 있습니다.
 * store 옵션을 설정하지 않으면 memory에 데이터를 저장합니다.
 * REF : https://www.npmjs.com/package/express-session
 * 
 */
const session = require("express-session")
const FileStore = require("session-file-store")(session)
app.use(session({
  secret: "AnySecretKey",
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}))

app.get("/session", (req, res) => {
  // rea.session으로 사용
  const data = req.session.data
  if (data === undefined) {
    req.session.data = 1
  } else {
    req.session.data += 1
  }
  res.json(req.session.data)
})


app.listen(9000, () => {
  console.log("Server is running")
})
