import React, { useState } from "react";
import "./BlogMain.css";
import CalendarModal from "./CalendarModal"; // 캘린더 모달 컴포넌트 가져오기

const getCurrentDateTime = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = ("0" + (now.getMonth() + 1)).slice(-2);
  let day = ("0" + now.getDate()).slice(-2);
  let hours = ("0" + now.getHours()).slice(-2);
  let minutes = ("0" + now.getMinutes()).slice(-2);
  let seconds = ("0" + now.getSeconds()).slice(-2);
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

function BlogMain() {
  const [글제목, 글제목변경] = useState([
    {
      title: "「수호천㉴」㉮¸되Ю도되겟습Ŀı까¿?",
      date: getCurrentDateTime(),
    },
    {
      title: "(‥+㈏으i삶은¸㈕름답거i¸빛㉯ヱ있Ю+‥)",
      date: getCurrentDateTime(),
    },
    {
      title: "∥フl다己i는시간은○r깝スl안Ю^-^…∥",
      date: getCurrentDateTime(),
    },
  ]);
  const [modal, setModal] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false); // 캘린더 모달 상태
  const [title, setTitle] = useState(0);
  const [입력값, 입력값변경] = useState("");
  const [editingTitle, setEditingTitle] = useState("");

  const handleFloatingButtonClick = () => {
    setCalendarOpen(true); // 캘린더 모달 열기
  };

  const handleSaveClick = () => {
    let copy = [...글제목];
    copy[title].title = editingTitle;
    글제목변경(copy);
    setModal(false);
  };

  return (
    <div className="blog-main">
      <div className="header">
        <h1>🍀 ⊂ト욘쨩의 블로ュ 🍀</h1>
      </div>

      {글제목.map((a, i) => (
        <div className="post" key={i}>
          <h4
            onClick={() => {
              setModal(true);
              setTitle(i);
            }}
          >
            {a.title}
            {/* <span
              onClick={(e) => {
                e.stopPropagation();
                let copy = [...글제목];
                copy[i].likes += 1;
                글제목변경(copy);
              }}
            >
              👍
            </span>
            {a.likes} */}
          </h4>
          <p>{a.date} 등록</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
            }}
          >
            삭제
          </button>
        </div>
      ))}

      <div className="input-container">
        <input
          value={입력값}
          onChange={(e) => 입력값변경(e.target.value)}
          placeholder="다연이에게 하고싶은 말을 적어죠"
        />
        <button
          onClick={() => {
            if (입력값.trim() === "") {
              alert("글 내용을 입력해죠");
              return;
            }
            let copy = [...글제목];
            copy.unshift({
              title: 입력값,
              date: getCurrentDateTime(),
              likes: 0,
            });
            글제목변경(copy);
            입력값변경(""); // 입력 필드 초기화
          }}
        >
          등록
        </button>
      </div>

      {modal && (
        <Modal
          color={"#a5d6a7"}
          title={title}
          글제목={글제목}
          editingTitle={editingTitle}
          setEditingTitle={setEditingTitle}
          handleSaveClick={handleSaveClick}
          setModal={setModal}
        />
      )}

      <button className="floating-button" onClick={handleFloatingButtonClick}>
        <img className="calendar" alt="calendar" src="img/calendar.png" />
      </button>

      <CalendarModal
        isOpen={calendarOpen}
        onClose={() => setCalendarOpen(false)}
      />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ background: props.color }}>
        <h4>내용 바꿀래!</h4>
        <input
          type="text"
          value={props.editingTitle}
          onChange={(e) => props.setEditingTitle(e.target.value)}
          placeholder="새 내용 입력"
        />
        <button onClick={props.handleSaveClick}>저장</button>
        <button onClick={() => props.setModal(false)}>취소</button>
      </div>
    </div>
  );
}

export default BlogMain;
