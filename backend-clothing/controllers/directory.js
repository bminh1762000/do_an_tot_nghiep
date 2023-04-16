const Directory = require("../models/directory");

exports.getDirectory = async (req, res, next) => {
  try {
    const directory = await Directory.find().sort({ _id: 1 });
    if (!directory) {
      const error = new Error("Directory could not found");
      error.statusCode = 404;
      throw error;
    }
    res
      .status(200)
      .json({ message: "Fetch successfully", directory: directory });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// const INITIAL_STATE = {
//   sections: [
//     {
//       title: "hats",
//       imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
//       id: 1,
//       linkUrl: "shop/hats",
//     },
//     {
//       title: "jackets",
//       imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
//       id: 2,
//       linkUrl: "shop/jackets",
//     },
//     {
//       title: "sneakers",
//       imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
//       id: 3,
//       linkUrl: "shop/sneakers",
//     },
//     {
//       title: "womens",
//       imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
//       size: "large",
//       id: 4,
//       linkUrl: "shop/womens",
//     },
//     {
//       title: "mens",
//       imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
//       size: "large",
//       id: 5,
//       linkUrl: "shop/mens",
//     },
//   ],
// };

// exports.getDirectory = async (req, res, next) => {
//   try {
//     INITIAL_STATE.sections.forEach(
//       async ({ title, imageUrl, size, linkUrl }) => {
//         const newDir = new Directory({
//           title: title,
//           imageUrl: imageUrl,
//           linkUrl: linkUrl,
//           size: size ? size : null,
//         });
//         await newDir.save();
//       }
//     );
//     res
//       .status(200)
//       .json({ message: "Fetch successfully", directory: INITIAL_STATE });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };
