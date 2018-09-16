Immer.js (https://github.com/mweststrate/immer)

- Play around with produce()
- Make mutations/changes
  - make no chnages 
  - make changes anywhere within the state (tree-like object)
  - make multiple changes within the state
  - make changes and undo them within the same produce()-call
  - compare before/after changes (===, ==, toBeEqual, ...) => find out how it works
- Make patches
  - create patches
  - apply (created) patches to the baseState
  - compare resulting state
- Anti-Immer.js
  - make changes by bypassing produce()
- Explore the limitations, peculiarities and pitfalls of Immer.js 