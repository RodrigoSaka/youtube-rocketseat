import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CourseList() {
  const qtd = 2;
  // Segundo parametro diz que atualiza só quando "qtd" for atualizada
  const courses = useSelector(state => state.data.slice(0, qtd), [qtd]);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({ type: 'ADD_COURSE', title: 'GraphQL' });
  }

  return (
    <>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
      <button type='button' onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  );
}

export default CourseList;
