//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    const value = 'good';
    const count = x.filter((e) => e === value);
    if ((count.length === 1) || (count.length === 2)) {
      return 'Publish!';
    } else if (count.length > 2){
      return 'I smell a series!';
    } else {
      return 'Fail!';
    }
  }

  //

  const well = x => {
    const count = x.filter(x => x == 'good').length;
    return count < 1 ? 'Fail!' : 
           count < 3 ? 'Publish!' : 'I smell a series!';
  }