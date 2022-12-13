//react query imports
import { useQuery, useMutaion, useQueryClient } from "react-query";

import { getTodos, updateTodos, deleteTodos, addTodos } from "../api/todosApi";

import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faTrash, faUpload } from "@fontawesome/free-solid-svg-icons";

import { useState } from "react";

const TodosList = () => {
  const [newTodo, setNewTodo] = useState(" ");

  return <div>TodosList</div>;
};

export default TodosList;
