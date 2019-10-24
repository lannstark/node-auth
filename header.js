const express = require("express")
const app = express()

/**
 * rea.headers를 이용하면 요청에 들어오는 헤더를
 * 확인할 수 있습니다!
 *
 * POST MAN에서 Headers 탭에 들어가
 * key에 Authorization을
 * value에 Baere jwt_token_here을 넣고 API를 호출해보세요!
 */
app.get("/", (req, res) => {
  const headers = req.headers
  console.log(headers)
  res.json("헤더를 확인하였습니다") 
})


app.listen(9000, () => {
  console.log("Server is running")
})

