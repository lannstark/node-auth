const express = require("express")
const app = express()

/* DB 설정 */
const db = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "test_db"
  }
})

// req.body 설정
app.use(express.json())

/* 회원 가입 */
app.post("/signup", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  // 원래를 여기에 충분한 검증이 들어가야 합니다!
  // 중복되는 이메일이 있는가?
  // 실제로 email이 맞는가?
  // 비밀번호 정책을 준수하였는가?
  // 모든 검증이 완료되었다면... 이런 느낌으로 user 테이블에 데이터를 넣겠죠?!
  db.raw(`INSERT INTO user (email, password), VALUES ("${email}", "${password}")`)
  .then((response) => {
    res.status(200).json({
      data: "OK",
      message: "회원가입에 성공하였습니다!"
    })
  })
  .catch((error) => {
    console.error(error)
  })

  /**
   * Q. 비밀번호를 그냥 저장한다?! 괜찮을까요?
   * >> bcrypt
   */
})



app.post("/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  db.raw(`SELECT FROM user WHERE email="${email}" AND password="${password}"`)
  .then((response) => {
    /**
     * Q. 로그인에 성공 여부를 이렇게만 반환하면 될까요?
     * 프론트 입장에서는 화면이 바뀌면 어떻게 알 수 있을까요?
     * 또한 새로운 요청이 왔을 때 로그인된 회원이 보낸 요쳥인지 그렇지 않은 요청인지 어떻게 알 수 있을까요?
     * >> JWT
     */
    res.status(200).json({
      data: "OK",
      message: "로그인에 성공하였습니다!"
    })
  })
  .catch((error) => {
    console.error(erro)
  })
})


app.listen(9000, () => {
  console.log("Server is running")
})


