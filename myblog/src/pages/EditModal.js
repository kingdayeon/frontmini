import React from "react";
import "./BlogMain.css"; // 필요한 경우 CSS 파일 추가

function EditModal(props) {
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

export default EditModal;
