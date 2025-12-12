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
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토 목록:</p>
      <ul>
        {/* 2. 배열이므로 map을 사용해 화면에 표시 */}
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>

      {/* 멘토 이름 바꾸기 (밥 -> 다른이름) */}
      <button
        onClick={() => {
          const prevName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const newName = prompt(`새로운 이름은 무엇인가요?`);
          
          setPerson((person) => ({
            ...person,
            // map을 돌면서 이름이 일치하는 멘토만 수정
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prevName) {
                return { ...mentor, name: newName };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>

      {/* 멘토 추가하기 */}
      <button
        onClick={() => {
          const name = prompt(`멘토의 이름은?`);
          const title = prompt(`멘토의 직함은?`);
          
          setPerson((person) => ({
            ...person,
            // 배열에 새로운 객체 추가 (Spread Operator 사용)
            mentors: [...person.mentors, { name, title }],
          }));
        }}
      >
        멘토 추가하기
      </button>

      {/* 멘토 삭제하기 */}
      <button
        onClick={() => {
          const name = prompt(`누구를 삭제하고 싶은가요?`);
          
          setPerson((person) => ({
            ...person,
            // filter를 사용하여 특정 멘토 제거
            mentors: person.mentors.filter((m) => m.name !== name),
          }));
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}