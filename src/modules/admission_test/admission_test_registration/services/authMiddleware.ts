// const jwt = require('jsonwebtoken');
// const authMiddleware = async (req, res, next) => {
//     try {
//         const token = await req.headers.authorization.split(' ')[1];

//         if (!token) {
//             return res.status(401).json('user not authorized');
//         }
//         const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         if (decodeToken) {
//             req.userData = decodeToken;
//             next();
//         }
//     } catch (error) {
//         return res.status(401).json('user not authorized');
//     }
// };
// export default authMiddleware;
