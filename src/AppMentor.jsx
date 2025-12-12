import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState([
    {
      name: '엘리',
      title: '개발자',
      mentor: {
        name: '밥',
        title: '시니어개발자',
      },
    },
    {
      name: '제이',
      title: '디자이너',
      mentor: {
        name: '앨리스',
        title: '수석디자이너',
      },
    },
    {
      name: '마이크',
      title: '프론트엔드 개발자',
      mentor: {
        name: '존',
        title: '테크 리드',
      },
    },
  ]);

  return (
    <div>
      {/* map 함수 시작 */}
      {person.map((p, index) => {
        return (
          <div key={index}>
            <h1>
              {/* person 대신 p를 써야 합니다 */}
              {p.name}는 {p.title}
            </h1>
            <p>
              {p.name}의 멘토는 {p.mentor.name} ({p.mentor.title})
            </p>
          </div>
        );
      })} 
      {/* map 함수 끝: 여기서 닫아줘야 합니다 */}

      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          // 주의: 현재 이 로직은 '배열' 상태에서는 작동하지 않습니다. (객체용 로직)
          setPerson((prev) => {
            return {
              ...prev,
              mentor: {
                ...prev.mentor,
                name,
              },
            };
          });
        }}
      >
        멘토 이름 바꾸기
      </button>

      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          // 주의: 현재 이 로직은 '배열' 상태에서는 작동하지 않습니다.
          setPerson((prev) => {
            return {
              ...prev,
              mentor: {
                title,
              },
            };
          });
        }}
      >
        멘토 추가하기
      </button>

      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          // 주의: 현재 이 로직은 '배열' 상태에서는 작동하지 않습니다.
          setPerson((prev) => {
            return {
              ...prev,
              mentor: {
                title,
              },
            };
          });
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}