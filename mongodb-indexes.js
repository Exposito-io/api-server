db.users.createIndex({ name: "text", email: "text"}, { weights: { name: 15, email: 5}})
db.projects.createIndex({ name: "text", description: "text"}, { weights: { name: 15, description: 5}})