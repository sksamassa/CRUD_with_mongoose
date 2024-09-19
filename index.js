require('dotenv').config();
const mongoose = require("mongoose");
const User = require("./User");

// connect to the DB
mongoose.connect(process.env.DB_URI);

// Get all users
async function getUsers() {
  const users = await User.find();

  console.log(users);
}

// Find a specific user by ID
// User.findById("66ec01152248c161e4de614a")
//   .then((data) => console.log(data.toJSON()))
//   .catch((e) => console.error("Error fetching user", e.message));

// Update a user by ID
// User.findByIdAndUpdate('66ec01152248c161e4de614a', {
//   name: 'Mahamadou',
//   email: 'geremoun91@gmail.com',
//   age: 31
// }).then(data => console.log('Update user:', data.toJSON()))
//   .catch(e => console.error('Error updating the user:', e.message));

// delete a user by ID
// User.findByIdAndDelete('66ec012db0fff08af3607834')
//   .then(data => console.log('The user with ID 66ec012db0fff08af3607834 was deleted successfully!'))
//   .catch(e => console.error('Error deleting the user!'));

// Delete all 'Sekou'
// User.find({ name: 'Sekou'}).deleteMany().then(() => console.log('Deleted successfully!')).catch(() => console.log('Error Deleting...'));

// getUsers();

// Add a new user
// User({
//   name: 'Sekou',
//   email: 'sekou@samassa.io',
//   age: 25
// }).save()
//   .then((data) =>
//     console.log(`The user with ID: ${data._id} was added successfully!`)
//   )
//   .catch((e) => console.error(`Error adding user: ${e.message}`));
