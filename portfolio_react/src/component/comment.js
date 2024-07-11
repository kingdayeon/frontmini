import React from "react";
export default function Comment() {
  let comment =
    "OOO은 개발 역량 뿐 아니라 함께 일하기 너무 좋은 동료였습니다. 항상 문제 해결에 적극적이고, 팀 프로젝트를 이끌며 모두의 협업을 도와주었습니다. OOO과 함께한 프로젝트는 항상 성공적이었습니다.";
  return (
    <div className="recommendation">
      <p>{comment}</p>
      <b>OOO프로젝트 팀원, 민재</b>
    </div>
  );
}
