const Borrowers = {
exits: 'This Borrower exit in our system',
cannotCreate: 'sorry create it again for Us',
notFound: 'Sorry such user not found',
notgivingout:'not able to assign money to reciever',
moneyalocationfailed:' Allocation failed ',
amountNotAvailable:' this amount is not available please ',
paymentOutOfRange:'payment is out of range check it well'
}
const Agent = {
cannotCreate: 'Sorry the agent was not created',
amountNotCreated: 'sorry couldn disburse money to agent',
notFound: 'Sorry we can find any agent',
passwordChangeFailure: 'failure in changing password',
editpaymentUnsucceful:'unable to update the disburse',
successfulDelete:'succesfully deletion',
deletionUnsuccefull:'unsuccessfull deletion',
successfulSignUp:'successful   SignUp',
forgotPassword: 'Forgot Password',
resetSuccessful: " Reset Successful",
imagesRecognised: "Image Recognised"
}

const images ={
  noImageFound: "sorry not image was found"
}
const queueName = {
  ModelQueue: 'ModelQueue',
  SeachFaceQueue: 'SeachFaceQueue',
};
const jobName ={
    trainModel: 'trainModel',
    searchFace: 'searchFace',
    sendEmail:  'sendEmail',
    forgotPassword: 'forgotPassword',
    successfulReset: "successfulReset",
    imageRecognisedEmail: "imageRecognisedEmail"
}

const Payment = {
    unsuccessful: 'unsucceful payment sorry'    
}

const LoginValidationConstants = {
    password: 'Login Credentials Error!!',
    passwordNotEmpty: 'Login Credentials Error!!',
  };
export default{
    LoginValidationConstants,
    queueName,
    jobName,
    Borrowers,
    Payment,
    Agent,
    images
}

