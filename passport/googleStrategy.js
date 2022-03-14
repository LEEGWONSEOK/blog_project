// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy

// const User = require('../models/user')

// module.exports = () => {
//   passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,                       // 구글 로그인에서 발급받은 REST API 키
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: '/auth/google/callback'                          // 구글 로그인 redirect URI 경로
//   }, async (accessToken, refreshToken, profile, done) => {
//     console.log('google profile : ', profile)
//     try {
//       const exUser = await User.findOne({
//         where: { snsID: profile.id, provider: 'google' }
//       })
//       if (exUser) {
//         done(null, exUser)
//       } else {
//         const newUser = await User.create({
//           email: profile?.emails[0].value,
//           nick: profile.displayName,
//           snsId: profile.id,
//           provider: 'google'
//         })
//         done(null, newUser)
//       }
//     } catch (error) {
//       console.error(error)
//       done(error)
//     }
//   }))
// }
