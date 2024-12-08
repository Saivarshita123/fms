import mongoose from "mongoose";

const loanRequestSchema = new mongoose.Schema({
    LOAN_FORM:String,
    LOAN_PURPOSE:String,
    INTEREST:Number,
    LOAN_TENURE:Number,
    REPAYMENT_FREQUENCY:Number,
    REMARKS:String
});
const loanRequest = new mongoose.model('loan_request', loanRequestSchema);

export default loanRequest;