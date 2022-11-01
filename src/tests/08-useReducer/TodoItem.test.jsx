import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe("Pruebas TodoItem", () => {
  const todo = {
    id: 1,
    desc: "Aprender React",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrarse el todo pendiente por completar", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const btn = screen.getByRole("button");
    expect(btn.className).toBe("btn btn-danger");

    
  });


    test("debe de mostrar el todo completado", () => {

       todo.done = true;
    
        render(
            <TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
            />
        );
    

       /*  const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toBe('text-decoration-line-through'); */
      
    
    
        });


        test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        
            render( 
                <TodoItem 
                    todo={ todo } 
                    onToggleTodo={ onToggleTodoMock } 
                    onDeleteTodo={ onDeleteTodoMock } 
                /> 
            );
    
         /*    const spanElement = screen.getByLabelText('span');
            fireEvent.click( spanElement );
    
            expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
     */
        });



        test('button debe de llamar el onDeleteTodo cuando se hace click', () => {
            
                render( 
                    <TodoItem 
                        todo={ todo } 
                        onToggleTodo={ onToggleTodoMock } 
                        onDeleteTodo={ onDeleteTodoMock } 
                    /> 
                );
        
                const buttonElement = screen.getByRole('button');
                fireEvent.click( buttonElement );
        
                expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
        
            }
        );

















});
