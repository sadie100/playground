import React, { useReducer, createContext, useContext } from "react";

type todoType = {
  id: number;
  text: string;
  done: boolean;
};

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

const todoReducer = (
  state: todoType[],
  action: { type?: string; todo: todoType; id?: number }
) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TestTodoContext = createContext();

export const TestTodoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TestTodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TestTodoContext.Provider>
  );
};

export const useTodoState = () => {
  return useContext(TestTodoContext);
};
