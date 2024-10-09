const asyncHandler = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (err) {
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
      });
    }
  };
};

export default asyncHandler;

// const asyncHandler = (func) => async () => {
//   try {
//     await func(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// const asyncHandler = (func) => {
//     return (func) => {
//       return func(a,b,c);
//     };
//   };

//   const func = (a, b, c) => {
//     const sum = a + b + c;
//     console.log(sum);
//   };

//   // Now we pass `func` to `asyncHandler`
//   const handleFunc = asyncHandler(func);

//   // Call the returned function with parameters
//   handleFunc(1, 2, 3);
