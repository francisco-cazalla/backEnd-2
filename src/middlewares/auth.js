import jwt from 'jsonwebtoken'; import dotenv from 'dotenv';
dotenv.config();
export default function auth(req,res,next){
  const h = req.headers.authorization;
  if(!h) return res.status(401).json({error:'Token faltante'});
  const token = h.split(' ')[1];
  try {
    req.user = jwt.verify(token,process.env.JWT_SECRET);
    next();
  } catch { return res.status(401).json({error:'Token inválido'}); }
}
export function authorizeRole(role){
  return (req,res,next)=>{
    if(!req.user||req.user.role!==role)
      return res.status(403).json({error:'Permiso denegado'});
    next();
  };
}
