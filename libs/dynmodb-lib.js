import AWS from "aws-sdk";
export function call(action, params) {
  const dynomoDB = new AWS.DynamoDB.DocumentClient();
  return dynomoDB[action](params).promise();
}
