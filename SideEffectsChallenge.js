// not clean

// function connectDatabase() {
//   const didConnect = database.connect();
//   if (didConnect) {
//     return true;
//   } else {
//     console.log('Could not connect to database!');
//     return false;
//   }
// }
//
// function determineSupportAgent(ticket) {
//   if (ticket.requestType === 'unknown') {
//     return findStandardAgent();
//   }
//   return findAgentByRequestType(ticket.requestType);
// }
//
// function isValid(email, password) {
//   if (!email.includes('@') || password.length < 7) {
//     console.log('Invalid input!');
//     return false;
//   }
//   return true;
// }


// clean


function initApp() {
  try {
    connectDatabase();
  } catch (error) {
    console.log(error.message);
    // showErrorMessage(...)
  }
}

function connectDatabase() {
  const didConnect = database.connect();
  if (!didConnect) {
    throw new Error('Could not connect!');
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  return email.includes('@') && password.length >= 7;
}
