# 📝 Todolist-App
React와 Tailwind CSS(CDN 방식)으로 구현한 간단하고 직관적인 Todolist 애플리케이션입니다. 
>기본적인 할 일 관리 기능에 우선순위 설정, 편집 기능, 깔끔한 UI를 추가했습니다.


# 실행 방법
```
npm install
npm run dev
```

# 📂 프로젝트 구조
```plaintext
my-todo-app/
├── public/
│   └── vite.svg               # Vite 기본 이미지
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx       # 할 일 추가 폼
│   │   ├── TodoItem.jsx       # 개별 할 일 항목 (수정 기능 포함)
│   │   └── TodoList.jsx       # 할 일 목록
│   ├── App.jsx                # 상태 관리 및 메인 앱
│   ├── App.css                # 앱 전용 스타일 (비어있음)
│   ├── index.css              # #root용 글로벌 스타일
│   ├── main.jsx               # React 진입점
├── index.html                 # HTML 템플릿 (Tailwind CSS CDN 사용)
├── package.json               # 프로젝트 의존성
├── vite.config.js             # Vite 설정
├── README.md                  # 프로젝트 문서
```

# 📊 데이터 구조
할 일 데이터는 아래와 같은 구조로 관리됩니다:
```js
todos: [
  {
    id: number,        // 고유 ID
    text: string,      // 할 일 텍스트
    completed: boolean, // 완료 여부
    modify: boolean,   // 편집 모드 여부
    priority: string   // "높음", "보통", "낮음"
  },
  // 예시
  { id: 1, text: "공부하기", completed: false, modify: false, priority: "보통" }
]
```

# ✨ 주요 기능
- 할 일 추가: 텍스트와 우선순위(높음, 보통, 낮음)를 입력해 새로운 할 일을 추가
- 할 일 삭제: 목록에서 불필요한 할 일을 삭제
- 완료 체크: 체크박스를 통해 할 일의 완료 상태를 토글하며, 완료된 항목은 취소선으로 표시
- 우선순위 설정: 할 일에 높음, 보통, 낮음 우선순위를 지정하고, 색상으로 구분해 표시
- 편집 기능: 기존 할 일의 텍스트와 우선순위를 수정가능
- 데이터 저장: localStorage를 사용해 할 일 목록과 마지막 ID를 저장, 새로고침 후에도 데이터가 유지

# 🎯 기능 구현
![image](https://github.com/user-attachments/assets/c10a0e94-b751-433d-a5e3-aed21e8dbb1a)

# 🖌️ 느낀점
- React 컴포넌트 분리: 상태 관리와 UI를 분리하며 코드 구조를 깔끔하게 유지하는 법을 배웠습니다.
- Tailwind CSS: CDN 방식으로 빠르게 스타일링했지만, 유틸리티 클래스의 편리함과 생산성을 체감했습니다.
- localStorage: 데이터를 브라우저에 저장하며 상태 유지의 중요성을 알게 되었습니다.
