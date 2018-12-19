const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          created_at: action.created_at,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      console.log(state);
      return state
        .map(
          todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
        )
        .sort((t1, t2) => t1.completed - t2.completed);

    default:
      return state;
  }
};

export default todos;
