import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";

import { Box, TextField, Button } from '@material-ui/core';

import {ADD_TODO} from "../redux/actions";

export default function TodoAdder(){
    const [title, setTitle] = useState(null);
    const titleFieldRef = useRef(null);
    const dispatch = useDispatch();

     function handleTextChange(e){
         setTitle(e.target.value);
     }

    function addTodoItem(params){
        // We need to dispatch the ADD_TODO reduc action here
        // We will come back here once the todo items are listed
        if(title){
            dispatch({
                type: ADD_TODO,
                payload: {
                    title,
                }
            });
            setTitle(null);
            titleFieldRef.current.value = "";
        }
        else{
            
        } 
    }

    return (
        <Box>
          <TextField style= {{
              width: 400,
          }}label="Add new todo" 
          inputRef = {titleFieldRef}
          variant="filled"
          onChange = {handleTextChange}/>
          <Button style= {{
              height: 55,
          }}
          variant="contained" 
          color="primary"
          onClick={addTodoItem}>Add</Button>
        </Box>
    )
}