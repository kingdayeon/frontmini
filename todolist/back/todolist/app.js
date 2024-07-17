const express = require("express");
const cors = require("cors");
const app = express();

let todosArr = [
  { id: 1, contents: "영화보기", yesno: "no" },
  { id: 2, contents: "숙제하기", yesno: "no" },
  { id: 3, contents: "운동하기", yesno: "no" },
  { id: 4, contents: "파리 여행하기", yesno: "no" },
];
let count = 5;

app.use(cors());
app.use(express.json());

app.get("/api/todos", (req, res) => {
  res.json(todosArr);
});

app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: count++,
    contents: req.body.contents,
    yesno: req.body.yesno,
  };
  todosArr.push(newTodo);
  res.json(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todosArr = todosArr.filter((todo) => todo.id !== id);
  res.json({ message: "Todo deleted" });
});

app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todosArr.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todosArr[index] = { ...todosArr[index], ...req.body };
    res.json(todosArr[index]);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.listen(4000, () => {
  console.log("4000포트 서버가 시작됨~~");
});
