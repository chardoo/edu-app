import jwt from 'jsonwebtoken';

/** Generates Json Web Token */
const generateJwtToken = (email: string, userId: string, role: string) => {
  const jwtExpireTime = parseInt(process.env.JWT_ACCESS_TOKEN_TIME!, 10);
  const expiration = process.env.JWT_ACCESS_TOKEN_EXP!;

  const jwtSecret = process.env.JWT_SECRET!;
  const bufferSecret = Buffer.from(jwtSecret, 'base64');
  const timer = new Date();
  timer.setUTCHours(timer.getUTCHours() + jwtExpireTime);

  const jwtToken = jwt.sign({ userId, email, role }, bufferSecret, {
    expiresIn: '2 days', 
  });

  return { jwtToken, expiration: timer };
};

export default generateJwtToken;
