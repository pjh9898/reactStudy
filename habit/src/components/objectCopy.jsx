import React from 'react';

const ObjectCopy = () => {
  const a = { id: '1', count: 0 };
  const b = { id: '2', count: 0 };
  const c = b;

  // console.log(a);
  // console.log(b);
  // console.log(c);

  // -------------------------

  // b.count = 1;

  // console.log(b);
  // console.log(c);

  // -------------------------

  // const array = [
  //   { id: '1', count: 0 },
  //   { id: '2', count: 0 }
  // ];
  // const array2 = array;
  // const array3 = [...array];

  // -------------------------

  // array[0].count = 2;
  // console.log(array[0]);
  // console.log(array2[0]);
  // console.log(array3[0]);

  // -------------------------

  // array.push({ id: '3', count: 0});
  // console.log(array.length);
  // console.log(array2.length);
  // console.log(array3.length);

  // -------------------------

  // const num = 2;
  // const numObj = { num: 2};

  // console.log(num);
  // console.log(numObj);


  return (
    <div>
            
    </div>
  );
};

export default ObjectCopy;