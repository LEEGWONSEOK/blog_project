// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// const dir = '../../../public/profile';

// fs.readdir(dir, (error) => {
//   // uploads 폴더 없으면 생성
//   if (error) {
//     fs.mkdirSync(dir);
//   }
// })

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, dir);
//     },
//     filename(req, file, cb) {
//       const ext = path.extname(file.originalname);
//       cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// const postProfileImg = (req, res) => {
//   console.log(req.file);
//   res.json({ url: `/${req.file.filename}` });
// };

// module.exports = {
//   postProfileImg,
//   upload
// };