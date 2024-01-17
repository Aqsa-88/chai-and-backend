const asynchandler = (requestHAndling) =>{
   return (req,res,next) =>{
        Promise.resolve(requestHAndling(req,res,next)).catch((err) => next(err))
    }
}


export {asynchandler}
 
// const asynchandler =() =>{}
// const asynchandler = (function) => () =>{}
// const asynchandler = (function ) => async() =>{}


// const asynchandler = (fn) => async(req,res,next) =>{
//     try {
//         await  fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }        //async are higher order function  who as a patameter and return  .as a varible treated

// }

