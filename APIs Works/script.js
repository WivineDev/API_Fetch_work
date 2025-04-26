// async function fetchAndDisplayUsers() {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await users.json();
//     const userDetails = data.map(user => {
//         return `<li>
//             <h2>${user.name}</h2>
//             <p>Email: ${user.email}</p>
//             <p>City: ${user.address.city}</p>
//             <p>Company: ${user.company.name}</p>
//             <p>Phone: ${user.phone}</p>
//         </li>`;
//     })
//     document.getElementById('userDetails').innerHTML = userDetails;
// }

// fetchAndDisplayUsers();
