import React, { useRef } from 'react';
import "./styles.css";

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handdleAdd: (e: React.FormEvent) =>void;
  }

const InputFeild: React.FC<props> = ({ todo, setTodo, handdleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null);    
    return  (
        <form 
            className="input" 
            onSubmit={(e) => {
                handdleAdd(e); 
                inputRef.current?.blur();
            }}
        >
        <input 
            type='input' 
            placeholder='Enter a todo' 
            className='input__box' 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            ref={inputRef}
        />
        <button className='input_submit' type='submit' >
            Add
        </button>
    </form> 
    ); 
};

export default InputFeild
