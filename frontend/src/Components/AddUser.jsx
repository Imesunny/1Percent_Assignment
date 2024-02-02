import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../Redux/action";


const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
    margin-top: 20px;
  }
`;

const AddUser = () => {
  const dispatch = useDispatch()
  const initialValue = {
    title: "",
    description: "",
    dueDate: "",
    priority: 1, //setting 1 as the initial priority
    completed: false,
  };
  const [user, setUser] = useState(initialValue);
  console.log(user);
  const { title, description, dueDate, priority } = user;

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async() => {
    console.log(user, "User-Form-Data");
   dispatch(addNewTodo(user));
    setUser(initialValue);
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Task Title</InputLabel>
        <Input
          onChange={onValueChange}
          name="title"
          value={title}
          id="my-input"
        />
      </FormControl>

      <FormControl>
        <InputLabel>Task Description</InputLabel>
        <Input
          onChange={onValueChange}
          name="description"
          value={description}
          id="my-input"
        />
      </FormControl>

      <FormControl>
        <InputLabel>Due - Date</InputLabel>
        <Input
          type="date"
          onChange={onValueChange}
          name="dueDate"
          value={dueDate}
          id="my-input"
        />
      </FormControl>

      <FormControl>
        <InputLabel>Priority</InputLabel>
        <Select
          onChange={onValueChange}
          name="priority"
          value={priority}
          id="my-input"
        >
          <MenuItem value={1}>Priority 1</MenuItem>
          <MenuItem value={2}>Priority 2</MenuItem>
          <MenuItem value={3}>Priority 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={addUserDetails}>
          ADD USER
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
