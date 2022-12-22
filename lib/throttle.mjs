// import pThrottle from 'p-throttle';

// const throttle = pThrottle({ limit: 1, interval: 1000 });

// const throttledFuction = throttle(async (a, b) => {
//   console.log(a + b);
// });

// // for (let index = 1; index <= 6; index++) {
// //   (async () => {
// //     console.log(await throttledFuction(1, 2));
// //   })();
// // }
// await throttledFuction(1, 2);
// await throttledFuction(1, 2);
// await throttledFuction(1, 2);
// await throttledFuction(1, 2);

import { getSinglePost } from '../lib/hygraphHelpers/getSinglePost';

await getSinglePost();
// await getSinglePost()
// await getSinglePost()
// await getSinglePost()
// await getSinglePost()
