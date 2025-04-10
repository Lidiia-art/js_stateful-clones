'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const updatedState = [];
  let newState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      newState = { ...newState, ...action.extraData };
    }

    if (action.type === 'removeProperties') {
      newState = { ...newState };

      for (const item of action.keysToRemove) {
        delete newState[item];
      }
    }

    if (action.type === 'clear') {
      newState = {};
    }

    updatedState.push(newState);
  }

  return updatedState;
}

module.exports = transformStateWithClones;
