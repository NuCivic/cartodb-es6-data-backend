let Module = {
  member: 'Member',
  method: str => {
    return `Hello ${str}, how are you`;
  },

  privates: _privates
};

const _privates = {
  processStuff: () => {}
  // ...
}

export default Module;
