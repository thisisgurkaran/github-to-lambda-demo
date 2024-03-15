exports.handler = async (event) => {
  console.log("here");
  const data = { statusCode: 200 };
  return JSON.stringify(data);
};
