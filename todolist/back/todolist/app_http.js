const http = require("http");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const queryString = require("querystring");

let todosArr = []; // todo list 배열

// 배열 초기화
todosArr = [
  { id: 1, contents: "영화보기", yesno: "no" },
  { id: 2, contents: "숙제하기", yesno: "no" },
  { id: 3, contents: "운동하기", yesno: "no" },
  { id: 4, contents: "파리 여행하기", yesno: "no" },
];
let count = 5; // 아이디 5부터 시작할 거니까!

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    console.log("/ get이 시작됨~~");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // 한국어 문자열 인코딩 설정

    fs.readFile(
      path.join(__dirname, "views", "list.ejs"),
      "utf-8",
      (error, template) => {
        if (error) throw error;
        const renderedHTML = ejs.render(template, { datalist: todosArr });
        res.write(renderedHTML);
        res.end();
      }
    );
  } else if (url === "/insert" && method === "GET") {
    console.log("/insert get 시작됨~");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // 한국어 문자열 인코딩 설정

    fs.readFile(
      path.join(__dirname, "views", "insert.ejs"),
      "utf-8",
      (error, template) => {
        if (error) throw error;
        res.write(template);
        res.end();
      }
    );
  } else if (url === "/insert" && method === "POST") {
    console.log("/insert post 시작됨~");

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const parsedBody = queryString.parse(body);
      let id_num = count++;
      todosArr.push({
        id: id_num,
        contents: parsedBody.contents,
        yesno: parsedBody.yesno,
      });
      res.writeHead(302, { Location: "/" });
      res.end();
    });
  } else if (url.startsWith("/delete/") && method === "GET") {
    let id_num = url.split("/")[2];
    for (const i in todosArr) {
      if (todosArr[i].id == id_num) {
        console.log(todosArr[i].id + " " + i);
        todosArr.splice(i, 1);
      }
    }
    console.log("delete ok~~~");
    res.writeHead(302, { Location: "/" });
    res.end();
  } else if (url.startsWith("/edit/") && method === "GET") {
    let id_num = url.split("/")[2];
    let editdata = [];
    console.log("/edit get 시작 " + id_num);

    for (const i in todosArr) {
      if (todosArr[i].id == id_num) {
        console.log(todosArr[i].id + " " + i);
        editdata = todosArr[i];
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

        fs.readFile(
          path.join(__dirname, "views", "edit.ejs"),
          "utf-8",
          (error, template) => {
            if (error) throw error;
            const renderedHTML = ejs.render(template, { data: editdata });
            res.write(renderedHTML);
            res.end();
          }
        );
      }
    }
  } else if (url.startsWith("/edit/") && method === "POST") {
    let id_num = url.split("/")[2];
    console.log("/edit post 시작 " + id_num);

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const parsedBody = queryString.parse(body);
      if (parsedBody.contents && parsedBody.yesno) {
        console.log(
          "수정 값~~~" + parsedBody.contents + " " + parsedBody.yesno
        );
      }

      for (const i in todosArr) {
        if (todosArr[i].id == id_num) {
          todosArr.splice(i, 1, {
            id: id_num,
            contents: parsedBody.contents,
            yesno: parsedBody.yesno,
          });
          console.log("수정 ok~~~" + id_num);
        }
      }
      res.writeHead(302, { Location: "/" });
      res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("3000포트 서버가 시작됨~~");
});
