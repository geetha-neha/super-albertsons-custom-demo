// file: userManager.js

/**
 * Simple in-memory user manager
 */

const users = [];

/**
 * Add a new user
 * @param {string} name
 * @param {string} email
 * @returns {object}
 */
function addUser(name, email) {
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  const user = {
    id: users.length + 1,
    name,
    email,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  return user;
}

/**
 * Get all users
 * @returns {Array}
 */
function getUsers() {
  return users;
}

/**
 * Find a user by email
 * @param {string} email
 * @returns {object | undefined}
 */
function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

// Example usage
try {
  addUser("Alice", "alice@example.com");
  addUser("Bob", "bob@example.com");

  console.log("All users:", getUsers());
  console.log("Find Bob:", findUserByEmail("bob@example.com"));
} catch (error) {
  console.error("Error:", error.message);
}
