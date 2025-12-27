import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({ success: false, message: "not authorized login again" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;  //req.body.userId nu iruthuchu so body remove poanjnirukke:

    } else {
      return res.json({ success: false,
         message: "not authorised Login Again" });
    }
    next();
  } catch (error) {
     res.json({success:false,message:error.message})
  }
};
export default userAuth;
