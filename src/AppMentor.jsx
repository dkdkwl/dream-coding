import React, { useState } from 'react';

export default function AppMentor() {
  // 1. 데이터 구조를 '배열(mentors)'로 변경
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  });

  return (
    <div>
      {/* 1. 멘토 리스트 보여주기 */}
      <h2>{person.name} ({person.title})의 멘토 목록</h2>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>

      {/* 2. 멘토 이름 바꾸기 버튼 (여기가 수정됨!) */}
      <button
        onClick={() => {
          const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const newName = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

          setPerson((prev) => ({
            ...prev,
            mentors: prev.mentors.map((mentor) => {
              if (mentor.name === prevName) {
                // 수정 포인트: current -> newName, 세미콜론(;) 제거
                return { ...mentor, name: newName }; 
              }
              // 이름이 다르면 원래 멘토 유지
              return mentor;
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>

      {/* 3. 멘토 추가하기 버튼 */}
      <button
        onClick={() => {
          const name = prompt(`새로운 멘토의 이름은?`);
          const title = prompt(`새로운 멘토의 직함은?`);

          setPerson((prev) => ({
            ...prev,
            mentors: [
              ...prev.mentors,
              { name, title },
            ],
          }));
        }}
      >
        멘토 추가하기
      </button>

      {/* 4. 멘토 삭제하기 버튼 */}
      <button
        onClick={() => {
          const targetName = prompt(`삭제할 멘토의 이름은?`);
          
          setPerson((prev) => ({
            ...prev,
            mentors: prev.mentors.filter((mentor) => mentor.name !== targetName),
          }));
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}