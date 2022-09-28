import { v4 as uuidv4 } from "uuid";
let usersData = [
  {
    name: "zoran",
    lastname: "janjic",
    age: 33,
    id: "1",
  },
  {
    name: "moeko",
    lastname: "janjic",
    age: 28,
    id: "2",
  },
  {
    name: "jovana",
    lastname: "janjic",
    age: 2,
    id: "3",
  },
];

export const readUsers = (req, res) => {
  res.send(usersData);
};

export const readUser = (req, res) => {
  const { id } = req.params;

  const foundUser = usersData.find((user) => id === user.id);

  res.send(foundUser);
};

export const createUser = (req, res) => {
  console.log(req.body);
  const user = req.body;

  usersData.push({ ...user, id: uuidv4() });

  res.send(`User with the name: ${user.name} added.`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  usersData = usersData.filter((user) => user.id !== id);
  console.log(usersData);

  res.send(`User deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, lastname, age } = req.body;

  let userData = usersData.find((user) => user.id === id);

  if (name) {
    userData.name = name;
  }
  if (lastname) {
    userData.lastname = lastname;
  }
  if (age) {
    userData.age = age;
  }

  res.send(userData);
};
