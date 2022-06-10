const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let count = 0;

  // Karena berbentuk promise,
  // tunggu promiseTheaterIXX hingga selesai
  // menggunakan await.
  // berlaku juga untuk promiseTheaterVGC
  let ixx = await promiseTheaterIXX();
  ixx.forEach(element => {
    if (element.hasil == emosi) {
      count += 1;
    }
  });

  let vgc = await promiseTheaterVGC();
  vgc.forEach(element => {
    if (element.hasil == emosi) {
      count += 1;
    }
  });

  return count;
};

module.exports = {
  promiseOutput,
};
