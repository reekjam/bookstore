import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  shouldReloadRecords(store, snapshot) {
    return false;
  },

  shouldBackgroundReloadRecord(store, snapshot) {
    console.log("Calling shouldBackgroundReloadRecord");
    const loadedAt = snapshot.record.get('loadedAt');

    if (Date.now() - loadedAt > 3600000) {
      return true;
    } else {
      return false;
    }
  }

});
