const users = [];

const adduser = ({ id, tutorName, tutorChat }) => {
  tutorName = tutorName.trim().toLowerCase();
  tutorChat = tutorChat.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.tutorChat === tutorChat && user.tutorName === tutorName
  );
  if (existingUser) {
    return {
      error: "username is taken",
    };
  }

  const user = { id, tutorName, tutorChat };
  users.push(user);
  return { user };
};

const removeuser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getuser = (id) => users.find((user) => user.id === id);

const getuserinroom = (tutorChat) =>
  users.filter((user) => user.tutorChat === tutorChat);

module.exports = { adduser, removeuser, getuser, getuserinroom };
