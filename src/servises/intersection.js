// // let options = {
// //   root: document.querySelector('#scrollArea'),
// //   rootMargin: '0px',
// //   threshold: 1.0,
// // };
// // let observer = new IntersectionObserver(callback, options);

// let target = document.querySelector('ul');
// observer.observe(target);

// const intersectionObserver = new IntersectionObserver(entries => {
//   // If intersectionRatio is 0, the target is out of view
//   // and we do not need to do anything.
//   if (entries[0].intersectionRatio <= 0) return;

//   loadItems(10);
//   console.log('Loaded new items');
// });
// // start observing
// intersectionObserver.observe(document.querySelector('.scrollerFooter'));
